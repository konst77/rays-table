'use client'

// components/MarkdownRenderer.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Headings
        h1: ({ node, ...props }) => (
          <h1 className="text-5xl mb-6" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-4xl mb-5" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-3xl mb-4" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className="text-2xl mb-3" {...props} />
        ),
        h5: ({ node, ...props }) => (
          <h5 className="text-xl mb-2" {...props} />
        ),
        h6: ({ node, ...props }) => (
          <h6 className="text-lg mb-2" {...props} />
        ),

        // Paragraph
        p: ({ node, ...props }) => (
          <p className="mb-4 leading-relaxed text-gray-800" {...props} />
        ),

        // Links
        a: ({ node, href, ...props }) => (
          <a
            href={href}
            className="text-orange-500 hover:underline"
            {...props}
          />
        ),

        // Lists
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="ml-4" {...props} />
        ),

        // Blockquote
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-brand-500 pl-4 italic mb-4 text-gray-600" {...props} />
        ),


        // Images
        img: ({ node, src, alt, ...props }) => (
          <img
            src={src}
            alt={alt}
            className="mx-auto my-4 rounded-lg shadow-md"
            {...props}
          />
        ),

        // Tables
        table: ({ node, ...props }) => (
          <table className="w-full border-collapse mb-6" {...props} />
        ),
        thead: ({ node, ...props }) => (
          <thead className="bg-gray-100" {...props} />
        ),
        tbody: ({ node, ...props }) => <tbody {...props} />,
        tr: ({ node, ...props }) => (
          <tr className="border-b last:border-0" {...props} />
        ),
        th: ({ node, ...props }) => (
          <th className="px-4 py-2 text-left font-medium text-gray-900" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="px-4 py-2 text-left text-gray-800" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
