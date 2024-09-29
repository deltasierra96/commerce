export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED' | 'PRICE';
  reverse: boolean;
};

export type LimitItem = {
  amount: string;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];

export const limit: LimitItem[] = [
  { amount: '5' }, // asc
  { amount: '10' }, // asc
  { amount: '15' }, // asc
  { amount: '20' } // asc
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';

export const STORE_ROUTE = '';
export const STORE_ROUTE_COLLECTION = `${STORE_ROUTE}/collections`;
export const STORE_ROUTE_PRODUCT = `${STORE_ROUTE}/product`;

export const ACCOUNT_ROUTE = '/account';
