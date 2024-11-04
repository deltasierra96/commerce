import { defineQuery } from 'groq';
import { client } from './client';
import * as queries from './queries';

// Fetch a specific product with our global data
export async function getPageBySlug(slug: string, preview: boolean) {
  const slugs = JSON.stringify([slug, `/${slug}`, `/${slug}/`]);

  const query = defineQuery(`
    {
      "page": *[_type == "page" && slug.current in ${slugs}] | order(_updatedAt desc)[0]{
        "id": _id,
        hasTransparentHeader,
        modules[]{
          defined(_ref) => { ...@->content[0] {
            ${queries.MODULES}
          }},
          !defined(_ref) => {
            ${queries.MODULES},
          }
        },
        title,
        body,
        seo
      },
      ${queries.SITE}
    }
  `);
  const data = await client.fetch(query);
  return data;
}
