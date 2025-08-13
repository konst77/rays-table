// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { MarkdownRenderer } from '@/app/blog/components/Renderer';
import { getAllRecipeMeta, getRecipeBySlug } from '../lib/recipebook';
import Title from '../component/Title';
import ReadMoreRecipes from '../component/AdditionalRecipes';


// 1. Tell Next which slugs to pre-render
export function generateStaticParams() {
  return getAllRecipeMeta().map((recipe) => ({ slug: recipe.slug }));
}

// 2. Default export must be async and accept exactly { params: { slug } }
export default async function RecipePage(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await props.params
  // slug is string[], so pick the actual slug string:
  const realSlug = Array.isArray(slug) ? slug[0] : slug;

  const recipe = await getRecipeBySlug(realSlug).catch(() => null);
  if (!recipe) notFound();

  return (
    <div className="p-4 md:p-10 flex flex-col items-center">
      <article className="lg:max-w-7xl grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-4">
        <section className="flex flex-col gap-4 md:col-span-2 md:min-h-[520px] justify-end">
          <Title phrase={recipe.title} />
        </section>
        <section className="self-end mb-4">
          <p className="text-[14px] italic text-[#767676]">{recipe.description}</p>
        </section>
        <section className="self-end mb-4">
          <p className="text-[14px] text-[#767676]">{recipe.date}</p>
        </section>
        <section className="mt-40 md:col-span-2 md:col-start-3">
          <MarkdownRenderer content={recipe.content} />
        </section>
      </article>
      
      <div className=''>
        <ReadMoreRecipes excludeSlug={recipe.slug} />
      </div>
    </div>
  );
}

// Optional ISR
export const revalidate = 60;

