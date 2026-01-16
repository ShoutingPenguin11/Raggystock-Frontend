import { SetStateAction } from 'react';

import type QueryResponse from './QueryResponseProps';

export default interface RaggystockSearch {
  setQuery: React.Dispatch<SetStateAction<string | undefined>>;
  setSentQuery: React.Dispatch<SetStateAction<boolean>>;
  setQueryResponse: React.Dispatch<SetStateAction<QueryResponse | undefined>>;
  setReceivedResponse: React.Dispatch<SetStateAction<boolean>>;
  query: string | undefined;
  sessionId: number;
}
