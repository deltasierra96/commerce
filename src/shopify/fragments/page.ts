import { gql } from '@apollo/client';
import SEO_FRAGMENT from './seo';

export const PAGE_FRAGMENT = gql`
  fragment page on Page {
    ... on Page {
      id
      title
      handle
      body
      bodySummary
      seo {
        ...seo
      }
      createdAt
      updatedAt
    }
  }
  ${SEO_FRAGMENT}
`;
