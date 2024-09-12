import { Carousel } from '@/app/_components/carousel';
import { ThreeItemGrid } from '@/app/_components/grid/three-items';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
    </>
  );
}
