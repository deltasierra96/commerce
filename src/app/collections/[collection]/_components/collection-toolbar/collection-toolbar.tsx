'use client';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { Select, SelectItem } from '@/components/ui/select';
import { Collection } from '@/lib/shopify/types';
import { clsx } from '@/utils';
import { Button } from 'react-aria-components';

type CollectionToolbarProps = {
  collection: Collection;
};

export const CollectionToolbar = ({ collection, ...props }: CollectionToolbarProps) => {
  return (
    <div>
      <div className="lg:hidden">
        <Container>
          <Button
            className={clsx(
              'flex w-full items-center justify-center gap-x-2 bg-white px-4 py-4 font-button outline-none transition-all duration-75 pressed:bg-neutral-100'
            )}
          >
            <Icon icon="filter" className="h-4 w-4" />
            <span>Filter</span>
          </Button>
        </Container>
      </div>
      <div className="hidden lg:flex">
        <Container>
          <div className="rounded-lg bg-white p-8">
            <span>
              <Select label="Sort by" defaultSelectedKey={0} placeholder="Sort by">
                <SelectItem href="/collections/accessories?sort_by=manual">Featured</SelectItem>
                <SelectItem href="/collections/accessories?sort_by=title-ascending">
                  Alphabetically, A-Z
                </SelectItem>
                <SelectItem href="/collections/accessories?sort_by=title-descending">
                  Alphabetically, Z-A
                </SelectItem>
                <SelectItem href="/collections/accessories?sort_by=price-ascending">
                  Price, low to high
                </SelectItem>
                <SelectItem href="/collections/accessories?sort_by=price-descending">
                  Price, high to low
                </SelectItem>
                <SelectItem href="/collections/accessories?sort_by=created-ascending">
                  Date, old to new
                </SelectItem>
                <SelectItem href="/collections/accessories?sort_by=created-descending">
                  Date, new to old
                </SelectItem>
              </Select>
            </span>
          </div>
        </Container>
      </div>
    </div>
  );
};
