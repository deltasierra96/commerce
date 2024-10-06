import { TAGS } from '@/lib/constants';
import { shopifyFetch } from './fetch';
import { reshapeCart } from './helpers';
import { GET_CART_QUERY } from './queries';
import { Cart, ShopifyCartOperation } from './types';

export async function getCart(cartId: string | undefined): Promise<Cart | undefined> {
  if (!cartId) {
    return undefined;
  }

  const res = await shopifyFetch<ShopifyCartOperation>({
    query: GET_CART_QUERY,
    variables: { cartId },
    tags: [TAGS.cart]
  });

  // Old carts becomes `null` when you checkout.
  if (!res.body.data.cart) {
    return undefined;
  }

  return reshapeCart(res.body.data.cart);
}
