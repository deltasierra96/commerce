import { COLLECTION_FRAGMENT } from '../fragments/collection';
import { PRODUCT_FRAGMENT } from '../fragments/product';

export const GET_COLLECTION_QUERY = /* GraphQL */ `
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${COLLECTION_FRAGMENT}
`;

export const GET_COLLECTION_META_DATA_QUERY = /* GraphQL */ `
  query getCollectionMetaData($handle: String!) {
    collection(handle: $handle) {
      description
      title
      seo {
        title
        description
      }
    }
  }
`;

export const GET_COLLECTION_HEADER_QUERY = /* GraphQL */ `
  query getCollectionHeader($handle: String!) {
    collection(handle: $handle) {
      title
      description
      image {
        id
        url(transform: { maxWidth: 1200 })
        width
        height
        altText
      }
    }
  }
`;

export const GET_COLLECTIONS_QUERY = /* GraphQL */ `
  query getCollections {
    collections(first: 100, sortKey: TITLE) {
      edges {
        node {
          ...collection
        }
      }
    }
  }
  ${COLLECTION_FRAGMENT}
`;

export const GET_COLLECTION_PRODUCTS_QUERY = /* GraphQL */ `
  query getCollectionProducts(
    $handle: String!
    $limit: Int!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
  ) {
    collection(handle: $handle) {
      products(sortKey: $sortKey, reverse: $reverse, first: $limit) {
        edges {
          node {
            ...product
          }
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;
