import { Container } from '@/components/ui/container';
import { getCollections } from '@/lib/shopify';
import { CollectionCard } from './_components/collection-card';

// export async function generateMetadata(): Promise<Metadata> {
//   const collections = await getCollections();

//   if (!collections) return notFound();

//   return {
//     title: collections.seo?.title || collection.title,
//     description:
//       collection.seo?.description || collection.description || `${collection.title} products`
//   };
// }

export default async function CollectionsPage() {
  const collections = await getCollections();
  console.log('collections', collections);
  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-row items-end justify-between gap-8 pb-8">
          <div>
            <h1 className="font-heading text-2xl">Shop by category</h1>
            <p>Add a short description for your collections</p>
          </div>
        </div>

        {collections.length === 0 ? (
          <p className="py-3 text-lg">{`No collections found.`}</p>
        ) : (
          <div className="grid grid-flow-row grid-cols-2 gap-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
            {collections.map((collection) => {
              return <CollectionCard key={collection.handle} collection={collection} />;
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
