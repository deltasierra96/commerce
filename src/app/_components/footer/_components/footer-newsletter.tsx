'use client';
import { Button } from '@/components/ui/button';
import { TextInput } from '@/components/ui/text-input';

export const FooterNewsletter = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div>
        <h3 className="text-sm font-semibold leading-6">Subscribe to our newsletter</h3>
        <p className="mt-2 text-sm leading-6 text-neutral-500">
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
      </div>
      <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <TextInput
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          hideLabel
          label="Email"
          isRequired
          placeholder="Enter your email"
        />
        <div className="mt-4 rounded-md sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <Button type="submit" color={'primary'} variant={'filled'}>
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};
