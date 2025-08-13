// lib/recipebook.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const recipebookDir = path.join(process.cwd(), 'recipebook');

export type RecipeMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export type Recipe = RecipeMeta & {
  content: string; // raw markdown
};

export function getAllRecipeMeta(): RecipeMeta[] {
  return fs
    .readdirSync(recipebookDir)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(recipebookDir, filename), 'utf-8');
      const { data } = matter(raw);
      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getRecipeBySlug(slug: string): Promise<Recipe> {
  const fullPath = path.join(recipebookDir, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    content,                  // raw markdown for ReactMarkdown
  };
}

export function getReadMoreRecipes(excludeSlug?: string, limit = 3) {
  const all = getAllRecipeMeta(); // already sorted newest-first
  const filtered = excludeSlug ? all.filter(p => p.slug !== excludeSlug) : all;
  return filtered.slice(0, limit);
}
