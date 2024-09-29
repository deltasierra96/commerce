'use client';
import { ButtonIcon } from '@/components/ui/button-icon';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { Collection } from '@/lib/shopify/types';
import { clsx } from '@/utils';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from 'react-aria-components';
import { useCollection } from '../../collection-context';
import { CollectionSort } from './_components/collection-sort';

type CollectionToolbarProps = {
  collection: Collection;
};

export const CollectionToolbar = ({ ...props }: CollectionToolbarProps) => {
  const collection = useCollection();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return (
    <div>
      <div className="lg:hidden">
        <Button
          className={clsx(
            'flex w-full items-center justify-center gap-x-2 bg-white px-4 py-4 font-button outline-none transition-all duration-75 pressed:bg-neutral-100'
          )}
        >
          <Icon icon="filter" className="h-4 w-4" />
          <span>Filter</span>
        </Button>
      </div>
      <div className="hidden lg:flex">
        <Container>
          <div className="rounded-lg bg-white p-3">
            <div className="flex items-center justify-end gap-x-4">
              <ButtonIcon icon="grid" variant={'outline'} />
              <CollectionSort />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
