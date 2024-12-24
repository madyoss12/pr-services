export const pricingPlans = {
    basic: {
        name: "Basic",
        price: 99,
        tag: null,
        description: "get your PR flying",
        mainFeatures: [
            {
                category: "Distribution Coverage",
                items: [
                    {name: "Regional News Sites", included: true, icon: "🌐"},
                    {name: "Major Search Engines", included: true, icon: "🔍"},
                    {name: "Social Media", included: true, icon: "📱"},
                    {name: "TV & Radio Sites", included: false, icon: "📺"}
                ]
            },
            {
                category: "Search Engines",
                items: [
                    {name: "Google News", included: true, icon: "google"},
                    {name: "Bing News", included: false, icon: "bing"},
                    {name: "Yahoo News", included: false, icon: "yahoo"}
                ]
            },
            {
                category: "Writing & Content",
                items: [
                    {name: "Press Release Writing", spec: "500 words", included: true},
                    {name: "SEO Optimization", included: true},
                    {name: "Writing Revisions", spec: "1 round", included: true}
                ]
            },
            {
                category: "Reporting",
                items: [
                    {name: "Basic Distribution Report", included: true},
                    {name: "Real-time Analytics", included: false}
                ]
            }
        ]
    },
    premium: {
        name: "Premium",
        price: 199,
        tag: "POPULAR CHOICE",
        description: "Online Visibility at Scale",
        mainFeatures: [
            {
                category: "Distribution Coverage",
                items: [
                    {name: "Regional News Sites", included: true, icon: "🌐"},
                    {name: "Major Search Engines", included: true, icon: "🔍"},
                    {name: "Social Media", included: true, icon: "📱"},
                    {name: "TV & Radio Sites", included: true, icon: "📺"}
                ]
            },
            {
                category: "Search Engines",
                items: [
                    {name: "Google News", included: true, icon: "google"},
                    {name: "Bing News", included: true, icon: "bing"},
                    {name: "Yahoo News", included: true, icon: "yahoo"}
                ]
            },
            {
                category: "Writing & Content",
                items: [
                    {name: "Press Release Writing", spec: "700 words", included: true},
                    {name: "SEO Optimization", included: true},
                    {name: "Writing Revisions", spec: "2 rounds", included: true}
                ]
            },
            {
                category: "Reporting",
                items: [
                    {name: "Advanced Distribution Report", included: true},
                    {name: "Real-time Analytics", included: true}
                ]
            }
        ]
    },
    gold: {
        name: "Gold",
        price: 449,
        tag: null,
        description: "Complete PR Package",
        mainFeatures: [
            {
                category: "Distribution Coverage",
                items: [
                    {name: "Regional News Sites", included: true, icon: "🌐"},
                    {name: "Major Search Engines", included: true, icon: "🔍"},
                    {name: "Social Media", included: true, icon: "📱"},
                    {name: "TV & Radio Sites", included: true, icon: "📺"},
                    {name: "Premium News Networks", included: true, icon: "📰"}
                ]
            },
            {
                category: "Search Engines",
                items: [
                    {name: "Google News", included: true, icon: "google"},
                    {name: "Bing News", included: true, icon: "bing"},
                    {name: "Yahoo News", included: true, icon: "yahoo"},
                    {name: "International Search", included: true, icon: "🌍"}
                ]
            },
            {
                category: "Writing & Content",
                items: [
                    {name: "Press Release Writing", spec: "1000 words", included: true},
                    {name: "SEO Optimization", included: true},
                    {name: "Writing Revisions", spec: "Unlimited", included: true},
                    {name: "Multi-language Support", included: true}
                ]
            },
            {
                category: "Reporting",
                items: [
                    {name: "Premium Distribution Report", included: true},
                    {name: "Real-time Analytics", included: true},
                    {name: "ROI Tracking", included: true}
                ]
            }
        ]
    }
};

export const promotions = {
    welcomeOffer: {
        code: "WELCOME24",
        discount: "25%",
        message: "Get 25% OFF your first press release"
    },
    bulkDiscount: {
        title: "Bulk Discounts",
        message: "Save up to 30% on bulk orders. Discounts start from just five orders.",
        button: "Book Now"
    },
    reseller: {
        title: "Marketing Agencies & Resellers",
        message: "We support Marketing Agencies and Resellers. Contact us to find out how we can provide your clients with industry leading press.",
        button: "Book Now"
    }
};
