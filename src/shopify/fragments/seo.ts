import { gql } from '@apollo/client';

export const SEO_FRAGMENT = gql`
  fragment seo on SEO {
    description
    title
  }
`;

export default SEO_FRAGMENT;
