import { getCart } from '@/shopify/getCart';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';
import { Banner } from '../_components/banner';
import { CartProvider } from '../_components/cart';
import { Footer } from '../_components/footer';
import { Header } from '../_components/header';
import { rootMetadata } from '../meta-data';
import { Overlay } from '../overlay';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const cartId = (await cookies()).get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider

  const cart = getCart(cartId);

  return (
    <>
      <NextTopLoader
        initialPosition={0.1}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={750}
      />
      <CartProvider cartPromise={cart}>
        <div className="flex h-full min-h-screen flex-col">
          <div className="flex-1">
            <div className="flex flex-col">
              <div className="relative z-[31]">
                <Banner />
              </div>

              <Header />

              <div className="flex-1">
                <main>{children}</main>
              </div>
              <Footer />
              <Overlay />
            </div>
          </div>
        </div>
      </CartProvider>
    </>
  );
};

export const metadata: Metadata = rootMetadata;
export default RootLayout;
