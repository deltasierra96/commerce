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
  fontStolzl
} from '@/fonts/next-fonts';
import { getCart } from '@/lib/shopify';
import { AriaProvider } from '@/providers';
import { clsx } from '@/utils';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';
import '../styles/main.css';
import { CartProvider } from './_components/cart';
import { Footer } from './_components/footer';
import { Header } from './_components/header';
import { SecondaryNavigation } from './_components/header/_components/secondary-navigation';
import { rootMetadata } from './meta-data';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const cartId = cookies().get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart(cartId);

  return (
    <AriaProvider>
      <html
        lang="en"
        className={clsx(
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
            {/* <Navbar /> */}
            <div className="flex h-full min-h-screen flex-col">
              <div className="flex-1">
                <div className="flex flex-col">
                  <div className="sticky top-0 z-header">
                    <div className="hidden lg:block">
                      <SecondaryNavigation />
                    </div>
                    <Header />
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
    </AriaProvider>
  );
};

export const metadata: Metadata = rootMetadata;
export default RootLayout;
