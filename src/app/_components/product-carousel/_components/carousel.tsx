'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import { ButtonLink } from '@/components/ui/button';
import { ButtonIcon } from '@/components/ui/button-icon';
import { Container } from '@/components/ui/container';
import { Product } from '@/shopify/types';
import { useEffect, useState } from 'react';
import { ProductCard } from '../../product-card';

/**
 * Hook to get the swiper instance in a reactive way.
 * This is useful when you need to get the active index of the swiper on every slide change.
 * @returns {Swiper} swiper
 */
export const useSwiperReactive = () => {
  const swiper = useSwiper();

  // State to force a rerender.
  const [, setSignal] = useState({});
  const forceRerender = () => setSignal({});

  useEffect(() => {
    if (swiper) swiper.on('slideChange', forceRerender);
  }, []);

  return swiper;
};

type CarouselProps = {
  items: Product[];
  title?: string;
};

const CarouselNavPrevious = () => {
  const swiper = useSwiperReactive();

  return (
    <ButtonIcon
      size={'lg'}
      onPress={() => swiper.slidePrev()}
      isDisabled={swiper.isBeginning}
      icon="chevron-left"
      color={'primary'}
    />
  );
};

const CarouselNavNext = () => {
  const swiper = useSwiperReactive();

  return (
    <ButtonIcon
      size={'lg'}
      onPress={() => swiper.slideNext()}
      isDisabled={swiper.isEnd}
      icon="chevron-right"
      color={'primary'}
    />
  );
};

export const Carousel = ({ items }: CarouselProps) => {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-8 flex items-center justify-between gap-x-2">
          <h1 className="font-heading text-3xl leading-none">Best selling</h1>
          <ButtonLink rightIcon="chevron-right" href="#" variant={'ghost'}>
            View all
          </ButtonLink>
        </div>

        <div>
          <Swiper
            className="relative"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={2}
            freeMode
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
                freeMode: true
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {items.map((product) => {
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              );
            })}
            <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
              <CarouselNavPrevious />
            </div>
            <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
              <CarouselNavNext />
            </div>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
