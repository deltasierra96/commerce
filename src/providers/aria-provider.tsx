'use client';

import { useRouter } from 'next/navigation';
import { RouterProvider } from 'react-aria-components';

type AriaProviderProps = {
  children?: React.ReactNode;
};

export const AriaProvider = ({ children }: AriaProviderProps) => {
  const router = useRouter();

  return <RouterProvider navigate={(e) => router.push(e)}>{children}</RouterProvider>;
};
