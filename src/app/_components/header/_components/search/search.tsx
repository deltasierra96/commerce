'use client';
import { Icon } from '@/components/ui/icon';
import { SearchInput } from '@/components/ui/search-input';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';

type SearchProps = Object;

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
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
    <Form action="/search" className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <SearchInput
        type="text"
        name="q"
        defaultValue={searchParams?.get('q') || ''}
        autoComplete="off"
        hideLabel
        placeholder="What are you looking for today?"
      />
    </Form>
  );
};
