import { PRODUCT_FRAGMENT } from '../fragments/product';

export const GET_PRODUCT_QUERY = /* GraphQL */ `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      ...product
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const GET_PRODUCTS_QUERY = /* GraphQL */ `
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

export const GET_PRODUCT_RECOMMENDATIONS_QUERY = /* GraphQL */ `
  query getProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${PRODUCT_FRAGMENT}
`;
