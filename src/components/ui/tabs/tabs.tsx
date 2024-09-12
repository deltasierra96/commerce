import { clsx } from '@/utils';
import {
  Tabs as RACTabs,
  TabList as RACTabList,
  Tab as RACTab,
  TabPanel as RACTabPanel,
  type TabsProps as RACTabsProps,
  type TabProps as RACTabProps,
  type TabListProps as RACTabListProps,
  type TabPanelProps as RACTabPanelProps
} from 'react-aria-components';
import { borderStyles, focusRing } from '../focus-ring';
import { Icon, type IconTypeProps } from '../icon';

export type TabsProps = RACTabsProps;

const Root = ({ orientation, className, ...props }: TabsProps) => {
  return (
    <RACTabs
      {...props}
      orientation={orientation}
      className={clsx(
        'flex gap-4',
        orientation === 'vertical' && 'flex-row',
        orientation === 'horizontal' && 'flex-col',
        className
      )}
    />
  );
};

export type TabPanelProps = RACTabPanelProps;

const Panel = ({ className, ...props }: TabPanelProps) => {
  return (
    <RACTabPanel
      {...props}
      className={clsx(
        'flex-1 rounded-md border border-neutral-100 bg-white p-2 text-sm',
        className
      )}
    />
  );
};

export type TabProps = RACTabProps & {
  icon?: IconTypeProps;
};

const Tab = ({ className, icon, children, ...props }: TabProps) => {
  return (
    <RACTab
      {...props}
      className={clsx(
        'flex cursor-default items-center whitespace-nowrap rounded border border-transparent px-6 text-sm font-medium text-neutral-500 outline-none transition-all duration-75 group-data-[orientation=vertical]:w-full hover:bg-neutral-50 selected:bg-white selected:text-neutral-900 selected:shadow-sm disabled:text-neutral-400',
        focusRing({ isFocusVisible: true }),
        borderStyles({ isFocusVisible: true }),
        className
      )}
    >
      <div className="flex items-center gap-x-2">
        {icon ? <Icon icon={icon} /> : null}
        <>{children}</>
      </div>
    </RACTab>
  );
};

export type TabListProps<T extends object> = RACTabListProps<T>;

const List = <T extends object>({ className, ...props }: TabListProps<T>) => {
  return (
    <RACTabList
      {...props}
      className={clsx(
        'group',
        'inline-flex gap-1 rounded-md border border-neutral-100 bg-neutral-100 p-1',
        'orientation-vertical:flex-col orientation-vertical:items-start',
        'orientation-horizontal:flex-row',
        'orientation-horizontal:h-input',
        'orientation-horizontal:items-stretch',
        className
      )}
    />
  );
};

export const Tabs = Root as typeof Root & {
  List: typeof List;
  Tab: typeof Tab;
  Panel: typeof Panel;
};

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
