import { gql } from '@apollo/client';

export const GET_MENU_QUERY = gql`
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      items {
        title
        url
      }
    }
  }
`;
