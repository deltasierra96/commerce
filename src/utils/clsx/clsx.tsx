import { type ClassValue, clsx as BaseClsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  classGroups: {
    ring: [{ ring: ['global'] }],
    ringOffset: ['ring-offset-global'],
    borderStyle: [{ border: ['input', 'button'] }],
    borderRadius: [{ border: ['input', 'button'] }],
    borderWidth: [{ border: ['input', 'button'] }]
  }
});

export const clsx = (...inputs: ClassValue[]) => customTwMerge(BaseClsx(inputs));
