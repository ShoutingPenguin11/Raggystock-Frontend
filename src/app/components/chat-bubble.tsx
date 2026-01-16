import ChatBubbleProps from '../types/chatBubble';
import Box from '@/app/components/box';
import { useEffect, useRef } from 'react';

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, time, isAIResponse }) => {
  const aiBubble = useRef<HTMLDivElement | null>(null);
  const userBubble = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    aiBubble.current?.scrollIntoView({ behavior: 'smooth' });
    userBubble.current?.scrollIntoView({ behavior: 'smooth' });
  }, [aiBubble, userBubble]);
  return (
    <>
      {isAIResponse && (
        <Box ref={aiBubble} className="flex justify-start lg:mr-[30vw] mt-[50px] mr-[15vw]">
          <Box className="max-w-md p-3 rounded-xl bg-gray-200 text-gray-800">
            <Box>{message}</Box>
            <Box as="span" className="text-xs text-gray-500 block text-right mt-1">
              {time}
            </Box>
          </Box>
        </Box>
      )}

      {!isAIResponse && (
        <Box ref={userBubble} className="flex justify-end lg:ml-[30vw] mt-[50px] ml-[15vw]">
          <Box className="max-w-md p-3 rounded-xl bg-[#BD0000] text-white">
            <Box>{message}</Box>
            <Box as="span" className="text-xs text-gray-200 block text-left mt-1">
              {time}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ChatBubble;
