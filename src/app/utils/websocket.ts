import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

import type ChatQuery from '@/app/types/ChatQuery';
import type ChatResponse from '@/app/types/QueryResponseProps';

type ChatResponseHandler = (content: ChatResponse) => void;

export class WebSocket {
  private stompClient: Client | null = null;
  private chatResponseHandler: ChatResponseHandler | null = null;

  constructor() {}

  public connect = (chatHandler: ChatResponseHandler) => {
    this.chatResponseHandler = chatHandler;

    const socket = new SockJS('http://localhost:8080/ws');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      debug: (str) => {
        console.log('[WS DEBUG]', str);
      },
      onConnect: () => {
        console.log('Connected to WebSocket');
        stompClient.subscribe('/topic/response', (response) => {
          console.log('Received AI response:', response.body);
          try {
            const content: ChatResponse = JSON.parse(response.body);

            if (this.chatResponseHandler) {
              console.log('our data: ', content);
              this.chatResponseHandler(content);
            }
          } catch (e) {
            console.error('Error parsing AI response:', e);
          }
        });
      },
      onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      },
    });

    stompClient.activate();
    this.stompClient = stompClient;
  };

  public sendMessage = (payload: ChatQuery) => {
    if (this.stompClient && this.stompClient.connected) {
      console.log('Sending message:', payload);
      this.stompClient.publish({
        destination: '/app/products',
        body: JSON.stringify(payload),
      });
    } else {
      console.error('Stomp client is not connected');
    }
  };

  public disconnect = () => {
    if (this.stompClient) {
      this.stompClient.deactivate();
      this.stompClient = null;
    }
  };
}
