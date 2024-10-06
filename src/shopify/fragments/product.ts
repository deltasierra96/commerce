import IMAGE_FRAGMENT from './image';
import SEO_FRAGMENT from './seo';

export const PRODUCT_FRAGMENT = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    vendor
    totalInventory
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
