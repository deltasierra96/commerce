/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetStoreInformation {\n    shop {\n      name\n    }\n  }\n": types.GetStoreInformationDocument,
    "\n  fragment seo on SEO {\n    description\n    title\n  }\n": types.SeoFragmentDoc,
    "\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n": types.ImageFragmentDoc,
    "\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  \n  \n": types.ProductFragmentDoc,
    "\n  query getCollectionProducts(\n    $handle: String!\n    $limit: Int!\n    $sortKey: ProductCollectionSortKeys\n    $reverse: Boolean\n  ) {\n    collection(handle: $handle) {\n      products(sortKey: $sortKey, reverse: $reverse, first: $limit) {\n        edges {\n          node {\n            ...product\n          }\n        }\n        pageInfo {\n          hasPreviousPage\n          hasNextPage\n          endCursor\n          startCursor\n        }\n      }\n    }\n  }\n  \n": types.GetCollectionProductsDocument,
    "\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  \n": types.CartFragmentDoc,
    "\n  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n": types.AddToCartDocument,
    "\n  mutation createCart($lineItems: [CartLineInput!]) {\n    cartCreate(input: { lines: $lineItems }) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n": types.CreateCartDocument,
    "\n  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n    cartLinesUpdate(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n": types.EditCartItemsDocument,
    "\n  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {\n    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n": types.RemoveFromCartDocument,
    "\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      ...cart\n    }\n  }\n  \n": types.GetCartDocument,
    "\n  fragment collection on Collection {\n    handle\n    title\n    description\n    seo {\n      ...seo\n    }\n    image {\n      url\n      altText\n      width\n      height\n    }\n    updatedAt\n  }\n  \n": types.CollectionFragmentDoc,
    "\n  query getCollection($handle: String!) {\n    collection(handle: $handle) {\n      ...collection\n    }\n  }\n  \n": types.GetCollectionDocument,
    "\n  query getCollections {\n    collections(first: 100, sortKey: TITLE) {\n      edges {\n        node {\n          ...collection\n        }\n      }\n    }\n  }\n  \n": types.GetCollectionsDocument,
    "\n  query getMenu($handle: String!) {\n    menu(handle: $handle) {\n      items {\n        title\n        url\n      }\n    }\n  }\n": types.GetMenuDocument,
    "\n  fragment page on Page {\n    ... on Page {\n      id\n      title\n      handle\n      body\n      bodySummary\n      seo {\n        ...seo\n      }\n      createdAt\n      updatedAt\n    }\n  }\n  \n": types.PageFragmentDoc,
    "\n  query getPage($handle: String!) {\n    pageByHandle(handle: $handle) {\n      ...page\n    }\n  }\n  \n": types.GetPageDocument,
    "\n  query getPages {\n    pages(first: 100) {\n      edges {\n        node {\n          ...page\n        }\n      }\n    }\n  }\n  \n": types.GetPagesDocument,
    "\n  query getProduct($handle: String!) {\n    product(handle: $handle) {\n      ...product\n    }\n  }\n  \n": types.GetProductDocument,
    "\n  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {\n    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {\n      edges {\n        node {\n          ...product\n        }\n      }\n    }\n  }\n  \n": types.GetProductsDocument,
    "\n  query getProductRecommendations($productId: ID!) {\n    productRecommendations(productId: $productId) {\n      ...product\n    }\n  }\n  \n": types.GetProductRecommendationsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetStoreInformation {\n    shop {\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetStoreInformation {\n    shop {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment seo on SEO {\n    description\n    title\n  }\n"): (typeof documents)["\n  fragment seo on SEO {\n    description\n    title\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n"): (typeof documents)["\n  fragment image on Image {\n    url\n    altText\n    width\n    height\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  \n  \n"): (typeof documents)["\n  fragment product on Product {\n    id\n    handle\n    availableForSale\n    title\n    description\n    descriptionHtml\n    options {\n      id\n      name\n      values\n    }\n    priceRange {\n      maxVariantPrice {\n        amount\n        currencyCode\n      }\n      minVariantPrice {\n        amount\n        currencyCode\n      }\n    }\n    variants(first: 250) {\n      edges {\n        node {\n          id\n          title\n          availableForSale\n          selectedOptions {\n            name\n            value\n          }\n          price {\n            amount\n            currencyCode\n          }\n        }\n      }\n    }\n    featuredImage {\n      ...image\n    }\n    images(first: 20) {\n      edges {\n        node {\n          ...image\n        }\n      }\n    }\n    seo {\n      ...seo\n    }\n    tags\n    updatedAt\n  }\n  \n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCollectionProducts(\n    $handle: String!\n    $limit: Int!\n    $sortKey: ProductCollectionSortKeys\n    $reverse: Boolean\n  ) {\n    collection(handle: $handle) {\n      products(sortKey: $sortKey, reverse: $reverse, first: $limit) {\n        edges {\n          node {\n            ...product\n          }\n        }\n        pageInfo {\n          hasPreviousPage\n          hasNextPage\n          endCursor\n          startCursor\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query getCollectionProducts(\n    $handle: String!\n    $limit: Int!\n    $sortKey: ProductCollectionSortKeys\n    $reverse: Boolean\n  ) {\n    collection(handle: $handle) {\n      products(sortKey: $sortKey, reverse: $reverse, first: $limit) {\n        edges {\n          node {\n            ...product\n          }\n        }\n        pageInfo {\n          hasPreviousPage\n          hasNextPage\n          endCursor\n          startCursor\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  \n"): (typeof documents)["\n  fragment cart on Cart {\n    id\n    checkoutUrl\n    cost {\n      subtotalAmount {\n        amount\n        currencyCode\n      }\n      totalAmount {\n        amount\n        currencyCode\n      }\n      totalTaxAmount {\n        amount\n        currencyCode\n      }\n    }\n    lines(first: 100) {\n      edges {\n        node {\n          id\n          quantity\n          cost {\n            totalAmount {\n              amount\n              currencyCode\n            }\n          }\n          merchandise {\n            ... on ProductVariant {\n              id\n              title\n              selectedOptions {\n                name\n                value\n              }\n              product {\n                ...product\n              }\n            }\n          }\n        }\n      }\n    }\n    totalQuantity\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {\n    cartLinesAdd(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createCart($lineItems: [CartLineInput!]) {\n    cartCreate(input: { lines: $lineItems }) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  mutation createCart($lineItems: [CartLineInput!]) {\n    cartCreate(input: { lines: $lineItems }) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n    cartLinesUpdate(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  mutation editCartItems($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n    cartLinesUpdate(cartId: $cartId, lines: $lines) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {\n    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  mutation removeFromCart($cartId: ID!, $lineIds: [ID!]!) {\n    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n      cart {\n        ...cart\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      ...cart\n    }\n  }\n  \n"): (typeof documents)["\n  query getCart($cartId: ID!) {\n    cart(id: $cartId) {\n      ...cart\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment collection on Collection {\n    handle\n    title\n    description\n    seo {\n      ...seo\n    }\n    image {\n      url\n      altText\n      width\n      height\n    }\n    updatedAt\n  }\n  \n"): (typeof documents)["\n  fragment collection on Collection {\n    handle\n    title\n    description\n    seo {\n      ...seo\n    }\n    image {\n      url\n      altText\n      width\n      height\n    }\n    updatedAt\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCollection($handle: String!) {\n    collection(handle: $handle) {\n      ...collection\n    }\n  }\n  \n"): (typeof documents)["\n  query getCollection($handle: String!) {\n    collection(handle: $handle) {\n      ...collection\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCollections {\n    collections(first: 100, sortKey: TITLE) {\n      edges {\n        node {\n          ...collection\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query getCollections {\n    collections(first: 100, sortKey: TITLE) {\n      edges {\n        node {\n          ...collection\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getMenu($handle: String!) {\n    menu(handle: $handle) {\n      items {\n        title\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query getMenu($handle: String!) {\n    menu(handle: $handle) {\n      items {\n        title\n        url\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment page on Page {\n    ... on Page {\n      id\n      title\n      handle\n      body\n      bodySummary\n      seo {\n        ...seo\n      }\n      createdAt\n      updatedAt\n    }\n  }\n  \n"): (typeof documents)["\n  fragment page on Page {\n    ... on Page {\n      id\n      title\n      handle\n      body\n      bodySummary\n      seo {\n        ...seo\n      }\n      createdAt\n      updatedAt\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPage($handle: String!) {\n    pageByHandle(handle: $handle) {\n      ...page\n    }\n  }\n  \n"): (typeof documents)["\n  query getPage($handle: String!) {\n    pageByHandle(handle: $handle) {\n      ...page\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPages {\n    pages(first: 100) {\n      edges {\n        node {\n          ...page\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query getPages {\n    pages(first: 100) {\n      edges {\n        node {\n          ...page\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getProduct($handle: String!) {\n    product(handle: $handle) {\n      ...product\n    }\n  }\n  \n"): (typeof documents)["\n  query getProduct($handle: String!) {\n    product(handle: $handle) {\n      ...product\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {\n    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {\n      edges {\n        node {\n          ...product\n        }\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query getProducts($sortKey: ProductSortKeys, $reverse: Boolean, $query: String) {\n    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {\n      edges {\n        node {\n          ...product\n        }\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getProductRecommendations($productId: ID!) {\n    productRecommendations(productId: $productId) {\n      ...product\n    }\n  }\n  \n"): (typeof documents)["\n  query getProductRecommendations($productId: ID!) {\n    productRecommendations(productId: $productId) {\n      ...product\n    }\n  }\n  \n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;