import { getCollectionHeader } from '@/shopify';
import { wait } from '@/utils/wait';
import { CollectionHeaderView } from './_components/collection-header-view';

export const CollectionHeader = async ({ params }: { params: { collection: string } }) => {
  const collectionHeader = await getCollectionHeader(params.collection);

  await wait(6000);
  return <CollectionHeaderView collectionHeader={collectionHeader} />;
};
