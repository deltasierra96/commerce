export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'TITLE' | 'BEST_SELLING' | 'CREATED' | 'PRICE' | 'CREATED' | 'MANUAL';
  reverse: boolean;
};

export type LimitItem = {
  limitAmount: string;
};

export const COLLECTION_PRODUCTS_SEARCH_QUERY_URL_PARAM = 'q';
export const COLLECTION_PRODUCTS_SORT_URL_PARAM = 'sort';
export const COLLECTION_PRODUCTS_LIMIT_URL_PARAM = 'limit';

export const COLLECTION_PRODUCTS_DEFAULT_SORTING: SortFilterItem = {
  title: 'Best selling',
  slug: 'best-selling',
  sortKey: 'BEST_SELLING',
  reverse: false
};

export const COLLECTION_PRODUCTS_SORTING: SortFilterItem[] = [
  COLLECTION_PRODUCTS_DEFAULT_SORTING,
  { title: 'Featured', slug: 'featured', sortKey: 'MANUAL', reverse: true },
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED', reverse: true },
  { title: 'Alphabetically, A-Z', slug: 'title-asc', sortKey: 'TITLE', reverse: false }, //asc
  { title: 'Alphabetically, Z-A', slug: 'title-desc', sortKey: 'TITLE', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];

export const COLLECTION_PRODUCTS_DEFAULT_LIMIT: number = 36;

export const COLLECTION_PRODUCTS_LIMIT: number[] = [COLLECTION_PRODUCTS_DEFAULT_LIMIT, 12, 24, 48];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2024-07/graphql.json';

export const STORE_ROUTE = '';
export const STORE_ROUTE_COLLECTIONS = `${STORE_ROUTE}/collections`;
export const STORE_ROUTE_PRODUCT = `${STORE_ROUTE}/product`;

export const ACCOUNT_ROUTE = '/account';
