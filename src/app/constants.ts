export type SortKey = 'TITLE' | 'BEST_SELLING' | 'CREATED' | 'PRICE' | 'CREATED' | 'MANUAL';

export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: SortKey;
  reverse: boolean;
};

// Misc // --------------------------------------------------------
export const STORE_ROOT_PATH = '';
export const MAIN_MENU_HANDLE = 'main-menu';
export const FOOTER_MENU_HANDLE = 'footer';
export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2024-07/graphql.json';

// Collection // --------------------------------------------------------
export const COLLECTION_PATH = `${STORE_ROOT_PATH}/collections`;
export const COLLECTION_PRODUCTS_DEFAULT_LIMIT: number = 36;
export const COLLECTION_PRODUCTS_LIMIT: number[] = [COLLECTION_PRODUCTS_DEFAULT_LIMIT, 12, 24, 48];
export const COLLECTION_PRODUCTS_HIDDEN_TAG = 'hidden';
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

// Product // --------------------------------------------------------
export const PRODUCT_PATH = `${STORE_ROOT_PATH}/product`;

// Page // --------------------------------------------------------
export const PAGE_PATH = `${STORE_ROOT_PATH}/pages`;

// Tags (revalidation) // --------------------------------------------------------
export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

// Account // --------------------------------------------------------
export const ACCOUNT_PATH = `${STORE_ROOT_PATH}/account`;

// Currency code (ISO 4217) to use when displaying prices in the studio
// https://en.wikipedia.org/wiki/ISO_4217
export const DEFAULT_CURRENCY_CODE = 'USD';

// Document types which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
export const LOCKED_DOCUMENT_TYPES = ['settings', 'home', 'media.tag'];

// Document types which:
// - cannot be created in the 'new document' menu
// - cannot be duplicated, unpublished or deleted
// - are from the Sanity Connect Shopify app - and can be linked to on Shopify
export const SHOPIFY_DOCUMENT_TYPES = ['product', 'productVariant', 'collection'];

// References to include in 'internal' links
export const PAGE_REFERENCES = [
  { type: 'collection' },
  { type: 'home' },
  { type: 'page' },
  { type: 'product' }
];

// API version to use when using the Sanity client within the studio
// https://www.sanity.io/help/studio-client-specify-api-version
export const SANITY_API_VERSION = '2022-10-25';

// Your Shopify store ID.
// This is your unique store (e.g. 'my-store-name' in the complete URL of 'https://admin.shopify.com/store/my-store-name/').
// Set this to enable helper links in document status banners and shortcut links on products and collections.
export const SHOPIFY_STORE_ID = '';
