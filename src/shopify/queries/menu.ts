import { MENU_FRAGMENT } from '../fragments/menu';

export const GET_MENU_QUERY = /* GraphQL */ `
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      ...menu
    }
  }
  ${MENU_FRAGMENT}
`;
