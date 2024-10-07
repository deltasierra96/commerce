export const MENU_ITEM_FRAGMENT = /* GraphQL */ `
  fragment menuItem on MenuItem {
    id
    title
    url
  }
`;

export const MENU_ITEMS_FRAGMENT = /* GraphQL */ `
  fragment menuItems on MenuItem {
    ...menuItem
    items {
      ...menuItem
    }
  }
  ${MENU_ITEM_FRAGMENT}
`;

export const MENU_FRAGMENT = /* GraphQL */ `
  fragment menu on Menu {
    id
    title
    items {
      ...menuItems
      items {
        ...menuItems
      }
    }
  }
  ${MENU_ITEMS_FRAGMENT}
`;
