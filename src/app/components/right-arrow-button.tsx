'use client';

import { ChevronRight } from 'lucide-react';
import Box from '@/app/components/box';
import { Dispatch, SetStateAction } from 'react';

interface RightArrowButtonProps {
  setSpinRight: Dispatch<SetStateAction<boolean>>;
}
export default function RightArrowButton({ setSpinRight }: RightArrowButtonProps) {
  const handleTouchStart = () => {
    setSpinRight(true);
  };

  const handleTouchEnd = () => {
    setSpinRight(false);
  };

  return (
    <Box
      as="button"
      className="rounded-full bg-white p-2 shadow-lg"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <ChevronRight className="h-6 w-6 text-gray-800" />
    </Box>
  );
}
