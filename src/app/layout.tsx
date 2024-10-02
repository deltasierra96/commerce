import { GetCartQuery, GetCartQueryVariables } from '@/__generated__/graphql';
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
import { query } from '@/lib/apollo-client';
import { getMenu } from '@/lib/shopify';
import { GET_CART_QUERY } from '@/lib/shopify/queries/cart';
import Providers from '@/providers/providers';
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
import { Incentives } from './_components/incentives';
import { rootMetadata } from './meta-data';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const cartId = cookies().get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider
  // const cart = getCart(cartId);
  const cart = query<GetCartQuery, GetCartQueryVariables>({
    query: GET_CART_QUERY,
    variables: { cartId: cartId!! }
  });

  const menu = await getMenu('next-js-frontend-header-menu');
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
                  <Incentives />
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
