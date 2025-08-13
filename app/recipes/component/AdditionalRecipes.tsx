// components/ReadMorePosts.tsx
import Link from "next/link";
import { getReadMoreRecipes } from "../lib/recipebook";

export default function ReadMoreRecipes({
  excludeSlug,
  limit = 3,
}: {
  excludeSlug?: string;
  limit?: number;
}) {
  const recipes = getReadMoreRecipes(excludeSlug, limit);
  if (!recipes.length) return null;

  return (
    <aside className="mt-16">
      <h2 className="text-xl font-semibold mb-4">Read more</h2>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((p) => (
          <li key={p.slug} className="rounded-2xl border p-4 hover:shadow-md transition">
            <Link href={`/recipes/${p.slug}`} className="block">
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{p.date}</p>
              {p.description && (
                <p className="text-sm text-gray-700 mt-3">{p.description}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
