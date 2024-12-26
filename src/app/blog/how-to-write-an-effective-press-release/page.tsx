import { Metadata } from 'next';
import BlogPostContent from '@/components/BlogPostContent';

export const metadata: Metadata = {
  title: 'How to Write an Effective Press Release in 2024 | PR Services',
  description: 'Learn the essential elements of writing a compelling press release that gets noticed by journalists. Discover expert tips, best practices, and real-world examples.',
  keywords: 'press release writing, PR tips, media relations, news release, press release format, PR strategy',
  openGraph: {
    title: 'How to Write an Effective Press Release in 2024',
    description: 'Master the art of press release writing with our comprehensive guide. Learn structure, style, and strategies that get your story noticed.',
    images: ['/blog/press-release-writing-hero.jpg'],
  },
};

export default function BlogPost() {
  const publishDate = '2024-01-02T09:00:00Z';
  const modifiedDate = '2024-01-02T09:00:00Z';

  return <BlogPostContent publishDate={publishDate} modifiedDate={modifiedDate} />;
}
