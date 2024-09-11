import '../styles/main.css';

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
import { AriaProvider } from '@/providers';
import { clsx } from '@/utils';
import { getCart } from 'lib/shopify';
import { ensureStartsWith } from 'lib/utils';
import { cookies } from 'next/headers';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';
import { Banner } from './_components/banner';
import { CartProvider } from './_components/cart';
import { Footer } from './_components/footer';
import { Header } from './_components/header';
import { SecondaryNavigation } from './_components/header/_components/secondary-navigation';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
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
        <body className="scrollbar-thin scrollbar-track-neutral-400 scrollbar-thumb-neutral-200 bg-white font-sans text-base font-normal leading-6 text-neutral-950 antialiased">
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
            <div className="flex h-full min-h-screen flex-col bg-white">
              <div className="flex-1">
                <div className="flex flex-col">
                  <div className="block lg:hidden">
                    <Banner />
                  </div>
                  <div className="sticky top-0 z-header">
                    <div className="hidden lg:block">
                      <SecondaryNavigation />
                    </div>
                    <Header />
                  </div>
                  <div className="hidden lg:block">
                    <Banner />
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
}
