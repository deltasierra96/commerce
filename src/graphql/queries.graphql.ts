import { gql } from '@apollo/client';

export const GET_STORE_INFORMATION = gql`
  query GetStoreInformation {
    shop {
      name
    }
  }
`;

const SEO_FRAGMENT = gql`
  fragment seo on SEO {
    description
    title
  }
`;

const IMAGE_FRAGMENT = gql`
  fragment image on Image {
    url
    altText
    width
    height
  }
`;

export const PRODUCT_FRAGMENT = gql`
  fragment product on Product {
    id
    vendor
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }
  ${IMAGE_FRAGMENT}
  ${SEO_FRAGMENT}
`;

export const GET_COLLECTION_PRODUCTS = gql`
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
