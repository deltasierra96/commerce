'use client';

import { COLLECTION_PRODUCTS_SEARCH_QUERY_URL_PARAM } from '@/app/constants';
import { useSearchParams } from 'next/navigation';
import { Fragment } from 'react';

// Ensure children are re-rendered when the search query changes
export default function ChildrenWrapper({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  return (
    <Fragment key={searchParams.get(COLLECTION_PRODUCTS_SEARCH_QUERY_URL_PARAM)}>
      {children}
    </Fragment>
  );
}
