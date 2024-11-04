import { BellIcon, CheckmarkCircleIcon, FilterIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import { getSwatch } from '../../lib/helpers'

type IconType = 'swatch' | 'dynamic'

export const getIcon = (type: IconType, color: string) => {
  switch (type) {
    case 'swatch':
      return getSwatch(color)
    case 'dynamic':
      return BellIcon
    default:
      return CheckmarkCircleIcon
  }
}

export default defineType({
  title: 'Filter',
  name: 'filter',
  type: 'document',
  icon: FilterIcon,
  fields: [
    defineField({
      title: 'Filter Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Simple', value: ' ' },
          { title: 'Swatch', value: 'swatch' },
        ],
      },
      initialValue: ' ',
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'required',
      options: {
        source: 'title',
        maxLength: 30,
      },
    }),
    defineField({
      title: 'Color',
      name: 'color',
      type: 'reference',
      to: [{ type: 'solidColor' }],
      hidden: ({ parent }) => {
        return parent.type !== 'swatch'
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      color: 'color.color',
    },
    prepare({ title = 'Untitled', type, color }) {
      const displayType = type && type.trim() ? type : 'simple'

      return {
        title,
        subtitle: displayType,
        media: getIcon(displayType, color?.hex.toUpperCase()),
      }
    },
  },
})
