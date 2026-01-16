'use client';

import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import Box from '@/app/components/box';
import { Dispatch, SetStateAction } from 'react';

interface CloseButtonProps {
  setEndARSession: Dispatch<SetStateAction<boolean>>;
}

export default function CloseButton({ setEndARSession }: CloseButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    setEndARSession(true);
    router.push('/pages/raggystock');
  };

  return (
    <Box as="button" className="rounded-full bg-white p-2 shadow-lg" onClick={handleClick}>
      <X className="h-6 w-6 text-gray-800" />
    </Box>
  );
}
