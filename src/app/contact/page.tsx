'use client';

import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-gradient-to-b from-blue-100/20 pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions about our PR services? We're here to help you get your story heard.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              <p className="mt-3 text-lg text-gray-600">
                Our team is ready to assist you with any questions about our PR services.
              </p>

              <dl className="mt-8 space-y-6">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-blue-600"
                      href="mailto:contact@prservices.com"
                    >
                      contact@prservices.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Phone</span>
                    <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-blue-600"
                      href="tel:+1234567890"
                    >
                      +1 (234) 567-890
                    </a>
                  </dd>
                </div>
              </dl>

              {/* Office Hours */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                <dl className="mt-4 space-y-1">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Monday - Friday</dt>
                    <dd className="text-gray-900">9:00 AM - 6:00 PM EST</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Saturday</dt>
                    <dd className="text-gray-900">10:00 AM - 4:00 PM EST</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Sunday</dt>
                    <dd className="text-gray-900">Closed</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
