import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PR Services Blog - Latest PR Tips and Industry Insights',
  description: 'Stay updated with the latest PR trends, tips, and best practices. Expert insights on press release writing, media relations, and PR strategy.',
  keywords: 'PR blog, press release tips, PR industry news, media relations blog, PR strategy insights',
};

const blogPosts = [
  {
    slug: 'how-to-write-an-effective-press-release',
    title: 'How to Write an Effective Press Release',
    excerpt: 'Learn the key elements that make a press release stand out and get noticed by journalists and media outlets.',
    date: 'December 24, 2023',
    author: 'John Smith',
    category: 'Writing Tips',
    readTime: '5 min read',
    image: '/blog/press-release-writing.jpg'
  },
  {
    slug: 'maximizing-your-pr-distribution-strategy',
    title: 'Maximizing Your PR Distribution Strategy',
    excerpt: 'Discover the best practices for distributing your press release to reach the widest possible audience.',
    date: 'December 23, 2023',
    author: 'Sarah Johnson',
    category: 'Distribution',
    readTime: '4 min read',
    image: '/blog/distribution-strategy.jpg'
  },
  {
    slug: 'the-impact-of-ai-on-press-release-writing',
    title: 'The Impact of AI on Press Release Writing',
    excerpt: 'Explore how artificial intelligence is transforming the way we write and distribute press releases.',
    date: 'December 22, 2023',
    author: 'Michael Brown',
    category: 'Technology',
    readTime: '6 min read',
    image: '/blog/ai-pr.jpg'
  }
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-gradient-to-b from-blue-100/20 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              PR Insights & News
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay updated with the latest trends, tips, and best practices in press release writing and distribution.
            </p>
          </div>
        </div>
      </div>

      {/* Blog posts grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group"
            >
              <article className="flex flex-col h-full bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 group-hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 bg-gray-200 rounded-t-2xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600">
                      {post.category}
                    </span>
                  </div>
                  <div className="mt-3">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                      {post.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-100"></div>
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-gray-600">{post.readTime}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-24 rounded-2xl bg-blue-600 py-16 sm:mt-32 sm:py-24 lg:mx-0">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Subscribe to our newsletter
              </h2>
              <p className="mt-4 text-lg leading-8 text-blue-100">
                Get the latest PR insights and tips delivered straight to your inbox.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4 mx-auto">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
