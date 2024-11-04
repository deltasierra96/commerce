import { AddIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Redirect',
  name: 'redirect',
  type: 'document',
  icon: AddIcon,
  fields: [
    defineField({
      title: 'From (slug)',
      name: 'from',
      type: 'string',
      description: `Do not include the full domain or leading slash. For example: new-page`,
    }),
    defineField({
      title: 'To (slug)',
      name: 'to',
      type: 'string',
      description: `Do not include the full domain or leading slash. For example: new-page`,
    }),
    defineField({
      title: 'Is this a permanent redirect (301)?',
      name: 'isPermanent',
      type: 'boolean',
    }),
  ],
  initialValue: {
    isPermanent: true,
  },
  preview: {
    select: {
      to: 'to',
      from: 'from',
      isPermanent: 'isPermanent',
    },
    prepare({ from, to, isPermanent }) {
      return {
        title: from && to ? `(${from}) → (${to})` : 'New Redirect',
        subtitle: isPermanent ? '301' : '302',
      }
    },
  },
})
