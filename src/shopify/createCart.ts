import { shopifyFetch } from './fetch';
import { reshapeCart } from './helpers';
import { CREATE_CART_MUTATION } from './mutations';
import { Cart, ShopifyCreateCartOperation } from './types';

export async function createCart(): Promise<Cart> {
  const res = await shopifyFetch<ShopifyCreateCartOperation>({
    query: CREATE_CART_MUTATION,
    cache: 'no-store'
  });

  return reshapeCart(res.body.data.cartCreate.cart);
}
