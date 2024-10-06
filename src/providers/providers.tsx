'use client';
import { AriaProvider } from './aria-provider';

export default function Providers({ children }: { children?: React.ReactNode }) {
  return <AriaProvider>{children}</AriaProvider>;
}
