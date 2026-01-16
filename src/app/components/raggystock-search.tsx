import Box from '@/app/components/box';
import Search from '@/app/assets/icons/search.svg';
import RaggystockLogo from '@/app/assets/icons/raggystock-logo.svg';
import { useState, useRef, useEffect } from 'react';

import text from '@/app/config/text/en';

import type RaggystockSearch from '../types/RaggystockSearchProps';
import type ChatQuery from '@/app/types/ChatBotResponseBoxProps';
import type ChatResponse from '@/app/types/QueryResponseProps';

import styles from '@/app/components/raggystock-search.module.css';

import { WebSocket } from '@/app/utils/websocket';

const RaggystockSearch = (props: RaggystockSearch) => {
  const { setQuery, setQueryResponse, query, sessionId, setSentQuery, setReceivedResponse } = props;
  const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);
  const [isResponse, setIsResponse] = useState<boolean>(true);
  const clientInstanceRef = useRef<WebSocket | null>(null);

  async function postQuery() {
    const searchInput = document.getElementById('searchInput');

    if (searchInput) {
      searchInput.value = '';
    }
    //websocket
    const client = clientInstanceRef.current;
    if (client) {
      const payload: ChatQuery = {
        sessionId: sessionId,
        query: query,
      };
      client.sendMessage(payload);
    } else {
      console.error('WebSocket client not initialized.');
    }
  }

  const handleResponse = (data: ChatResponse) => {
    setReceivedResponse(true);
    setQueryResponse(data);
    setIsResponse(true);
    setIsSearchClicked(false);
  };

  const handleSearchClick = () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      const searchInputValue: string = searchInput.value;
      if (searchInputValue.length !== 0) {
        setSentQuery(true);
        setIsResponse(false);
        setIsSearchClicked(true);
        postQuery();
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  useEffect(() => {
    const client = new WebSocket();
    client.connect(handleResponse);
    clientInstanceRef.current = client;

    return () => {
      client.disconnect();
    };
  }, []);

  return (
    <Box className="m-[0px_20px_40px_20px]">
      <Box className={'bg-[#f9fafb] w-full max-w-[1400px] h-[40px] flex mt-[20px] mx-auto'}>
        <Box
          id="searchInput"
          className={'grow pl-[10px] rounded-[4px_0px_0px_4px] border-[#DADCDF] border-[1px] border-solid'}
          as="input"
          placeholder={text.startYourSearch}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)}
        ></Box>
        {isResponse && !isSearchClicked && (
          <Box className={'bg-[#bd0000] rounded-[0px_3px_3px_0px] cursor-pointer'} onClick={() => handleSearchClick()}>
            <RaggystockLogo svg={Search} width="39px" />
          </Box>
        )}

        {!isResponse && isSearchClicked && (
          <Box className="bg-[#bd0000] rounded-[0px_3px_3px_0px] w-[39px] flex justify-center items-center">
            <Box className={styles.loader} role="status" aria-live="polite" aria-label="Loading..." />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RaggystockSearch;
