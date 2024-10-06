import { shopifyFetch } from './fetch';
import { reshapeCart } from './helpers';
import { EDIT_CART_ITEMS_MUTATION } from './mutations';
import { Cart, ShopifyUpdateCartOperation } from './types';

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyUpdateCartOperation>({
    query: EDIT_CART_ITEMS_MUTATION,
    variables: {
      cartId,
      lines
    },
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartLinesUpdate.cart);
}
