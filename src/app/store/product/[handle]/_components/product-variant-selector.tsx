'use client';

import { useProduct, useUpdateURL } from '@/app/store/product/[handle]/_components/product-context';
import { Select, SelectItem } from '@/components/ui/select';
import { Product } from '@/lib/shopify/types';

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

  return (
    <div className="space-y-4">
      {options.map((option) => (
        <form key={option.id}>
          <Select
            defaultSelectedKey={state[option.name.toLowerCase()]}
            label={option.name}
            onSelectionChange={(value) => {
              const newState = updateOption(option.name.toLowerCase(), value.toString());
              updateURL(newState);
            }}
          >
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
                <SelectItem
                  isSelected={isActive}
                  key={value}
                  id={value}
                  isDisabled={!isAvailableForSale}
                  textValue={value}
                >
                  {`${value}${!isAvailableForSale ? ' (Out of stock)' : ''}`}
                </SelectItem>
              );

              // return (
              //   <Button
              //     onPress={() => {
              //       const newState = updateOption(optionNameLowerCase, value);
              //       updateURL(newState);
              //     }}
              //     key={value}
              //     aria-disabled={!isAvailableForSale}
              //     isDisabled={!isAvailableForSale}
              //     className={clsx(
              //       focusRing({ isFocusVisible: true }),
              //       borderStyles({ isFocusVisible: true }),
              //       'flex min-w-14 items-center justify-center rounded-button border-button px-4 py-3 text-sm font-semibold outline-none transition-all duration-75',
              //       {
              //         'cursor-default border-primary-500 bg-white text-primary-500 focus-visible:border-primary-500 pressed:bg-primary-500/5':
              //           isActive,
              //         'hover:border-primary-500': !isActive && isAvailableForSale,
              //         'relative z-10 cursor-not-allowed overflow-hidden bg-neutral-100 text-neutral-500 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-300 before:transition-transform':
              //           !isAvailableForSale
              //       }
              //     )}
              //   >
              //     {value}
              //   </Button>
              // );
            })}
          </Select>
        </form>
      ))}
    </div>
  );
};
