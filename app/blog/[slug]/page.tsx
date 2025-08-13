// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getAllPostMeta, getPostBySlug, Post } from '../lib/posts';
import { MarkdownRenderer } from '../components/Renderer';
import AdditionalPosts from '../components/AddtionalPosts';

// 1. Tell Next which slugs to pre-render
export function generateStaticParams() {
  return getAllPostMeta().map((post) => ({ slug: post.slug }));
}

// 2. Default export must be async and accept exactly { params: { slug } }
export default async function PostPage(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await props.params
  // slug is string[], so pick the actual slug string:
  const realSlug = Array.isArray(slug) ? slug[0] : slug;

  const post = await getPostBySlug(realSlug).catch(() => null);
  if (!post) notFound();

  return (
    <div className="p-4 md:p-10 flex flex-col items-center">
      <article className="lg:max-w-7xl grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-4">
        <section className="flex flex-col gap-4 md:col-span-2 md:min-h-[520px] justify-end">
          <h1 className="text-[40px] md:text-[56px] lg:text-[128px] leading-[1] text-orange-500">
            {post.title}
          </h1>
        </section>
        <section className="self-end mb-4">
          <p className="text-[14px] italic text-[#767676]">{post.description}</p>
        </section>
        <section className="self-end mb-4">
          <p className="text-[14px] text-[#767676]">{post.date}</p>
        </section>
        <section className="mt-40 md:col-span-2 md:col-start-3">
          <MarkdownRenderer content={post.content} />
        </section>
      </article>

      <AdditionalPosts excludeSlug={post.slug} />

    </div>
  );
}

// Optional ISR
export const revalidate = 60;

