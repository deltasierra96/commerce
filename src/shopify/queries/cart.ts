import { gql } from '@apollo/client';
import { CART_FRAGMENT } from '../fragments/cart';

export const GET_CART_QUERY = gql`
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...cart
    }
  }
  ${CART_FRAGMENT}
`;

// export async function getCart(
//   cartId: string | undefined
// ): Promise<ApolloQueryResult<GetCartQuery> | undefined> {
//   if (!cartId) {
//     return undefined;
//   }
//   const res = await query<GetCartQuery, GetCartQueryVariables>({
//     query: GET_CART_QUERY,
//     variables: { cartId }
//   });

//   // Old carts becomes `null` when you checkout.
//   if (!res.data.cart) {
//     return undefined;
//   }

//   return res;
//   // return reshapeCart(res.body.data.cart);
// }
