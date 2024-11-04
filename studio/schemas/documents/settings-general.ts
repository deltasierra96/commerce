import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'General Settings',
  name: 'generalSettings',
  type: 'document',
  groups: [
    { title: 'Site Details', name: 'details', default: true },
    { title: 'Displays', name: 'displays' },
    { title: 'Advanced', name: 'advanced' },
  ],
  fields: [
    defineField({
      title: 'Home Page',
      name: 'home',
      type: 'reference',
      to: [{ type: 'page' }],
      description: 'This page will show at the root of your domain',
      group: 'displays',
    }),
    defineField({
      title: 'Shop Page',
      name: 'shop',
      type: 'reference',
      to: [{ type: 'collection' }],
      description: 'This collection will show at: /shop',
      group: 'displays',
    }),
    defineField({
      title: 'Error Page (404)',
      name: 'error',
      type: 'reference',
      to: [{ type: 'page' }],
      description:
        'This page will show for any URL at your domain that does not exist yet',
      group: 'displays',
    }),
    defineField({
      title: 'Site Title',
      name: 'siteTitle',
      type: 'string',
      description: 'The name of your site, usually your company/brand name',
      group: 'details',
    }),
    defineField({
      title: 'Live Site URL',
      description: 'The root domain or subdomain of your website',
      name: 'siteURL',
      type: 'url',
      validation: (Rule) => Rule.required(),
      group: 'details',
    }),
    defineField({
      title: 'Google Tag Manager (GTM)',
      description: 'To enable GTM enter your Container ID',
      name: 'gtmID',
      type: 'string',
      group: 'advanced',
    }),
    defineField({
      title: 'Klaviyo Site ID (Public API Key)',
      description: 'For product waitlists and newsletter forms',
      name: 'klaviyoAccountID',
      type: 'string',
      group: 'advanced',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'General Settings',
      }
    },
  },
})
