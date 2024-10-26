import { getCollectionProducts } from '@/shopify/getCollectionProducts';
import { Carousel } from './_components/carousel';

export async function ProductCarousel() {
  const products = await getCollectionProducts({
    collection: 'hidden-homepage-carousel',
    limit: 10
  });

  if (!products?.length) return null;

  return <Carousel items={products} />;
}
