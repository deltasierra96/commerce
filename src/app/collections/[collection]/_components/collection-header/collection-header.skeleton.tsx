import { Container } from '@/components/ui/container';

export const CollectionHeaderSkeleton = () => (
  <Container>
    <div className="flex items-center rounded-lg bg-white md:h-[18rem] lg:h-[15rem] xl:h-[22rem]">
      <div className="flex w-full flex-col justify-center self-stretch py-4">
        <Container>
          <div className="max-w-[40rem] space-y-4">
            <div className="h-4 max-w-[8rem] animate-pulse rounded-md bg-neutral-200" />
            <div className="h-10 max-w-[8rem] animate-pulse rounded-md bg-neutral-200" />
            <div className="space-y-2">
              <div className="h-4 animate-pulse rounded-md bg-neutral-200" />
              <div className="h-4 max-w-[32rem] animate-pulse rounded-md bg-neutral-200" />
              <div className="h-4 max-w-[24rem] animate-pulse rounded-md bg-neutral-200" />
            </div>
            <div className="h-4 max-w-[6rem] animate-pulse rounded-md bg-neutral-200" />
          </div>
        </Container>
      </div>
    </div>
  </Container>
);
