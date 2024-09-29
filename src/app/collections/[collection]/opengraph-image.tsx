import OpengraphImage from '@/app/_components/opengraph-image';
import { getCollection } from '@/lib/shopify';

export const runtime = 'edge';

export default async function Image({ params }: { params: { collection: string } }) {
  const collection = await getCollection({ handle: params.collection });
  const title = collection?.seo?.title || collection?.title;

  return await OpengraphImage({ title });
}