import { FC } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface Feature {
    name: string;
    included: boolean;
    icon?: string;
    spec?: string;
}

interface FeatureCategory {
    category: string;
    items: Feature[];
}

interface PricingPlan {
    name: string;
    price: number;
    tag: string | null;
    description: string;
    mainFeatures: FeatureCategory[];
}

interface PricingCardProps {
    plan: PricingPlan;
    isPopular?: boolean;
}

const PricingCard: FC<PricingCardProps> = ({ plan, isPopular }) => {
    return (
        <div className={`rounded-2xl border p-8 shadow-sm ${isPopular ? 'border-blue-600 ring-1 ring-blue-600' : 'border-gray-200'}`}>
            {plan.tag && (
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                    {plan.tag}
                </span>
            )}
            <h3 className="mt-4 text-2xl font-bold">{plan.name}</h3>
            <p className="mt-2 text-gray-500">{plan.description}</p>
            <p className="mt-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-500">/release</span>
            </p>
            <button className={`mt-8 w-full rounded-lg py-3 px-4 text-white font-medium ${isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}>
                Get Started
            </button>
            
            <div className="mt-8 space-y-8">
                {plan.mainFeatures.map((category, idx) => (
                    <div key={idx}>
                        <h4 className="text-lg font-semibold mb-4">{category.category}</h4>
                        <ul className="space-y-4">
                            {category.items.map((feature, featureIdx) => (
                                <li key={featureIdx} className="flex items-center gap-3">
                                    {feature.included ? (
                                        <CheckCircleIcon className="h-5 w-5 text-green-500" />
                                    ) : (
                                        <XCircleIcon className="h-5 w-5 text-gray-300" />
                                    )}
                                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                                        {feature.name}
                                        {feature.spec && <span className="text-sm text-gray-500"> ({feature.spec})</span>}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingCard;
