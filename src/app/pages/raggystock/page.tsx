'use client';
import Header from '@/app/components/header';
import RaggystockSearch from '@/app/components/raggystock-search';
import ChatBotResponseBox from '@/app/components/chatbot-response-box';
import Box from '@/app/components/box';
import { useState } from 'react';

import text from '@/app/config/text/en';

import type QueryResponse from '@/app/types/QueryResponseProps';
import type Product from '@/app/types/Product';
import ProductCarouselProps from '@/app/types/ProductCarouselProps';

export default function Raggystock() {
  const [sentQuery, setSentQuery] = useState<boolean>(false);
  const [receivedResponse, setReceivedResponse] = useState<boolean>(false);
  const [queryResponse, setQueryResponse] = useState<QueryResponse>();
  const [query, setQuery] = useState<string>();
  const [sessionId] = useState(() => {
    return Math.floor(Math.random() * 10000);
  });
  const productCarouselProps: ProductCarouselProps = {
    products: [],
  };

  if (queryResponse) {
    const featuredProduct: Product = {
      ...queryResponse?.featuredProduct,
      isFeaturedProduct: true,
    };
    productCarouselProps.products.push(featuredProduct, ...(queryResponse?.products ?? []));
  }

  return (
    <>
      <Header />
      <Box className="text-center font-bold text-[32px] m-[30px_0px_30px_0px]">{text.raggystockSearch}</Box>
      <ChatBotResponseBox
        productCarouselProps={productCarouselProps}
        setSentQuery={setSentQuery}
        setReceivedResponse={setReceivedResponse}
        chatQuery={query}
        chatResponse={queryResponse?.message}
        sessionId={sessionId}
        sentQuery={sentQuery}
        receivedResponse={receivedResponse}
      />
      <RaggystockSearch
        setQuery={setQuery}
        query={query}
        setQueryResponse={setQueryResponse}
        sessionId={sessionId}
        setSentQuery={setSentQuery}
        setReceivedResponse={setReceivedResponse}
      />
    </>
  );
}
