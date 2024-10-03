import { gql } from '@apollo/client';
import SEO_FRAGMENT from './seo';

export const COLLECTION_FRAGMENT = gql`
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
