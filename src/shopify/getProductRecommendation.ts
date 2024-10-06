import { TAGS } from '@/lib/constants';
import { shopifyFetch } from './fetch';
import { reshapeProducts } from './helpers';
import { GET_PRODUCT_RECOMMENDATIONS_QUERY } from './queries';
import { Product, ShopifyProductRecommendationsOperation } from './types';

export async function getProductRecommendations(productId: string): Promise<Product[]> {
  const res = await shopifyFetch<ShopifyProductRecommendationsOperation>({
    query: GET_PRODUCT_RECOMMENDATIONS_QUERY,
    tags: [TAGS.products],
    variables: {
      productId
    }
  });

  return reshapeProducts(res.body.data.productRecommendations);
}
