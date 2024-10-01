'use client';
import { ApolloWrapper } from './apollo';
import { AriaProvider } from './aria-provider';

export default function Providers({ children }: { children?: React.ReactNode }) {
  return (
    <ApolloWrapper>
      <AriaProvider>{children}</AriaProvider>
    </ApolloWrapper>
  );
}
