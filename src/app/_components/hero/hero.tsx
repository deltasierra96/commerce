'use client';
import { ButtonLink } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export const Hero = () => {
  return (
    <section className="bg-white">
      <div className="relative">
        <Container>
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative py-32 sm:py-40 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl text-neutral-950 lg:mx-0 lg:max-w-2xl lg:text-white">
                <h1 className="font-heading text-4xl uppercase tracking-tight sm:text-5xl">
                  This month's new drops
                </h1>
                <p className="mt-6 text-lg leading-8">
                  Go grab what you like then we’ll meet you at the gym (duh)
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <ButtonLink size={'lg'} href="#" color={'white'}>
                    Shop Women
                  </ButtonLink>
                  <ButtonLink size={'lg'} href="#" color={'primary'} variant={'filled'}>
                    Shop Men
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="w-full lg:absolute lg:inset-y-0 lg:right-0">
          {/* <img
            className='lg:aspect-auto aspect-[3/2] object-cover lg:h-full lg:w-full'
            src='https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'
            alt=''
          /> */}
          <video
            poster="//images.ctfassets.net/wl6q2in9o7k3/5oK17Fr6pPw8kQIaqge2wV/07d1fa6e0115063f1b930fffd5361e2c/Headless_Desktop_-1.jpg?w=2234&amp;q=90&amp;fm=webp"
            autoPlay
            loop
            playsInline
            className="lg:aspect-auto aspect-[3/2] object-cover lg:h-full lg:w-full"
            data-desktop-breakpoint="tablet"
          >
            <source src="https://videos.ctfassets.net/wl6q2in9o7k3/2sR03YrRnSbS1yCC2NCm6e/a91a040b34334770933eaab6d75811f0/Seasonal_Gym_Story_HERO_WEB_1920x1080.mp4" />
          </video>
        </div>
      </div>

      {/* <Container>
        <div className='relative isolate h-[30rem] overflow-hidden rounded-card bg-white'>
          <Image
            src='https://motorsportandspares.com/cdn/shop/files/Menzerna_1800x.jpg'
            fill
            // src='https://motorsportandspares.com/cdn/shop/files/gtechniq_c2_sealant_1800x.jpg'
            // src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
            alt=''
            className='absolute inset-0 object-cover w-full h-full -z-10'
          />
          <div className='hidden'>
            <div className='absolute inset-x-0 w-full h-full overflow-hidden -z-10 transform-gpu bg-gradient-to-t from-black to-black/50' />

            <div className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'>
              <svg
                className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
                viewBox='0 0 1155 678'
              >
                <path
                  fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
                  fillOpacity='.2'
                  d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
                />
                <defs>
                  <linearGradient
                    id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
                    x1='1155.49'
                    x2='-78.208'
                    y1='.177'
                    y2='474.645'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#9089FC' />
                    <stop offset={1} stopColor='#FF80B5' />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className='px-6 lg:px-8'>
              <div className='max-w-2xl mx-auto py-28 sm:py-24'>
                <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                  <div className='relative px-3 py-1 text-sm leading-6 text-gray-400 rounded-full ring-1 ring-white/10 hover:ring-white/20'>
                    Announcing our next round of funding.{' '}
                    <a href='#' className='font-semibold text-white'>
                      <span className='absolute inset-0' aria-hidden='true' />
                      Read more <span aria-hidden='true'>&rarr;</span>
                    </a>
                  </div>
                </div>
                <div className='text-center'>
                  <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                    Data to enrich your online business
                  </h1>
                  <p className='mt-6 text-lg leading-8 text-gray-300'>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                    commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                  </p>
                  <div className='flex items-center justify-center mt-10 gap-x-6'>
                    <ButtonLink href='/' variant={'filled'} color={'primary'}>
                      Get started
                    </ButtonLink>
                    <ButtonLink
                      href='/'
                      variant={'filled'}
                      color={'secondary'}
                      rightIcon='arrow-right'
                    >
                      Learn more
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container> */}
    </section>
  );
};
