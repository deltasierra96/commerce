import { PRODUCT_FRAGMENT } from '@/graphql/queries.graphql';
import { gql } from '@apollo/client';

export const GET_PRODUCT_QUERY = gql`
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const getProductsQuery = gql`
  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const getProductRecommendationsQuery = gql`
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${PRODUCT_FRAGMENT}
`;
