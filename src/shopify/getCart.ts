import { GetCartQuery, GetCartQueryVariables } from '@/__generated__/graphql';
import { query } from '@/lib/apollo-client';
import { TAGS } from '@/lib/constants';
import { ApolloQueryResult } from '@apollo/client';
import { GET_CART_QUERY } from './queries';

export const getCart = async (
  cartId: string | undefined
): Promise<ApolloQueryResult<GetCartQuery>> => {
  const cartQuery = await query<GetCartQuery, GetCartQueryVariables>({
    query: GET_CART_QUERY,
    variables: { cartId: cartId! },
    context: {
      next: {
        tags: TAGS.cart
      }
    }
  });

  return cartQuery;
};
