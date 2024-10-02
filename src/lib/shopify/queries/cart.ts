import { gql } from '@apollo/client';
import CART_FRAGMENT from '../fragments/cart';

export const GET_CART_QUERY = gql`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${CART_FRAGMENT}
`;
