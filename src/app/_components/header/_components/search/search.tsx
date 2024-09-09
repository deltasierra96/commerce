'use client';
import { Container } from '@/components/ui/container';
import { Drawer } from '@/components/ui/drawer';
import { SearchInput } from '@/components/ui/search-input';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';

type SearchProps = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

export const Search = ({ isOpen, setOpen }: SearchProps) => {
  const searchParams = useSearchParams();
  return (
    <Drawer position={'top'} size={'lg'} onOpenChange={setOpen} isOpen={isOpen}>
      <Drawer.Content>
        <Container>
          <div className="py-2">
            <Form action="/search" className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
              <SearchInput
                type="text"
                name="q"
                defaultValue={searchParams?.get('q') || ''}
                autoFocus
                autoComplete="off"
                hideLabel
                placeholder="What are you looking for today?"
              />
            </Form>
          </div>
        </Container>
      </Drawer.Content>
    </Drawer>
  );
};
