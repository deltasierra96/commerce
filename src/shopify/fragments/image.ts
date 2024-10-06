export const IMAGE_FRAGMENT = /* GraphQL */ `
  fragment image on Image {
    id
    url(transform: { maxWidth: 1200 })
    width
    height
    altText
  }
`;

export default IMAGE_FRAGMENT;
