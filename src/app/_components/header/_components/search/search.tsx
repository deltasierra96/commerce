'use client';
import { Container } from '@/components/ui/container';
import { Drawer } from '@/components/ui/drawer';
import { SearchInput } from '@/components/ui/search-input';
import React from 'react';

type SearchProps = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

export const Search = ({ isOpen, setOpen }: SearchProps) => {
  return (
    <Drawer position={'top'} size={'lg'} onOpenChange={setOpen} isOpen={isOpen}>
      <Drawer.Content>
        <Container>
          <div className='py-2'>
            <SearchInput
              autoFocus
              autoComplete='off'
              hideLabel
              name='search'
              placeholder='What are you looking for today?'
            />
          </div>
        </Container>
      </Drawer.Content>
    </Drawer>
  );
};
