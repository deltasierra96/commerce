import Collections from '@/app/_components/layout/search/collections';
import FilterList from '@/app/_components/layout/search/filter';
import { Container } from '@/components/ui/container';
import { sorting } from '@/lib/constants';
import ChildrenWrapper from './children-wrapper';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container className="flex flex-col gap-8 px-4 py-12 md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </div>
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </Container>
    </>
  );
}
