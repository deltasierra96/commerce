import { cva } from 'class-variance-authority';

export const focusRing = cva('ring-offset-2 ring-offset-white', {
  variants: {
    isFocused: {
      true: ['focus:ring-3', 'focus:ring-primary/15', 'focus:invalid:ring-red-500/15']
    },
    isFocusWithin: {
      true: [
        'focus-within:ring-3',
        'focus-within:ring-primary/15',
        'focus-within:invalid:ring-red-500/15'
      ]
    },
    isFocusVisible: {
      true: [
        'focus-visible:ring-3',
        'focus-visible:ring-primary/15',
        'focus-visible:invalid:ring-red-500/15'
      ]
    },
    groupIsFocusVisible: {
      true: [
        'group-focus-visible:ring-3',
        'group-focus-visible:ring-primary/15',
        'group-focus-visible:group-invalid:ring-red-500/15'
      ]
    }
  }
});

export const borderStyles = cva(
  [
    'invalid:border-red-500',
    'invalid:hover:border-red-400',
    'group-invalid:border-red-500',
    // 'group-invalid:group-disabled:border-neutral-100',
    'group-invalid:group-hover:border-red-400'
  ],
  {
    variants: {
      isFocused: {
        true: [
          'focus:border-theme',
          'focus:pressed:border-theme',
          'focus:hover:border-primary-400',
          'focus:invalid:border-red-500',
          'focus:invalid:hover:border-red-400',
          'focus:invalid:pressed:border-red-500'
        ]
      },
      isFocusWithin: {
        true: [
          'focus-within:border-theme',
          'focus-within:pressed:border-theme',
          'focus-within:hover:border-primary-400',
          'focus-within:invalid:border-red-500',
          'focus-within:invalid:hover:border-red-400',
          'focus-within:invalid:pressed:border-red-500'
        ]
      },
      isFocusVisible: {
        true: [
          'focus-visible:border-theme',
          'focus-visible:pressed:border-theme',
          'focus-visible:hover:border-primary-400',
          'focus-visible:invalid:border-red-500',
          'focus-visible:invalid:hover:border-red-400',
          'focus-visible:invalid:pressed:border-red-500'
        ]
      },
      groupIsFocusVisible: {
        true: [
          'group-focus-visible:border-theme',
          'group-focus-visible:group-pressed:border-theme',
          'group-focus-visible:group-hover:border-primary-400',
          'group-focus-visible:group-invalid:border-red-500',
          'group-focus-visible:group-invalid:group-hover:border-red-400',
          'group-focus-visible:group-invalid:group-pressed:border-red-500'
        ]
      }
    }
  }
);
