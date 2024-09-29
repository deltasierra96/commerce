'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { focusRing } from '@/components/ui/focus-ring';
import { Icon } from '@/components/ui/icon';
import { clsx } from '@/utils';
import { GridList, GridListItem } from 'react-aria-components';

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' }
    ]
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals' },
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
      { value: 'sweatshirts', label: 'Sweatshirts' },
      { value: 'pants-shorts', label: 'Pants & Shorts' }
    ]
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' }
    ]
  }
];

type CollectionFilterProps = {
  className?: string;
};

export const CollectionFilters = (props: CollectionFilterProps) => {
  return (
    <aside {...props}>
      <div className="divide-y divide-neutral-100">
        {filters.map((section, sectionIdx) => (
          <details className="group" key={section.id} open={sectionIdx === 0}>
            <summary className="flex cursor-pointer select-none list-none items-center justify-between py-6 font-heading text-sm uppercase">
              {section.name}
              <div className="group-open:rotate-180">
                <Icon icon="chevron-down" className="text-neutral-500" />
              </div>
            </summary>
            <GridList
              className={'-mx-3 pb-6'}
              key={section.id}
              aria-label={section.name}
              selectionMode="multiple"
            >
              {section.options.map((section) => (
                <GridListItem
                  className={clsx(
                    focusRing({ isFocusVisible: true }),
                    'flex flex-1 items-center justify-between rounded-sm border border-transparent px-3 py-2 outline-none hover:bg-neutral-100'
                  )}
                  key={section.value}
                  textValue={section.label}
                >
                  {section.label}
                  <Checkbox slot="selection" value={section.value} />
                </GridListItem>
              ))}
            </GridList>
          </details>
        ))}
      </div>

      {/* <aside
        className='sticky top-32 h-[calc(100vh-10rem)] shrink-0 self-start overflow-y-scroll'
        {...props}
      >
        <h2 className='sr-only'>Filters</h2>

        <div className='lg:hidden'>
          <Button type='button' block rightIcon='filter'>
            Filter
          </Button>
        </div>

        <div className='hidden lg:block'>
          <form className='space-y-10 divide-y divide-neutral-100'>
            {filters.map((section, sectionIdx) => (
              <div key={section.name} className={sectionIdx === 0 ? undefined : 'pt-10'}>
                <fieldset>
                  <legend className='block text-sm font-medium text-neutral-900'>
                    {section.name}
                  </legend>
                  <div className='pt-6 space-y-3'>
                    {section.options.map((option) => (
                      <Checkbox key={option.value} aria-label='Select all'>
                        <div className='flex items-center justify-between flex-1'>
                          <span>{option.label}</span>
                          <span className='text-neutral-400'>{`(${Math.floor(Math.random() * (200 - 6) + 6)})`}</span>
                        </div>
                      </Checkbox>
                    ))}
                  </div>
                </fieldset>
              </div>
            ))}
          </form>
        </div>
      </aside> */}
    </aside>
  );
};
