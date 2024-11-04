import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Promo Bar Settings',
  name: 'promoSettings',
  type: 'document',
  fields: [
    defineField({
      title: 'Enable Promo Bar?',
      name: 'enabled',
      type: 'boolean',
    }),
    defineField({
      title: 'Display Location',
      name: 'display',
      type: 'string',
      options: {
        list: [
          { title: 'All Pages', value: 'all' },
          { title: 'Home Page only', value: 'home' },
        ],
      },
      description: 'Choose where the promo bar is displayed',
      initialValue: 'all',
      hidden: ({ parent }) => !parent.enabled,
      validation: (Rule) =>
        Rule.custom((field, context) => {
          return context.parent?.enabled && field === undefined
            ? 'Display Location must be set when promo bar is enabled'
            : true
        }),
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'string',
      description: 'The text to show on the banner',
      hidden: ({ parent }) => !parent.enabled,
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'collection' }, { type: 'product' }],
      description: '(optional) Select a page to link the promo banner to',
      hidden: ({ parent }) => !parent.enabled,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Promo Bar Settings',
      }
    },
  },
})
