import { TAGS } from '@/lib/constants';
import { shopifyFetch } from './fetch';
import { reshapeProduct } from './helpers';
import { GET_PRODUCT_QUERY } from './queries';
import { Product, ShopifyProductOperation } from './types';

export async function getProduct(handle: string): Promise<Product | undefined> {
  const res = await shopifyFetch<ShopifyProductOperation>({
    query: GET_PRODUCT_QUERY,
    tags: [TAGS.products],
    variables: {
      handle
    }
  });

  return reshapeProduct(res.body.data.product, false);
}
