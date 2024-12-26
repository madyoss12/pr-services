'use client';

import Image from 'next/image';
import Link from 'next/link';
import BlogJsonLd from './BlogJsonLd';

interface BlogPostContentProps {
  publishDate: string;
  modifiedDate: string;
}

export default function BlogPostContent({ publishDate, modifiedDate }: BlogPostContentProps) {
  return (
    <article className="bg-white">
      <BlogJsonLd
        title="How to Write an Effective Press Release in 2024"
        description="Learn the essential elements of writing a compelling press release that gets noticed by journalists. Discover expert tips, best practices, and real-world examples."
        publishDate={publishDate}
        modifiedDate={modifiedDate}
        authorName="John Smith"
        images={['/blog/press-release-writing-hero.jpg']}
        url="https://prservices.com/blog/how-to-write-an-effective-press-release"
      />

      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800">
        <Image
          src="/blog/press-release-writing-hero.jpg"
          alt="Professional writing a press release"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="mx-auto max-w-3xl px-6 py-32 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              How to Write an Effective Press Release in 2024
            </h1>
            <div className="mt-6 flex items-center justify-center gap-x-4 text-sm text-white">
              <time dateTime={publishDate}>January 2, 2024</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Introduction */}
        <div className="prose prose-lg prose-blue mx-auto">
          <p className="lead">
            In today's fast-paced digital world, crafting an effective press release is more crucial than ever. 
            This comprehensive guide will walk you through the essential elements of writing a press release 
            that captures attention and drives results.
          </p>

          <h2 id="key-elements" className="scroll-mt-16">Key Elements of an Effective Press Release</h2>
          <p>
            Before diving into the writing process, it's essential to understand the fundamental components 
            that make a press release successful. A well-structured press release includes:
          </p>
          <ul>
            <li>A compelling headline</li>
            <li>A strong lead paragraph</li>
            <li>Relevant quotes from key stakeholders</li>
            <li>Supporting details and statistics</li>
            <li>Contact information</li>
          </ul>

          <div className="my-8 rounded-xl bg-blue-50 p-6">
            <blockquote className="text-blue-900">
              "The first paragraph of your press release should answer the five W's: who, what, when, where, 
              and why. This sets the foundation for your entire story."
            </blockquote>
          </div>

          <h2 id="writing-tips" className="scroll-mt-16">Essential Writing Tips</h2>
          <p>
            Follow these professional tips to enhance your press release's effectiveness:
          </p>

          <h3>1. Craft a Compelling Headline</h3>
          <p>
            Your headline is the first thing journalists see. Make it newsworthy, concise, and attention-grabbing. 
            Consider using numbers, data, or powerful action words.
          </p>

          <h3>2. Perfect Your Lead Paragraph</h3>
          <p>
            The first paragraph should contain the most newsworthy information. Think of it as the "elevator pitch" 
            of your story.
          </p>

          <div className="my-8">
            <Image
              src="/blog/press-release-structure.jpg"
              alt="Press Release Structure Diagram"
              width={800}
              height={400}
              className="rounded-lg"
            />
            <p className="mt-2 text-sm text-gray-600 text-center">
              The inverted pyramid structure of a press release
            </p>
          </div>

          <h2 id="common-mistakes" className="scroll-mt-16">Common Mistakes to Avoid</h2>
          <p>
            Even experienced PR professionals can fall into these common pitfalls:
          </p>
          <ul>
            <li>Using excessive jargon or technical language</li>
            <li>Writing overly long sentences</li>
            <li>Forgetting to include contact information</li>
            <li>Burying the lead</li>
          </ul>

          {/* Internal Links Section */}
          <div className="my-12 rounded-xl bg-gray-50 p-8">
            <h3 className="text-xl font-semibold mb-4">Related Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/blog/maximizing-your-pr-distribution-strategy" className="text-blue-600 hover:text-blue-800">
                  → Maximize Your PR Distribution Strategy
                </Link>
                <p className="text-sm text-gray-600 mt-1">
                  Learn how to get your press release in front of the right audience
                </p>
              </li>
              <li>
                <Link href="/blog/the-impact-of-ai-on-press-release-writing" className="text-blue-600 hover:text-blue-800">
                  → The Impact of AI on Press Release Writing
                </Link>
                <p className="text-sm text-gray-600 mt-1">
                  Discover how AI is transforming the PR industry
                </p>
              </li>
              <li>
                <Link href="/services" className="text-blue-600 hover:text-blue-800">
                  → Professional PR Writing Services
                </Link>
                <p className="text-sm text-gray-600 mt-1">
                  Let our experts help you craft the perfect press release
                </p>
              </li>
            </ul>
          </div>

          <h2 id="conclusion" className="scroll-mt-16">Conclusion</h2>
          <p>
            Writing an effective press release requires careful planning, attention to detail, and a clear 
            understanding of your audience. By following these guidelines and avoiding common pitfalls, 
            you'll be well-equipped to create press releases that get noticed and drive results.
          </p>

          {/* Author Bio */}
          <div className="mt-12 border-t pt-8">
            <div className="flex items-center gap-x-4">
              <Image
                src="/team/john-smith.jpg"
                alt="John Smith"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold">John Smith</h3>
                <p className="text-sm text-gray-600">
                  PR Strategy Director at PR Services with over 15 years of experience in media relations 
                  and corporate communications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Ready to Create Your Perfect Press Release?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Our team of PR experts is here to help you craft compelling press releases that get results.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
