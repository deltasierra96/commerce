import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Shop Settings',
  name: 'shopSettings',
  type: 'document',
  fields: [
    defineField({
      title: 'Shopify Store URL',
      name: 'storeURL',
      type: 'url',
      description: (
        <>
          The{' '}
          <a
            href="https://help.shopify.com/en/manual/online-store/domains"
            target="_blank"
            rel="noopener noreferrer"
          >
            custom domain or subdomain
          </a>{' '}
          connected to your Shopify store
        </>
      ),
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https'],
        }),
    }),
    defineField({
      title: 'Collection Pagination Limit',
      name: 'paginationLimit',
      type: 'number',
      description:
        'The number of products to show in a collection to show/load at a time',
      validation: (Rule) => Rule.integer().positive().min(3).max(100),
      initialValue: 12,
    }),
    defineField({
      title: 'Filter',
      name: 'filter',
      type: 'shopFilter',
    }),
    defineField({
      title: 'Sort',
      name: 'sort',
      type: 'shopSort',
    }),
    defineField({
      title: 'Empty Filter Results',
      name: 'noFilterResults',
      type: 'complexPortableText',
      description: 'Display text when a filtered collection is empty',
    }),
    defineField({
      title: 'Cart Message',
      name: 'cartMessage',
      type: 'string',
      description: 'Display a message below the cart checkout button',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Shop Settings',
      }
    },
  },
})
