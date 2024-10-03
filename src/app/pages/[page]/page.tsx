import type { Metadata } from 'next';

import { useFragment } from '@/__generated__';
import {
  GetPageQuery,
  GetPageQueryVariables,
  PageFragmentDoc,
  SeoFragmentDoc
} from '@/__generated__/graphql';
import Prose from '@/app/_components/prose';
import { query } from '@/lib/apollo-client';
import { GET_PAGE_QUERY } from '@/shopify';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params
}: {
  params: { page: string };
}): Promise<Metadata> {
  const pageQuery = await query<GetPageQuery, GetPageQueryVariables>({
    query: GET_PAGE_QUERY,
    variables: { handle: params.page }
  });

  const page = useFragment(PageFragmentDoc, pageQuery.data.pageByHandle);
  const pageSeo = useFragment(SeoFragmentDoc, page?.seo);

  if (!page) return notFound();

  return {
    title: pageSeo?.title || page.title,
    description: pageSeo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: 'article'
    }
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  const pageQuery = await query<GetPageQuery, GetPageQueryVariables>({
    query: GET_PAGE_QUERY,
    variables: { handle: params.page },
    fetchPolicy: 'no-cache'
  });

  const page = useFragment(PageFragmentDoc, pageQuery.data.pageByHandle);

  if (!page) return notFound();

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className="mb-8" html={page.body as string} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date(page.updatedAt))}.`}
      </p>
    </>
  );
}
