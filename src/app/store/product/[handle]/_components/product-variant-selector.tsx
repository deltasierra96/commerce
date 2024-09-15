'use client';

import { useProduct, useUpdateURL } from '@/app/store/product/[handle]/_components/product-context';
import { borderStyles, focusRing } from '@/components/ui/focus-ring';
import { Product } from '@/lib/shopify/types';
import clsx from 'clsx';
import { Button } from 'react-aria-components';

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean;
};

export type ProductVariantSelectorProps = {
  product: Product;
};

export const ProductVariantSelector = ({ product }: ProductVariantSelectorProps) => {
  const { options, variants } = product;

  const { state, updateOption } = useProduct();
  const updateURL = useUpdateURL();
  const hasNoOptionsOrJustOneOption =
    !options.length || (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({ ...accumulator, [option.name.toLowerCase()]: option.value }),
      {}
    )
  }));

  return options.map((option) => (
    <form key={option.id}>
      <dl className="mb-8">
        <dt className="mb-4 text-sm font-semibold">{option.name}</dt>
        <dd className="flex flex-wrap gap-3">
          {option.values.map((value) => {
            const optionNameLowerCase = option.name.toLowerCase();

            // Base option params on current selectedOptions so we can preserve any other param state.
            const optionParams = { ...state, [optionNameLowerCase]: value };

            // Filter out invalid options and check if the option combination is available for sale.
            const filtered = Object.entries(optionParams).filter(([key, value]) =>
              options.find(
                (option) => option.name.toLowerCase() === key && option.values.includes(value)
              )
            );
            const isAvailableForSale = combinations.find((combination) =>
              filtered.every(
                ([key, value]) => combination[key] === value && combination.availableForSale
              )
            );

            // The option is active if it's in the selected options.
            const isActive = state[optionNameLowerCase] === value;

            return (
              <Button
                onPress={() => {
                  const newState = updateOption(optionNameLowerCase, value);
                  updateURL(newState);
                }}
                // variant={isAvailableForSale ? 'subtle' : 'filled'}
                // color={isAvailableForSale ? 'primary' : 'neutral'}
                key={value}
                isDisabled={!isAvailableForSale}
                aria-label={`${option.name} ${value}${!isAvailableForSale ? ' (Out of Stock)' : ''}`}
                className={clsx(
                  focusRing({ isFocusVisible: true }),
                  borderStyles({ isFocusVisible: true }),
                  'flex min-w-14 items-center justify-center rounded-button border-button px-4 py-3 text-sm font-semibold outline-none transition-all duration-75',
                  isActive &&
                    'cursor-default border-primary-500 bg-white text-primary-500 focus-visible:border-primary-500 pressed:bg-primary-500/5',
                  !isActive &&
                    isAvailableForSale &&
                    'hover:border-neutral-200 hover:bg-neutral-100',
                  !isAvailableForSale &&
                    'relative z-10 cursor-not-allowed border-neutral-100 bg-neutral-100 text-neutral-400'
                )}
              >
                {value}
              </Button>
            );
          })}
        </dd>
      </dl>
    </form>
  ));
};
