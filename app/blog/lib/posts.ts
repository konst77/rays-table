// lib/posts.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export type Post = PostMeta & {
  content: string; // raw markdown
};

export function getAllPostMeta(): PostMeta[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
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

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDir, `${slug}.md`);
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

// lib/posts.ts
export function getReadMorePosts(excludeSlug?: string, limit = 3) {
  const all = getAllPostMeta(); // already sorted newest-first
  const filtered = excludeSlug ? all.filter(p => p.slug !== excludeSlug) : all;
  return filtered.slice(0, limit);
}
