'use client';
import { ButtonIcon } from '@/components/ui/button-icon';
import { DialogHeader } from '@/components/ui/dialog';
import { Drawer } from '@/components/ui/drawer';
import { Icon } from '@/components/ui/icon';
import { SearchInput } from '@/components/ui/search-input';
import { COLLECTION_PRODUCTS_SEARCH_QUERY_URL_PARAM } from '@/lib/constants';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';

type SearchProps = Object;

export function SearchSkeleton() {
  return (
    <form className="relative w-full lg:w-80 xl:w-full">
      <input
        placeholder="Search for products..."
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <Icon icon="search" className="h-4" />
      </div>
    </form>
  );
}

export const Search = ({ ...props }: SearchProps) => {
  const searchParams = useSearchParams();
  return (
    <Drawer>
      <ButtonIcon icon="search" variant={'ghost'} />

      <Drawer.Content>
        <DialogHeader>Search</DialogHeader>
        <div className="p-6">
          <Form action="/search" className="relative w-full">
            <SearchInput
              autoFocus
              type="text"
              name="q"
              defaultValue={searchParams?.get(COLLECTION_PRODUCTS_SEARCH_QUERY_URL_PARAM) || ''}
              autoComplete="off"
              hideLabel
              placeholder="What are you looking for today?"
            />
          </Form>
        </div>
      </Drawer.Content>
    </Drawer>
  );
};
