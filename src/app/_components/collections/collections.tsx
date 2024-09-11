'use client';
import { Container } from '@/components/ui/container';
import Image from 'next/image';

const collections = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/'
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/'
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/'
  }
];

export const Collections = () => {
  return (
    <section aria-labelledby="collections-heading" className="bg-white">
      <Container>
        <div className="py-16 sm:py-24 lg:py-32">
          <h2 id="collections-heading" className="text-2xl font-extrabold text-neutral-900">
            Collections
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {collections.map((collection) => (
              <div key={collection.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    fill
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-neutral-500">
                  <a href={collection.href}>
                    <span className="absolute inset-0" />
                    {collection.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-neutral-900">{collection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
