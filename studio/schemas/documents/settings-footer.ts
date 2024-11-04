import { FilterIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Footer Settings',
  name: 'footerSettings',
  type: 'document',
  groups: [
    {
      title: 'Block 1',
      name: 'column1',
      icon: FilterIcon,
      default: true,
    },
    {
      title: 'Block 2',
      name: 'column2',
      icon: FilterIcon,
    },
    {
      title: 'Block 3',
      name: 'column3',
      icon: FilterIcon,
    },
    {
      title: 'Block 4',
      name: 'column4',
      icon: FilterIcon,
    },
  ],
  fields: [
    defineField({
      title: 'Block Title',
      name: 'blockTitle1',
      type: 'string',
      group: 'column1',
    }),
    defineField({
      title: 'Newsletter',
      name: 'newsletter',
      type: 'newsletter',
      group: 'column1',
    }),
    defineField({
      title: 'Block Title',
      name: 'blockTitle2',
      type: 'string',
      group: 'column2',
    }),
    defineField({
      title: 'Block Menu',
      name: 'blockMenu2',
      type: 'reference',
      to: [{ type: 'menu' }],
      group: 'column2',
    }),
    defineField({
      title: 'Block Title',
      name: 'blockTitle3',
      type: 'string',
      group: 'column3',
    }),
    defineField({
      title: 'Block Menu',
      name: 'blockMenu3',
      type: 'reference',
      to: [{ type: 'menu' }],
      group: 'column3',
    }),
    defineField({
      title: 'Block Title',
      name: 'blockTitle4',
      type: 'string',
      group: 'column4',
    }),
    defineField({
      title: 'Social Links',
      name: 'social',
      type: 'array',
      of: [{ type: 'socialLink' }],
      group: 'column4',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Settings',
      }
    },
  },
})
