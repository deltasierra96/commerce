import { PAGE_FRAGMENT } from '../fragments/page';

export const GET_PAGE_QUERY = /* GraphQL */ `
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
    }
  }
  ${PAGE_FRAGMENT}
`;

export const GET_PAGES_QUERY = /* GraphQL */ `
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
