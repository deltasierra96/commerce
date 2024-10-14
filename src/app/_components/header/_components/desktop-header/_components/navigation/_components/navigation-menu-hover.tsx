'use client';
import { Menu as ShopifyMenu } from '@/shopify/types';

import { useOverlayStore } from '@/app/store';
import { Icon } from '@/components/ui/icon';
import { Popover } from '@/components/ui/popover';
import { clsx } from '@/utils';
import { useRef, useState } from 'react';
import { useHover } from 'react-aria';
import { Button, Link } from 'react-aria-components';

export const NavigationMenu = ({ menu }: { menu: ShopifyMenu }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  let triggerRef = useRef(null);

  let { hoverProps, isHovered: isPopoverHovered } = useHover({});
  const { openOverlay, closeOverlay, toggleOverlay } = useOverlayStore();

  console.log('isPopoverHovered', isPopoverHovered);
  console.log('isButtonHovered', isButtonHovered);
  return (
    <div className="nav-menu flex items-center space-x-2">
      <Button
        ref={triggerRef}
        onHoverStart={() => {
          setIsButtonHovered(true);
        }}
        onHoverEnd={() => {
          setTimeout(() => {
            setIsButtonHovered(false);
          }, 500);
        }}
        className={clsx(
          'flex items-center rounded-md px-3 py-2 text-sm font-medium text-neutral-950 outline-none transition-colors duration-75 hover:bg-neutral-100 focus:bg-neutral-100'
        )}
      >
        Menu Root
        <Icon icon="chevron-down" className="ml-2 h-4 w-4 text-neutral-500" />
      </Button>
      <Popover isOpen={isButtonHovered || isPopoverHovered} triggerRef={triggerRef}>
        <div {...hoverProps}>
          <div className="p-2">
            <Link>Popover content</Link>
            <Link>Popover content</Link>
            <Link>Popover content</Link>
            <Link>Popover content </Link>
          </div>
        </div>
      </Popover>
    </div>
  );
};
