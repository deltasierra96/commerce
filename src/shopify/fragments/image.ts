import { gql } from '@apollo/client';

export const IMAGE_FRAGMENT = gql`
  fragment image on Image {
    url
    altText
    width
    height
  }
`;

export default IMAGE_FRAGMENT;
