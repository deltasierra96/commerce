import { useFragment } from '@/__generated__';
import {
  GetPageQuery,
  GetPageQueryVariables,
  PageFragmentDoc,
  SeoFragmentDoc
} from '@/__generated__/graphql';
import OpengraphImage from '@/app/_components/opengraph-image';
import { query } from '@/lib/apollo-client';
import { GET_PAGE_QUERY } from '@/shopify';

export const runtime = 'edge';

export default async function Image({ params }: { params: { page: string } }) {
  const pageQuery = await query<GetPageQuery, GetPageQueryVariables>({
    query: GET_PAGE_QUERY,
    variables: { handle: params.page }
  });

  const page = useFragment(PageFragmentDoc, pageQuery.data.pageByHandle);

  const pageSeo = useFragment(SeoFragmentDoc, page?.seo);

  const title = pageSeo?.title || page?.title;

  return await OpengraphImage({ title });
}
