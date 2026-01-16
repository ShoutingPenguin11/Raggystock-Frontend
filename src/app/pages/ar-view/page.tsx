'use client';

import ARView from '@/app/components/ar-view';
import LeftArrowButton from '@/app/components/left-arrow-button';
import RightArrowButton from '@/app/components/right-arrow-button';
import CloseButton from '@/app/components/close-button';
import Box from '@/app/components/box';
import { useState } from 'react';

export default function ARPage() {
  const [endARSession, setEndARSession] = useState(false);
  const [spinRight, setSpinRight] = useState(false);
  const [spinLeft, setSpinLeft] = useState(false);
  return (
    <>
      <Box className="flex justify-between items-center w-full p-4 bg-[#BD0000] z-1 pt-[35px] pb-[35px]">
        <Box className="flex gap-2">
          <LeftArrowButton setSpinLeft={setSpinLeft}></LeftArrowButton>
          <RightArrowButton setSpinRight={setSpinRight}></RightArrowButton>
        </Box>
        <CloseButton setEndARSession={setEndARSession}></CloseButton>
      </Box>
      <ARView endARSession={endARSession} spinRight={spinRight} spinLeft={spinLeft} />
    </>
  );
}
