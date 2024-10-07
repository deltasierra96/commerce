import { TAGS } from '@/app/constants';
import { shopifyFetch } from './lib/fetch';
import { reshapeProducts } from './lib/helpers';
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
