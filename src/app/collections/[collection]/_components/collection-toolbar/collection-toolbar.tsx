'use client';
import { CollectionFragment } from '@/__generated__/graphql';
import { Button } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/button-icon';
import { Container } from '@/components/ui/container';
import { DialogHeader } from '@/components/ui/dialog';
import { Drawer } from '@/components/ui/drawer';
import { CollectionLimit } from './_components/collection-limit';
import { CollectionSort } from './_components/collection-sort';

type CollectionToolbarProps = {
  collection: CollectionFragment;
};

export const CollectionToolbar = ({ collection, ...props }: CollectionToolbarProps) => {
  return (
    <>
      <div className="lg:hidden">
        <Drawer>
          <Button rounded block variant={'outline'} leftIcon="filter">
            Filter
          </Button>
          {/* <Button
            className={clsx(
              'flex w-full items-center justify-center gap-x-2 bg-white px-4 py-4 font-button outline-none transition-all duration-75 pressed:bg-neutral-100'
            )}
          >
            <Icon icon="filter" className="w-4 h-4" />
            <span>Filter</span>
          </Button> */}
          <Drawer.Content>
            <DialogHeader>Filter</DialogHeader>
            <CollectionLimit />
            <CollectionSort />
          </Drawer.Content>
        </Drawer>
      </div>
      <div className="hidden lg:flex">
        <Container>
          <div className="rounded-lg bg-white p-3">
            <div className="flex items-center justify-end gap-x-4">
              <ButtonIcon icon="grid" variant={'outline'} />
              <CollectionLimit />
              <CollectionSort />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
