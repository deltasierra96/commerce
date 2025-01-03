// Document types
import annotationLinkEmail from './annotations/linkEmail';
import annotationLinkExternal from './annotations/linkExternal';
import annotationLinkInternal from './annotations/linkInternal';
import annotationProduct from './annotations/product';
import collection from './documents/collection';
import colorTheme from './documents/colorTheme';
import page from './documents/page';
import product from './documents/product';
import productVariant from './documents/productVariant';

const documents = [collection, colorTheme, page, product, productVariant, author, startup];

const annotations = [
  annotationLinkEmail,
  annotationLinkExternal,
  annotationLinkInternal,
  annotationProduct
];

// Singleton document types
import home from './singletons/home';
import settings from './singletons/settings';

const singletons = [home, settings];

// Block content
import body from './blocks/body';

const blocks = [body];

// Object types
import customProductOptionColor from './objects/customProductOption/color';
import customProductOptionColorObject from './objects/customProductOption/colorObject';
import customProductOptionSize from './objects/customProductOption/size';
import customProductOptionSizeObject from './objects/customProductOption/sizeObject';
import footer from './objects/global/footer';
import linkExternal from './objects/global/linkExternal';
import linkInternal from './objects/global/linkInternal';
import links from './objects/global/links';
import menu from './objects/global/menu';
import notFoundPage from './objects/global/notFoundPage';
import heroCollection from './objects/hero/collection';
import heroHome from './objects/hero/home';
import heroPage from './objects/hero/page';
import imageWithProductHotspots from './objects/hotspot/imageWithProductHotspots';
import productHotspots from './objects/hotspot/productHotspots';
import spot from './objects/hotspot/spot';
import moduleAccordion from './objects/module/accordion';
import accordionBody from './objects/module/accordionBody';
import accordionGroup from './objects/module/accordionGroup';
import moduleCallout from './objects/module/callout';
import moduleCallToAction from './objects/module/callToAction';
import moduleCollection from './objects/module/collection';
import moduleGrid from './objects/module/grid';
import gridItems from './objects/module/gridItem';
import moduleImage from './objects/module/image';
import moduleImageAction from './objects/module/imageCallToAction';
import moduleImages from './objects/module/images';
import moduleInstagram from './objects/module/instagram';
import moduleProduct from './objects/module/product';
import moduleProducts from './objects/module/products';
import seoDescription from './objects/seo/description';
import seoHome from './objects/seo/home';
import seoPage from './objects/seo/page';
import seo from './objects/seo/seo';
import seoShopify from './objects/seo/shopify';
import inventory from './objects/shopify/inventory';
import option from './objects/shopify/option';
import placeholderString from './objects/shopify/placeholderString';
import priceRange from './objects/shopify/priceRange';
import productWithVariant from './objects/shopify/productWithVariant';
import proxyString from './objects/shopify/proxyString';
import shopifyCollection from './objects/shopify/shopifyCollection';
import shopifyCollectionRule from './objects/shopify/shopifyCollectionRule';
import shopifyProduct from './objects/shopify/shopifyProduct';
import shopifyProductVariant from './objects/shopify/shopifyProductVariant';

// Collections
import author from './documents/author';
import startup from './documents/startup';
import collectionGroup from './objects/collection/group';
import collectionLinks from './objects/collection/links';

const objects = [
  customProductOptionColor,
  customProductOptionColorObject,
  customProductOptionSize,
  customProductOptionSizeObject,
  footer,
  imageWithProductHotspots,
  inventory,
  links,
  linkExternal,
  linkInternal,
  notFoundPage,
  heroCollection,
  heroHome,
  heroPage,
  moduleAccordion,
  accordionBody,
  accordionGroup,
  menu,
  moduleCallout,
  moduleCallToAction,
  moduleCollection,
  moduleGrid,
  gridItems,
  moduleImage,
  moduleImageAction,
  moduleImages,
  moduleInstagram,
  moduleProduct,
  moduleProducts,
  placeholderString,
  priceRange,
  spot,
  productHotspots,
  option,
  productWithVariant,
  proxyString,
  seo,
  seoHome,
  seoPage,
  seoDescription,
  seoShopify,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,
  collectionGroup,
  collectionLinks
];

export const schemaTypes = [...annotations, ...singletons, ...objects, ...blocks, ...documents];
