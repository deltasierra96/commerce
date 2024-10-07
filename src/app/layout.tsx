import {
  fontBasierCircle,
  fontFutura,
  fontGeogrotesque,
  fontGreycliff,
  fontInter,
  fontMontserrat,
  fontPoppins,
  fontRecoleta,
  fontRoboto,
  fontSatoshi,
  fontStolzl
} from '@/fonts/next-fonts';
import Providers from '@/providers/providers';
import { getCart } from '@/shopify/getCart';
import { getMenu } from '@/shopify/getMenu';
import { clsx } from '@/utils';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';
import '../styles/main.css';
import { Banner } from './_components/banner';
import { CartProvider } from './_components/cart';
import { Footer } from './_components/footer';
import { Header } from './_components/header';
import { MAIN_MENU_HANDLE } from './constants';
import { rootMetadata } from './meta-data';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const cartId = cookies().get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider

  const cart = getCart(cartId);

  const menu = await getMenu(MAIN_MENU_HANDLE);

  return (
    <Providers>
      <html
        lang="en"
        className={clsx(
          fontSatoshi.variable,
          fontRoboto.variable,
          fontMontserrat.variable,
          fontStolzl.variable,
          fontInter.variable,
          fontBasierCircle.variable,
          fontRecoleta.variable,
          fontGreycliff.variable,
          fontFutura.variable,
          fontGeogrotesque.variable,
          fontPoppins.variable
        )}
      >
        <body className="scrollbar-thin scrollbar-track-neutral-400 scrollbar-thumb-neutral-200 bg-neutral-100 font-sans text-base font-normal leading-6 text-neutral-950 antialiased">
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
                  <Banner />
                  <div className="sticky top-0 z-header">
                    <Header menu={menu} />
                  </div>
                  <div className="flex-1">
                    <main>{children}</main>
                  </div>
                  <Footer />
                </div>
              </div>
            </div>
          </CartProvider>
        </body>
      </html>
    </Providers>
  );
};

export const metadata: Metadata = rootMetadata;
export default RootLayout;
