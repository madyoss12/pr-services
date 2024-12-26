'use client';

import { CheckCircleIcon } from '@heroicons/react/24/solid';

const services = [
  {
    title: 'Press Release Writing',
    description: 'Professional press release writing service tailored to your needs',
    features: [
      'SEO-optimized content',
      'Industry-specific expertise',
      'Multiple revisions included',
      'Keyword optimization',
      'Compelling headlines',
      'Call-to-action integration'
    ],
    image: '/writing.jpg'
  },
  {
    title: 'Distribution Services',
    description: 'Wide-reaching distribution network to maximize your exposure',
    features: [
      'Major news outlets',
      'Industry-specific platforms',
      'Social media distribution',
      'Search engine visibility',
      'Targeted audience reach',
      'Real-time tracking'
    ],
    image: '/distribution.jpg'
  },
  {
    title: 'Media Monitoring',
    description: 'Track and analyze your press release performance',
    features: [
      'Real-time monitoring',
      'Coverage analysis',
      'Social media tracking',
      'Competitor analysis',
      'Performance metrics',
      'Monthly reports'
    ],
    image: '/monitoring.jpg'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Professional PR Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From writing to distribution, we provide comprehensive press release services to help you reach your target audience effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
                <ul className="mt-8 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto p-6 bg-gray-50 rounded-b-2xl">
                <button className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Choose the perfect plan for your needs and start reaching your target audience today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </a>
              <a href="/pricing" className="text-sm font-semibold leading-6 text-white">
                View pricing <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
