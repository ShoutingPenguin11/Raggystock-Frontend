import { useState, useEffect } from 'react';

import Box from '@/app/components/box';
import ChatBubble from './chat-bubble';
import ProductCarousel from '@/app/components/product-carousel';

import styles from '@/app/components/chatbot-response-box.module.css';

import type ChatBubbleProps from '../types/chatBubble';
import type ChatBotResponseBoxProps from '../types/ChatBotResponseBoxProps';

const ChatBotResponseBox = (props: ChatBotResponseBoxProps) => {
  const [chatHistory, setChatHistory] = useState<ChatBubbleProps[]>([]);
  const {
    chatResponse,
    chatQuery,
    sentQuery,
    receivedResponse,
    setReceivedResponse,
    setSentQuery,
    productCarouselProps,
  } = props;

  const populatedChatBubble = (message: string, isAIResponse: boolean) => {
    const time = new Date();

    const formatedTime = time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const chatHistoryProp: ChatBubbleProps = {
      message: message,
      isAIResponse: isAIResponse,
      time: formatedTime,
    };
    sessionStorage.setItem('chatHistory', JSON.stringify([...chatHistory, chatHistoryProp]));
    setChatHistory((previousHistory) => [...previousHistory, chatHistoryProp]);
  };

  useEffect(() => {
    const sessionChatHistory = sessionStorage.getItem('chatHistory');
    if (sessionChatHistory !== null && chatHistory.length === 0) {
      const parsedChatHistory: ChatBubbleProps[] = JSON.parse(sessionChatHistory);
      parsedChatHistory.forEach((chat) => {
        populatedChatBubble(chat.message, chat.isAIResponse);
      });
    } else {
      if (sentQuery && chatQuery) {
        populatedChatBubble(chatQuery, false);
        setSentQuery(false);
      } else if (receivedResponse && chatResponse) {
        populatedChatBubble(chatResponse, true);
        setReceivedResponse(false);
      }
    }
  });

  return (
    <Box className={styles.container}>
      <Box className={`${styles.chatBox} m-[0px_40px_40px_40px]`}>
        <Box className="overflow-y-auto scrollbar-hide">
          {chatHistory.map((chat, index) => (
            <Box key={index}>
              <ChatBubble {...chat} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="flex justify-center">
        <ProductCarousel {...productCarouselProps} />
      </Box>
    </Box>
  );
};

export default ChatBotResponseBox;
