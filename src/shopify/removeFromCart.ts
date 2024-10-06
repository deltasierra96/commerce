import { shopifyFetch } from './fetch';
import { reshapeCart } from './helpers';
import { REMOVE_FROM_CART_MUTATION } from './mutations';
import { Cart, ShopifyRemoveFromCartOperation } from './types';

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
  const res = await shopifyFetch<ShopifyRemoveFromCartOperation>({
    query: REMOVE_FROM_CART_MUTATION,
    variables: {
      cartId,
      lineIds
    },
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartLinesRemove.cart);
}
