import { shopifyFetch } from './lib/fetch';
import { reshapeCart } from './lib/helpers';
import { ADD_TO_CART_MUTATION } from './mutations';
import { Cart, ShopifyAddToCartOperation } from './types';

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const res = await shopifyFetch<ShopifyAddToCartOperation>({
    query: ADD_TO_CART_MUTATION,
    variables: {
      cartId,
      lines
    },
    cache: 'no-store'
  });
  return reshapeCart(res.body.data.cartLinesAdd.cart);
}
