import {
  Inter as FontInter,
  Poppins as FontPoppins,
  Montserrat as FontMontserrat,
  Roboto as FontRoboto,
  Fira_Code as FontFiraCode,
} from 'next/font/google';
import localFont from 'next/font/local';

export const fontInter = FontInter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const fontUncutSans = localFont({
  variable: '--font-uncut-sans',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/uncut-sans/Uncut-Sans-VF.ttf',
    },
  ],
});

export const fontRoboto = FontRoboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const fontMontserrat = FontMontserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const fontFiraCode = FontFiraCode({
  subsets: ['latin'],
  variable: '--font-fira',
  display: 'swap',
});

export const fontPoppins = FontPoppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '900'],
});

export const fontBasierCircle = localFont({
  variable: '--font-basier-circle',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/basier-circle/BasierCircle-Bold.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/basier-circle/BasierCircle-BoldItalic.woff2',
      weight: '900',
      style: 'italic',
    },

    {
      path: '../../public/fonts/basier-circle/BasierCircle-SemiBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/basier-circle/BasierCircle-SemiBold.woff2',
      weight: '700',
      style: 'italic',
    },

    {
      path: '../../public/fonts/basier-circle/BasierCircle-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/basier-circle/BasierCircle-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },

    {
      path: '../../public/fonts/basier-circle/BasierCircle-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/basier-circle/BasierCircle-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
});
export const fontStolzl = localFont({
  variable: '--font-stolzl',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/stolzl/Stolzl-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/stolzl/Stolzl-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/stolzl/Stolzl-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/stolzl/Stolzl-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/stolzl/Stolzl-Bold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
});

export const fontGeogrotesque = localFont({
  variable: '--font-geogrotesque',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-Md.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-LtIt.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-Lt.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-MdIt.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-Bd.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-RgIt.woff2',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-BdIt.woff2',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-Rg.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-UltLtIt.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-Th.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-SmBd.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-SmBdIt.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-UltLt.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/geogrotesque/Geogrotesque-ThIt.woff2',
      weight: '100',
      style: 'italic',
    },
  ],
});

export const fontRecoleta = localFont({
  variable: '--font-recoleta',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/recoleta/Recoleta-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/recoleta/Recoleta-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/recoleta/Recoleta-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/recoleta/Recoleta-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/recoleta/Recoleta-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/recoleta/Recoleta-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/recoleta/Recoleta-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
});

export const fontGreycliff = localFont({
  variable: '--font-greycliff',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/greycliff/GreycliffCF-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/greycliff/GreycliffCF-ExtraBold.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/greycliff/GreycliffCF-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/greycliff/GreycliffCF-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/greycliff/GreycliffCF-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/greycliff/GreycliffCF-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/greycliff/GreycliffCF-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
});

export const fontFutura = localFont({
  variable: '--font-futura',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/futura-pt/FuturaPT-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/futura-pt/FuturaPT-LightObl.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/futura-pt/FuturaPT-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/futura-pt/FuturaPT-BookObl.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/futura-pt/FuturaPT-MediumObl.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/futura-pt/FuturaPT-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/futura-pt/FuturaPT-Demi.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/futura-pt/FuturaPT-DemiObl.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/futura-pt/FuturaPT-Heavy.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/futura-pt/FuturaPT-HeavyObl.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/futura-pt/FuturaPT-Bold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/futura-pt/FuturaPT-BoldObl.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/futura-pt/FuturaPT-ExtraBold.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/futura-pt/FuturaPT-ExtraBoldObl.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
});
