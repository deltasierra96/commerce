'use client';

import { clsx } from '@/utils';
import * as React from 'react';
import {
  Switch as AriaSwitch,
  SwitchContext,
  useSlottedContext,
  type SwitchProps as AriaSwitchProps
} from 'react-aria-components';
import { focusRing } from '../focus-ring';
import { useId } from 'react-aria';
import { Icon } from '../icon';
import { type VariantProps, cva } from 'class-variance-authority';

// ==============================================================================

type SwitchContextProps = AriaSwitchProps & {
  descriptionId?: string;
  toggleId?: string;
};

const useSwitch = () => {
  const switchContext = useSlottedContext<SwitchContextProps>(SwitchContext)!;

  if (!switchContext) {
    throw new Error('useSwitch should be used within <Switch>');
  }

  return {
    ...switchContext
  };
};

// ==============================================================================

type ToggleProps = {
  className?: string;
  showToggleIcon?: boolean;
} & VariantProps<typeof ToggleTrackStyles>;

const ToggleTrackStyles = cva(
  'group-hovered:bg-neutral-300 group-hovered:border-neutral-300 group-hovered:group-pressed:bg-neutral-100 group-hovered:group-pressed:border-neutral-100 group-selected:group-hovered:border-primary-dark group-selected:group-hovered:group-pressed:border-primary-dark group-selected:group-hovered:bg-primary-dark group-selected:group-hovered:group-pressed:bg-primary-dark group-selected:group-pressed:border-primary-dark group-selected:group-pressed:bg-primary-dark flex shrink-0 cursor-pointer items-center rounded-full border border-neutral-100 bg-neutral-200 transition-colors duration-200 group-pressed:border-neutral-300 group-pressed:bg-neutral-300 group-selected:bg-primary-500 group-disabled:cursor-not-allowed group-disabled:border-neutral-100 group-disabled:bg-neutral-100 group-disabled:group-selected:border-neutral-100 group-disabled:group-selected:bg-neutral-100',
  {
    variants: {
      variant: {
        default: 'h-6 w-10.5 p-0.5',
        slim: 'h-1.5 w-9 p-0'
      }
    }
  }
);

const ToggleTabStyles = cva(
  'group-hovered:bg-white flex shrink-0 items-center justify-center rounded-full bg-white transition-all duration-200 group-focus-visible:bg-white group-pressed:bg-white',
  {
    variants: {
      variant: {
        default: 'h-4.5 w-4.5 group-selected:translate-x-full',
        slim: 'h-5 w-5 shadow-md shadow-neutral-950/20 group-selected:translate-x-full'
      }
    }
  }
);

const Toggle = ({ variant = 'default', showToggleIcon = true }: ToggleProps) => {
  const switchContext = useSwitch();
  const { toggleId } = switchContext;
  return (
    <div
      id={toggleId}
      className={clsx(ToggleTrackStyles({ variant }), focusRing({ groupIsFocusVisible: true }))}
    >
      <div className={clsx(ToggleTabStyles({ variant }))}>
        {showToggleIcon ? (
          <>
            <Icon className="absolute h-3 w-3 opacity-0 group-selected:opacity-100" icon="check" />
            <Icon className="absolute h-3 w-3 text-neutral-500 group-selected:opacity-0" icon="x" />
          </>
        ) : null}
      </div>
    </div>
  );
};

// ==============================================================================

export type SwitchProps = SwitchContextProps;

const Root = React.forwardRef<HTMLLabelElement, SwitchProps>(({ className, ...props }, ref) => {
  const titleIdRAC = useId();
  const descriptionIdRAC = useId();
  const toggleIdRAC = useId();
  return (
    <SwitchContext.Provider
      value={{
        id: descriptionIdRAC,
        'aria-labelledby': props.id ?? titleIdRAC,
        descriptionId: props.descriptionId ?? descriptionIdRAC,
        'aria-describedby': descriptionIdRAC,
        toggleId: props.toggleId ?? toggleIdRAC,
        'aria-controls': toggleIdRAC,
        ...props
      }}
    >
      <AriaSwitch className={clsx('group', className)} ref={ref} {...props} />
    </SwitchContext.Provider>
  );
});

Root.displayName = 'SwitchRoot';

// ==============================================================================

type TitleProps = {
  children?: React.ReactNode;
  className?: string;
};

const Title = (props: TitleProps) => {
  const switchContext = useSwitch();

  const { id } = switchContext;

  return <span id={id} {...props} />;
};

// ==============================================================================

type DescriptionProps = {
  children?: React.ReactNode;
  className?: string;
};

const Description = (props: DescriptionProps) => {
  const switchContext = useSwitch();
  const { descriptionId } = switchContext;

  return <p id={descriptionId} {...props} />;
};

// ==============================================================================

export const Switch = Root as typeof Root & {
  Title: typeof Title;
  Description: typeof Description;
  Toggle: typeof Toggle;
};

Switch.Toggle = Toggle;
Switch.Title = Title;
Switch.Description = Description;
