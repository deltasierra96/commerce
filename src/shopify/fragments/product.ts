import { gql } from '@apollo/client';
import IMAGE_FRAGMENT from './image';
import SEO_FRAGMENT from './seo';

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
    totalInventory
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
