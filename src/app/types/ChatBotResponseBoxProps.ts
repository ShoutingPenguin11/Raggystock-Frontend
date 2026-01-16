import { SetStateAction } from 'react';

import ProductCarouselProps from '@/app/types/ProductCarouselProps';

export default interface ChatBotResponseBoxProps {
  productCarouselProps: ProductCarouselProps;
  sessionId: number;
  chatResponse: string | undefined;
  chatQuery: string | undefined;
  sentQuery: boolean;
  receivedResponse: boolean;
  setSentQuery: React.Dispatch<SetStateAction<boolean>>;
  setReceivedResponse: React.Dispatch<SetStateAction<boolean>>;
}
