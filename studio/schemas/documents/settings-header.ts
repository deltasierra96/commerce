import { FilterIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Header Settings',
  name: 'headerSettings',
  type: 'document',
  fieldsets: [
    {
      title: 'Desktop',
      name: 'desktop',
      description: 'Navigation settings for desktop view',
      options: { collapsed: false },
    },
    {
      title: 'Mobile',
      name: 'mobile',
      description: 'Navigation settings for mobile view',
      options: { collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'navNote',
      type: 'note',
      options: {
        icon: FilterIcon,
        headline: 'Note',
        message: `On desktop, dropdowns will appear as a "mega-nav". On mobile, dropdowns will appear as accordions. The "Cart" toggle will always appear to the right of the header on all screen sizes.`,
        tone: 'caution',
      },
    }),
    defineField({
      title: 'Desktop Menu (Left)',
      name: 'menuDesktopLeft',
      type: 'reference',
      to: [{ type: 'menu' }],
      fieldset: 'desktop',
    }),
    defineField({
      title: 'Desktop Menu (Right)',
      name: 'menuDesktopRight',
      type: 'reference',
      to: [{ type: 'menu' }],
      fieldset: 'desktop',
    }),
    defineField({
      title: 'Mobile Menu (Primary)',
      name: 'menuMobilePrimary',
      type: 'reference',
      to: [{ type: 'menu' }],
      fieldset: 'mobile',
    }),
    defineField({
      title: 'Mobile Menu (Secondary)',
      name: 'menuMobileSecondary',
      type: 'reference',
      to: [{ type: 'menu' }],
      fieldset: 'mobile',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header Settings',
      }
    },
  },
})
