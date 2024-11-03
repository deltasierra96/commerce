import { sanityFetch } from "./live";
import * as queries from "./queries";

// Fetch a specific product with our global data
export async function getProduct(slug: string, preview: boolean) {
  const query = `
    {
      "page": *[_type == "product" && slug.current == "${slug}" && wasDeleted != true && isDraft != true] | order(_updatedAt desc)[0]{
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
        "product": ${queries.PRODUCT},
        title,
        seo
      },
      ${queries.SITE}
    }
  `;

  const data = await sanityFetch({ query });
  return data;
}
