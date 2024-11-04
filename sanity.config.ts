'use client';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { colorInput } from '@sanity/color-input';
import { visionTool } from '@sanity/vision';
import { imageHotspotArrayPlugin } from 'sanity-plugin-hotspot-array';
import { markdownSchema } from 'sanity-plugin-markdown';
import { media, mediaAssetSource } from 'sanity-plugin-media';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { structure } from './sanity/desk';
import { apiVersion, dataset, projectId } from './sanity/env';
import { customDocumentActions } from './sanity/plugins/customDocumentActions';
import { schemaTypes } from './sanity/schemas';

const sanityConfig = defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemas' folder
  schema: {
    types: schemaTypes
  },
  plugins: [
    structureTool({ structure }),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    markdownSchema()
  ],
  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource);
      }
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource);
      }
    }
  }
});

export default sanityConfig;
