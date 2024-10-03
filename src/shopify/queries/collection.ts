import { gql } from '@apollo/client';
import { COLLECTION_FRAGMENT } from '../fragments/collection';
import { PRODUCT_FRAGMENT } from '../fragments/product';

export const GET_COLLECTION_QUERY = gql`
  query getCollection($handle: String!) {
    collection(handle: $handle) {
      ...collection
    }
  }
  ${COLLECTION_FRAGMENT}
`;

export const GET_COLLECTIONS_QUERY = gql`
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

export const GET_COLLECTION_PRODUCTS_QUERY = gql`
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
