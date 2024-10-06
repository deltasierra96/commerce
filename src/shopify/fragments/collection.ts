import SEO_FRAGMENT from './seo';

export const COLLECTION_FRAGMENT = /* GraphQL */ `
  fragment collection on Collection {
    handle
    title
    description
    seo {
      ...seo
    }
    image {
      url
      altText
      width
      height
    }
    updatedAt
  }
  ${SEO_FRAGMENT}
`;
