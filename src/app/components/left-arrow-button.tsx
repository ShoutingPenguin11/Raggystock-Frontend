'use client';

import { ChevronLeft } from 'lucide-react';
import Box from '@/app/components/box';

interface LeftArrowButtonProps {
  setSpinLeft: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function LeftArrowButton({ setSpinLeft }: LeftArrowButtonProps) {
  const handleTouchStart = () => {
    setSpinLeft(true);
  };

  const handleTouchEnd = () => {
    setSpinLeft(false);
  };

  return (
    <Box
      as="button"
      className="rounded-full bg-white p-2 shadow-lg"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <ChevronLeft className="h-6 w-6 text-gray-800" />
    </Box>
  );
}
