import { notFound } from 'next/navigation';
import { getAllPostMeta, getPostBySlug, Post } from '../lib/posts';
import { MarkdownRenderer } from '../components/Renderer';

interface Props { params: { slug: string } }

export function generateStaticParams() {
  return getAllPostMeta().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: Props) {
  let post: Post;
  try {
    post = await getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <div className='p-4 md:p-10 flex flex-col items-center'>
      <article className='lg:max-w-7xl grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-4'>
        <article className='flex flex-col gap-4 md:col-span-2'>
          <h1 className="text-[40px] md:text-[56px] lg:text-[128px] leading-[1.15] text-orange-500">{post.title}</h1>
        </article>

        <article className='self-end mb-4'>
          <p className='text-[14px] italic text-[#767676] text-pretty'>{post.description}</p>
        </article>

        <article className='self-end mb-4'>
          <p className="text-[14px] text-[#767676]">{post.date}</p>
        </article>
        

        <article className='mt-40 md:col-span-2 md:col-start-3'>
          <MarkdownRenderer content={post.content} />
        </article>
      </article>
    </div>
  );
}

// Optional ISR
export const revalidate = 60;
