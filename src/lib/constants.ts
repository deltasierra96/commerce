export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED' | 'PRICE';
  reverse: boolean;
};

export type LimitItem = {
  limitAmount: string;
};

export const COLLECTION_PRODUCTS_DEFAULT_SORTING: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const COLLECTION_PRODUCTS_SEARCH_QUERY_URL_PARAM = 'q';
export const COLLECTION_PRODUCTS_SORT_URL_PARAM = 'sort_by';
export const COLLECTION_PRODUCTS_LIMIT_URL_PARAM = 'limit';

export const COLLECTION_PRODUCTS_SORTING: SortFilterItem[] = [
  COLLECTION_PRODUCTS_DEFAULT_SORTING,
  { title: 'Best selling', slug: 'best-selling', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];

export const COLLECTION_PRODUCTS_DEFAULT_LIMIT: LimitItem = {
  limitAmount: '30'
};

export const COLLECTION_PRODUCTS_LIMIT: LimitItem[] = [
  COLLECTION_PRODUCTS_DEFAULT_LIMIT,
  { limitAmount: '5' }, // asc
  { limitAmount: '10' }, // asc
  { limitAmount: '15' }, // asc
  { limitAmount: '20' } // asc
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2024-07/graphql.json';

export const STORE_ROUTE = '';
export const STORE_ROUTE_COLLECTION = `${STORE_ROUTE}/collections`;
export const STORE_ROUTE_PRODUCT = `${STORE_ROUTE}/product`;

export const ACCOUNT_ROUTE = '/account';
