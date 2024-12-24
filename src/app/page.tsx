import { pricingPlans, promotions } from '@/data/pricing';
import PricingCard from '@/components/PricingCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              PR Services That Drive Results
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
              Choose the perfect plan for your PR needs. Get your story heard across multiple platforms and reach your target audience effectively.
            </p>
          </div>

          {/* Welcome Offer */}
          <div className="mt-12 bg-blue-50 rounded-xl p-6 text-center">
            <p className="text-blue-600 font-semibold text-lg">{promotions.welcomeOffer.message}</p>
            <p className="text-blue-800 font-bold mt-2">Use code: {promotions.welcomeOffer.code}</p>
          </div>

          {/* Pricing Cards */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {Object.entries(pricingPlans).map(([key, plan]) => (
              <PricingCard
                key={key}
                plan={plan}
                isPopular={plan.tag === "POPULAR CHOICE"}
              />
            ))}
          </div>

          {/* Additional Promotions */}
          <div className="mt-24 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900">{promotions.bulkDiscount.title}</h3>
              <p className="mt-4 text-gray-500">{promotions.bulkDiscount.message}</p>
              <button className="mt-6 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                {promotions.bulkDiscount.button}
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900">{promotions.reseller.title}</h3>
              <p className="mt-4 text-gray-500">{promotions.reseller.message}</p>
              <button className="mt-6 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                {promotions.reseller.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
