import { gql } from '@apollo/client';
import { PRODUCT_FRAGMENT } from '../fragments/product';

export const GET_PRODUCT_QUERY = gql`
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_PRODUCTS_QUERY = gql`
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

export const GET_PRODUCT_RECOMMENDATIONS_QUERY = gql`
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${PRODUCT_FRAGMENT}
`;
