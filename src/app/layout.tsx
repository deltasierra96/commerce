import {
  fontBasierCircle,
  fontDinNext,
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
import { clsx } from '@/utils';
import { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';
import '../styles/main.css';
import { rootMetadata } from './meta-data';

const RootLayout = async ({ children }: { children: ReactNode }) => {
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
          fontPoppins.variable,
          fontDinNext.variable
        )}
      >
        <body className="scrollbar-thin scrollbar-track-neutral-400 scrollbar-thumb-neutral-200 bg-white font-sans text-base font-normal leading-6 tracking-normal text-neutral-950 antialiased">
          <NextTopLoader
            initialPosition={0.1}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={750}
          />
          <>{children}</>
        </body>
      </html>
    </Providers>
  );
};

export const metadata: Metadata = rootMetadata;
export default RootLayout;
