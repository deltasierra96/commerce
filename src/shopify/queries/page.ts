import { gql } from '@apollo/client';
import { PAGE_FRAGMENT } from '../fragments/page';

export const GET_PAGE_QUERY = gql`
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
    }
  }
  ${PAGE_FRAGMENT}
`;

export const GET_PAGES_QUERY = gql`
  query getPages {
    pages(first: 100) {
      edges {
        node {
          ...page
        }
      }
    }
  }
  ${PAGE_FRAGMENT}
`;
