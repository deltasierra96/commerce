/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Startup = {
  _id: string;
  _type: 'startup';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'author';
  };
  views?: number;
  description?: string;
  category?: string;
  image?: string;
  pitch?: string;
};

export type Author = {
  _id: string;
  _type: 'author';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  image?: string;
  bio?: string;
};

export type Body = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: 'span';
        _key: string;
      }>;
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
      listItem?: 'bullet' | 'number';
      markDefs?: Array<
        | ({
            _key: string;
          } & AnnotationProduct)
        | ({
            _key: string;
          } & AnnotationLinkEmail)
        | ({
            _key: string;
          } & AnnotationLinkInternal)
        | ({
            _key: string;
          } & AnnotationLinkExternal)
      >;
      level?: number;
      _type: 'block';
      _key: string;
    }
  | ({
      _key: string;
    } & ModuleAccordion)
  | ({
      _key: string;
    } & ModuleCallout)
  | ({
      _key: string;
    } & ModuleGrid)
  | ({
      _key: string;
    } & ModuleImages)
  | ({
      _key: string;
    } & ModuleInstagram)
  | ({
      _key: string;
    } & ModuleProducts)
>;

export type CollectionLinks = Array<{
  _ref: string;
  _type: 'reference';
  _weak?: boolean;
  _key: string;
  [internalGroqTypeReferenceTo]?: 'collection';
}>;

export type CollectionGroup = {
  _type: 'collectionGroup';
  title?: string;
  collectionLinks?: CollectionLinks;
  collectionProducts?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'collection';
  };
};

export type CollectionRule = {
  _type: 'collectionRule';
  column?: string;
  relation?: string;
  condition?: string;
};

export type SeoDescription = string;

export type ProxyString = string;

export type ProductVariant = {
  _id: string;
  _type: 'productVariant';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  hidden?: string;
  titleProxy?: ProxyString;
  store?: ShopifyProductVariant;
};

export type ShopifyProductVariant = {
  _type: 'shopifyProductVariant';
  createdAt?: string;
  updatedAt?: string;
  status?: 'active' | 'archived' | 'draft';
  isDeleted?: boolean;
  title?: string;
  sku?: string;
  id?: number;
  gid?: string;
  productId?: number;
  productGid?: string;
  price?: number;
  compareAtPrice?: number;
  inventory?: Inventory;
  option1?: string;
  option2?: string;
  option3?: string;
  previewImageUrl?: string;
};

export type Option = {
  _type: 'option';
  name?: string;
  values?: Array<string>;
};

export type ProductHotspots = Array<
  {
    _key: string;
  } & Spot
>;

export type Spot = {
  _type: 'spot';
  productWithVariant?: ProductWithVariant;
  x?: number;
  y?: number;
};

export type PriceRange = {
  _type: 'priceRange';
  minVariantPrice?: number;
  maxVariantPrice?: number;
};

export type PlaceholderString = string;

export type ModuleProducts = {
  _type: 'module.products';
  modules?: Array<
    {
      _key: string;
    } & ModuleProduct
  >;
  layout?: 'card' | 'pill';
};

export type ModuleProduct = {
  _type: 'module.product';
  productWithVariant?: ProductWithVariant;
};

export type ModuleInstagram = {
  _type: 'module.instagram';
  url?: string;
};

export type ModuleImages = {
  _type: 'module.images';
  modules?: Array<
    {
      _key: string;
    } & ModuleImage
  >;
  fullWidth?: boolean;
  verticalAlign?: 'top' | 'center' | 'bottom';
};

export type ModuleImage = {
  _type: 'module.image';
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  variant?: string | 'caption' | 'callToAction' | 'productHotspots' | 'productTags';
  caption?: string;
  callToAction?: ImageCallToAction;
  productHotspots?: ProductHotspots;
  productTags?: Array<
    {
      _key: string;
    } & ProductWithVariant
  >;
};

export type ImageCallToAction = {
  _type: 'imageCallToAction';
  title?: string;
  links?: Array<
    | ({
        _key: string;
      } & LinkInternal)
    | ({
        _key: string;
      } & LinkExternal)
  >;
};

export type GridItem = {
  _type: 'gridItem';
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal';
    listItem?: never;
    markDefs?: Array<
      | ({
          _key: string;
        } & AnnotationProduct)
      | ({
          _key: string;
        } & AnnotationLinkEmail)
      | ({
          _key: string;
        } & AnnotationLinkInternal)
      | ({
          _key: string;
        } & AnnotationLinkExternal)
    >;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
};

export type ModuleGrid = {
  _type: 'module.grid';
  items?: Array<
    {
      _key: string;
    } & GridItem
  >;
};

export type ModuleCollection = {
  _type: 'module.collection';
  collection?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'collection';
  };
  showBackground?: boolean;
};

export type ModuleCallToAction = {
  _type: 'module.callToAction';
  layout?: 'left' | 'right';
  title?: string;
  body?: string;
  links?: Array<
    | ({
        _key: string;
      } & LinkInternal)
    | ({
        _key: string;
      } & LinkExternal)
  >;
  content?: Array<
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: 'image';
        _key: string;
      }
    | ({
        _key: string;
      } & ProductWithVariant)
  >;
};

export type ModuleCallout = {
  _type: 'module.callout';
  text?: string;
  links?: Array<
    | ({
        _key: string;
      } & LinkInternal)
    | ({
        _key: string;
      } & LinkExternal)
  >;
};

export type AccordionGroup = {
  _type: 'accordionGroup';
  title?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal';
    listItem?: never;
    markDefs?: Array<
      | ({
          _key: string;
        } & AnnotationLinkEmail)
      | ({
          _key: string;
        } & AnnotationLinkInternal)
      | ({
          _key: string;
        } & AnnotationLinkExternal)
    >;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
};

export type AccordionBody = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: 'span';
    _key: string;
  }>;
  style?: 'normal';
  listItem?: never;
  markDefs?: Array<
    | ({
        _key: string;
      } & AnnotationLinkEmail)
    | ({
        _key: string;
      } & AnnotationLinkInternal)
    | ({
        _key: string;
      } & AnnotationLinkExternal)
  >;
  level?: number;
  _type: 'block';
  _key: string;
}>;

export type ModuleAccordion = {
  _type: 'module.accordion';
  groups?: Array<
    {
      _key: string;
    } & AccordionGroup
  >;
};

export type LinkInternal = {
  _type: 'linkInternal';
  title?: string;
  reference?:
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'collection';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'home';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'page';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'product';
      };
};

export type LinkExternal = {
  _type: 'linkExternal';
  title?: string;
  url?: string;
  newWindow?: boolean;
};

export type MenuLinks = Array<
  | ({
      _key: string;
    } & CollectionGroup)
  | ({
      _key: string;
    } & LinkInternal)
  | ({
      _key: string;
    } & LinkExternal)
>;

export type Inventory = {
  _type: 'inventory';
  isAvailable?: boolean;
  management?: string;
  policy?: string;
};

export type ImageWithProductHotspots = {
  _type: 'imageWithProductHotspots';
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  showHotspots?: boolean;
  productHotspots?: ProductHotspots;
};

export type CustomProductOptionSizeObject = {
  _type: 'customProductOption.sizeObject';
  title?: string;
  width?: number;
  height?: number;
};

export type CustomProductOptionSize = {
  _type: 'customProductOption.size';
  title?: string;
  sizes?: Array<
    {
      _key: string;
    } & CustomProductOptionSizeObject
  >;
};

export type CustomProductOptionColorObject = {
  _type: 'customProductOption.colorObject';
  title?: string;
  color?: Color;
};

export type CustomProductOptionColor = {
  _type: 'customProductOption.color';
  title?: string;
  colors?: Array<
    {
      _key: string;
    } & CustomProductOptionColorObject
  >;
};

export type Settings = {
  _id: string;
  _type: 'settings';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  menu?: MenuSettings;
  footer?: FooterSettings;
  customProductOptions?: Array<
    | ({
        _key: string;
      } & CustomProductOptionColor)
    | ({
        _key: string;
      } & CustomProductOptionSize)
  >;
  notFoundPage?: NotFoundPage;
  seo?: Seo;
};

export type Seo = {
  _type: 'seo';
  title?: string;
  description?: string;
};

export type NotFoundPage = {
  _type: 'notFoundPage';
  title?: string;
  body?: string;
  collection?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'collection';
  };
  colorTheme?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'colorTheme';
  };
};

export type FooterSettings = {
  _type: 'footerSettings';
  links?: Array<
    | ({
        _key: string;
      } & LinkInternal)
    | ({
        _key: string;
      } & LinkExternal)
  >;
  text?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal';
    listItem?: never;
    markDefs?: Array<
      | ({
          _key: string;
        } & AnnotationLinkEmail)
      | ({
          _key: string;
        } & AnnotationLinkInternal)
      | ({
          _key: string;
        } & AnnotationLinkExternal)
    >;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
};

export type MenuSettings = {
  _type: 'menuSettings';
  links?: MenuLinks;
};

export type AnnotationProduct = {
  _type: 'annotationProduct';
  productWithVariant?: ProductWithVariant;
  linkAction?: 'link' | 'addToCart' | 'buyNow';
  quantity?: number;
};

export type ProductWithVariant = {
  _type: 'productWithVariant';
  product?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'product';
  };
  variant?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'productVariant';
  };
};

export type AnnotationLinkInternal = {
  _type: 'annotationLinkInternal';
  reference?:
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'collection';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'home';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'page';
      }
    | {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'product';
      };
};

export type Product = {
  _id: string;
  _type: 'product';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  hidden?: string;
  titleProxy?: ProxyString;
  slugProxy?: ProxyString;
  colorTheme?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'colorTheme';
  };
  body?: Body;
  store?: ShopifyProduct;
  seo?: SeoShopify;
};

export type ShopifyProduct = {
  _type: 'shopifyProduct';
  createdAt?: string;
  updatedAt?: string;
  status?: 'active' | 'archived' | 'draft';
  isDeleted?: boolean;
  title?: string;
  id?: number;
  gid?: string;
  slug?: Slug;
  descriptionHtml?: string;
  productType?: string;
  vendor?: string;
  tags?: string;
  priceRange?: PriceRange;
  previewImageUrl?: string;
  options?: Array<
    {
      _key: string;
    } & Option
  >;
  variants?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'productVariant';
  }>;
};

export type Page = {
  _id: string;
  _type: 'page';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  colorTheme?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'colorTheme';
  };
  showHero?: boolean;
  hero?: HeroPage;
  body?: Body;
  seo?: SeoPage;
};

export type SeoPage = {
  _type: 'seo.page';
  title?: PlaceholderString;
  description?: SeoDescription;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
};

export type HeroPage = {
  _type: 'hero.page';
  title?: string;
  content?: Array<
    | ({
        _key: string;
      } & ProductWithVariant)
    | ({
        _key: string;
      } & ImageWithProductHotspots)
  >;
};

export type Home = {
  _id: string;
  _type: 'home';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  hero?: HeroHome;
  modules?: Array<
    | ({
        _key: string;
      } & ModuleCallout)
    | ({
        _key: string;
      } & ModuleCallToAction)
    | ({
        _key: string;
      } & ModuleCollection)
    | ({
        _key: string;
      } & ModuleImage)
    | ({
        _key: string;
      } & ModuleInstagram)
    | ({
        _key: string;
      } & ModuleProduct)
  >;
  seo?: SeoHome;
};

export type SeoHome = {
  _type: 'seo.home';
  title?: string;
  description?: SeoDescription;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
};

export type HeroHome = {
  _type: 'hero.home';
  title?: string;
  links?: Array<
    | ({
        _key: string;
      } & LinkInternal)
    | ({
        _key: string;
      } & LinkExternal)
  >;
  content?: Array<
    | ({
        _key: string;
      } & ProductWithVariant)
    | ({
        _key: string;
      } & ImageWithProductHotspots)
  >;
};

export type Collection = {
  _id: string;
  _type: 'collection';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  hidden?: string;
  titleProxy?: ProxyString;
  slugProxy?: ProxyString;
  colorTheme?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'colorTheme';
  };
  vector?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  showHero?: boolean;
  hero?: HeroCollection;
  modules?: Array<
    | ({
        _key: string;
      } & ModuleCallout)
    | ({
        _key: string;
      } & ModuleCallToAction)
    | ({
        _key: string;
      } & ModuleImage)
    | ({
        _key: string;
      } & ModuleInstagram)
  >;
  store?: ShopifyCollection;
  seo?: SeoShopify;
};

export type SeoShopify = {
  _type: 'seo.shopify';
  title?: PlaceholderString;
  description?: SeoDescription;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
};

export type ShopifyCollection = {
  _type: 'shopifyCollection';
  createdAt?: string;
  updatedAt?: string;
  isDeleted?: boolean;
  title?: string;
  id?: number;
  gid?: string;
  slug?: Slug;
  descriptionHtml?: string;
  imageUrl?: string;
  rules?: Array<
    {
      _key: string;
    } & CollectionRule
  >;
  disjunctive?: boolean;
  sortOrder?: string;
};

export type HeroCollection = {
  _type: 'hero.collection';
  title?: string;
  description?: string;
  content?: Array<
    | ({
        _key: string;
      } & ProductWithVariant)
    | ({
        _key: string;
      } & ImageWithProductHotspots)
  >;
};

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type ColorTheme = {
  _id: string;
  _type: 'colorTheme';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  text?: Color;
  background?: Color;
};

export type AnnotationLinkExternal = {
  _type: 'annotationLinkExternal';
  url?: string;
  newWindow?: boolean;
};

export type AnnotationLinkEmail = {
  _type: 'annotationLinkEmail';
  email?: string;
};

export type Markdown = string;

export type MediaTag = {
  _id: string;
  _type: 'media.tag';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: Slug;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type Color = {
  _type: 'color';
  hex?: string;
  alpha?: number;
  hsl?: HslaColor;
  hsv?: HsvaColor;
  rgb?: RgbaColor;
};

export type RgbaColor = {
  _type: 'rgbaColor';
  r?: number;
  g?: number;
  b?: number;
  a?: number;
};

export type HsvaColor = {
  _type: 'hsvaColor';
  h?: number;
  s?: number;
  v?: number;
  a?: number;
};

export type HslaColor = {
  _type: 'hslaColor';
  h?: number;
  s?: number;
  l?: number;
  a?: number;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Startup
  | Author
  | Body
  | CollectionLinks
  | CollectionGroup
  | CollectionRule
  | SeoDescription
  | ProxyString
  | ProductVariant
  | ShopifyProductVariant
  | Option
  | ProductHotspots
  | Spot
  | PriceRange
  | PlaceholderString
  | ModuleProducts
  | ModuleProduct
  | ModuleInstagram
  | ModuleImages
  | ModuleImage
  | ImageCallToAction
  | GridItem
  | ModuleGrid
  | ModuleCollection
  | ModuleCallToAction
  | ModuleCallout
  | AccordionGroup
  | AccordionBody
  | ModuleAccordion
  | LinkInternal
  | LinkExternal
  | MenuLinks
  | Inventory
  | ImageWithProductHotspots
  | CustomProductOptionSizeObject
  | CustomProductOptionSize
  | CustomProductOptionColorObject
  | CustomProductOptionColor
  | Settings
  | Seo
  | NotFoundPage
  | FooterSettings
  | MenuSettings
  | AnnotationProduct
  | ProductWithVariant
  | AnnotationLinkInternal
  | Product
  | ShopifyProduct
  | Page
  | SeoPage
  | HeroPage
  | Home
  | SeoHome
  | HeroHome
  | Collection
  | SeoShopify
  | ShopifyCollection
  | HeroCollection
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | ColorTheme
  | AnnotationLinkExternal
  | AnnotationLinkEmail
  | Markdown
  | MediaTag
  | Slug
  | Color
  | RgbaColor
  | HsvaColor
  | HslaColor;
export declare const internalGroqTypeReferenceTo: unique symbol;
