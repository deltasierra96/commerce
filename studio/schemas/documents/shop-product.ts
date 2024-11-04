import { FilterIcon } from '@sanity/icons'

import { defineField, defineType } from 'sanity'

import { getIcon } from './filter'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  // __experimental_actions: ['update', 'publish', 'delete'],
  groups: [
    { title: 'Content', name: 'content', default: true },
    { title: 'Photos', name: 'photos' },
    { title: 'Settings', name: 'settings' },
    { title: 'Shopify Data', name: 'shopify', icon: FilterIcon },
  ],
  fieldsets: [
    {
      title: '',
      name: '2up',
      options: { columns: 2 },
    },
    {
      title: 'Product Cards',
      name: 'cards',
      description:
        'Define how this product should appear on collection pages and the cart',
      options: { columns: 2 },
    },
  ],
  icon: FilterIcon,
  fields: [
    defineField({
      title: 'Display Title',
      name: 'title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'simplePortableText',
      group: 'content',
    }),
    defineField({
      title: 'Overlay header with transparency?',
      name: 'hasTransparentHeader',
      type: 'boolean',
      description:
        'When activated the header will overlay the first content module with a transparent background and white text until scrolling is engaged.',
      group: 'settings',
    }),
    defineField({
      title: 'Use Galleries',
      name: 'useGallery',
      type: 'string',
      description:
        'Display an inline gallery instead of thumbnails for this product on Collection pages',
      options: {
        list: [
          { title: 'Yes', value: 'true' },
          { title: 'No', value: 'false' },
        ],
      },
      fieldset: 'cards',
      group: 'settings',
    }),
    defineField({
      title: 'Surface Option',
      name: 'surfaceOption',
      type: 'string',
      description:
        'Surface one of the product options for this product on Collection pages',
      options: {
        list: [{ title: 'None', value: '' }],
        from: 'options',
        fromData: { title: 'name', value: 'position' },
      },
      fieldset: 'cards',
      group: 'settings',
    }),
    defineField({
      title: 'Options Settings',
      name: 'optionSettings',
      type: 'array',
      of: [{ type: 'productOptionSettings' }],
      description: 'Define additional settings for product options',
      group: 'settings',
    }),
    defineField({
      title: 'Filters',
      name: 'filters',
      type: 'array',
      description: 'Define what filters are associated with this product',
      of: [
        {
          title: 'Filter',
          name: 'filter',
          type: 'object',
          fields: [
            {
              title: 'Filter',
              name: 'filter',
              type: 'reference',
              to: [{ type: 'filter' }],
            },
            {
              title: 'Which option is this for?',
              name: 'forOption',
              type: 'string',
              options: {
                list: [{ title: 'All', value: '' }],
                from: 'options',
                fromData: { title: 'name' },
                joinWith: 'values',
              },
            },
          ],
          preview: {
            select: {
              title: 'filter.title',
              type: 'filter.type',
              color: 'filter.color.color',
              forOption: 'forOption',
            },
            prepare({ title = 'Untitled', type, color, forOption }) {
              const displayType = type && type.trim() ? type : 'simple'
              const option = forOption ? forOption.split(':') : null

              return {
                title,
                subtitle:
                  option && option.length > 1
                    ? `${option[0]}: ${option[1]}`
                    : 'All Variants',
                media: getIcon(displayType, color?.hex.toUpperCase()),
              }
            },
          },
        },
      ],
      options: {
        modal: {
          type: 'popover',
        },
      },
      validation: (Rule) => Rule.unique(),
      group: 'settings',
    }),
    defineField({
      title: 'Gallery',
      name: 'galleryPhotos',
      type: 'array',
      of: [{ type: 'productGalleryPhotos' }],
      description:
        'Define a Gallery for your product, or for a subset of variants',
      group: 'photos',
    }),
    defineField({
      title: 'Listing Thumbnails',
      name: 'listingPhotos',
      type: 'array',
      of: [{ type: 'productListingPhotos' }],
      fieldset: 'cards',
      group: 'photos',
    }),
    defineField({
      title: 'Cart Thumbnails',
      name: 'cartPhotos',
      type: 'array',
      of: [{ type: 'productCartPhotos' }],
      fieldset: 'cards',
      group: 'photos',
    }),
    defineField({
      title: 'Page Content',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'productHero' },
        { type: 'grid' },
        { type: 'hero' },
        { type: 'marquee' },
        { type: 'dividerPhoto' },
      ],
      validation: (Rule) =>
        Rule.custom((blocks) => {
          if (!blocks) return true

          const productHeros = blocks.filter(
            (block) => block._type === 'productHero',
          )

          const productHeroItems = productHeros.map(
            (item, index) => [{ _key: item._key }] || [index],
          )

          return productHeros.length === 1
            ? true
            : {
                message: 'You must have one "Product Hero" module on the page',
                paths: productHeroItems,
              }
        }),
      group: 'content',
    }),
    defineField({
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'settings',
    }),
    defineField({
      name: 'shopifyNote',
      type: 'note',
      options: {
        icon: FilterIcon,
        message:
          'This data is automatically pulled in from your connected Shopify account. To make changes to this data please edit the product on Shopify directly.',
      },
      group: 'shopify',
    }),
    defineField({
      title: 'Product Title',
      name: 'productTitle',
      type: 'string',
      readOnly: true,
      fieldset: '2up',
      group: 'shopify',
    }),
    defineField({
      title: 'Product ID',
      name: 'productID',
      type: 'number',
      readOnly: true,
      fieldset: '2up',
      group: 'shopify',
    }),
    defineField({
      title: 'Price (cents)',
      name: 'price',
      type: 'number',
      readOnly: true,
      fieldset: '2up',
      group: 'shopify',
    }),
    defineField({
      title: 'Compare Price (cents)',
      name: 'comparePrice',
      type: 'number',
      readOnly: true,
      fieldset: '2up',
      group: 'shopify',
    }),
    defineField({
      title: 'In Stock?',
      name: 'inStock',
      type: 'boolean',
      readOnly: true,
      fieldset: '2up',
      group: 'shopify',
    }),
    defineField({
      title: 'Low Stock?',
      name: 'lowStock',
      type: 'boolean',
      readOnly: true,
      fieldset: '2up',
      group: 'shopify',
    }),
    defineField({
      title: 'SKU',
      name: 'sku',
      type: 'string',
      readOnly: true,
      fieldset: '2up',
      group: 'shopify',
    }),
    defineField({
      title: 'URL Slug',
      name: 'slug',
      type: 'slug',
      readOnly: true,
      fieldset: '2up',
      group: 'shopify',
    }),
    defineField({
      title: 'Options',
      name: 'options',
      type: 'array',
      of: [{ type: 'productOption' }],
      readOnly: true,
      group: 'shopify',
    }),
    defineField({
      title: 'Draft Mode',
      name: 'isDraft',
      type: 'boolean',
      readOnly: true,
      hidden: true,
      fieldset: '2up',
      group: 'shopify',
    }),
    defineField({
      title: 'Deleted from Shopify?',
      name: 'wasDeleted',
      type: 'boolean',
      readOnly: true,
      hidden: true,
      fieldset: '2up',
      group: 'shopify',
    }),
  ],
  initialValue: {
    useGallery: 'false',
    galleryPhotos: {
      _type: 'productGallery',
      forOption: '',
    },
    listingPhotos: {
      _type: 'productListingPhotos',
      forOption: '',
    },
    cartPhotos: {
      _type: 'productCartPhotos',
      forOption: '',
    },
  },
  preview: {
    select: {
      store: 'store',
      isDraft: 'isDraft',
      wasDeleted: 'wasDeleted',
      title: 'title',
      productTitle: 'productTitle',
      slug: 'slug',
      cartPhotos: 'cartPhotos',
      listingPhoto: 'listingPhoto',
    },
    prepare({
      store,
      isDraft = false,
      wasDeleted = false,
      title,
      slug = {},
      cartPhotos,
    }) {
      const path = `/products/${slug.current ?? store.slug?.current}`
      return {
        title:
          (title ? title : store.title) +
          (wasDeleted ? ' (removed)' : '') +
          (isDraft ? ' (draft)' : ''),
        media: cartPhotos?.length ? cartPhotos[0].cartPhoto : null,
        subtitle: path,
      }
    },
  },
})
