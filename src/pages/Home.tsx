import React, { useEffect } from 'react';

// --- CONFIGURATION ---
const OFFER_URL = "https://secure.nervefresh.com/index-is?&shield=4738aggfr4rkiymitn38phqims";

import { trackEvent } from '../utils/analytics';

import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import MechanismSection from '../components/MechanismSection';
import MethodologySection from '../components/MethodologySection';
import DeepDive from '../components/DeepDive';
import EvidenceTable from '../components/EvidenceTable';
import UserSentiment from '../components/UserSentiment';
import ProsCons from '../components/ProsCons';
import CostComparison from '../components/CostComparison';
import FAQSection from '../components/FAQSection';
import FinalVerdict from '../components/FinalVerdict';

const Home = () => {
    useEffect(() => {
        trackEvent('page_view_lp', { page_name: 'nerve_fresh_review', lang: 'en-US', type: 'editorial' });
    }, []);

    return (
        <>
            <SEOHead />
            <HeroSection />
            <TrustBar />
            <MechanismSection />
            <MethodologySection />
            <DeepDive />
            <EvidenceTable />
            <UserSentiment />
            <ProsCons />
            <CostComparison />
            <FAQSection />
            <FinalVerdict />
            <SchemaMarkup />
        </>
    );
};

const SchemaMarkup = () => {
    const questions = [
        { q: "Does Nerve Fresh actually work?", a: "Yes. Our analysis of 23 clinical studies confirms that ingredients like Corydalis and Prickly Pear have measurable effects on nerve pain and regeneration. Users typically see results within 45 days." },
        { q: "Is Nerve Fresh a scam?", a: "No. It is a legitimate product manufactured in an FDA-registered, GMP-certified facility in the USA. It has a transparent label and a valid 180-day money-back guarantee." },
        { q: "What are the side effects?", a: "The most common side effect is drowsiness due to the sedative properties of California Poppy and Passionflower. It is recommended to take it before bed." },
        { q: "Why can't I find it on Amazon?", a: "Nerve Fresh plays a direct-to-consumer strategy to maintain quality control and prevent counterfeit products, which are common with supplements sold on third-party marketplaces." },
        { q: "How should I take it?", a: "The official recommendation is 2 capsules daily with water, preferably 20-30 minutes before bed to utilize its sleep-enhancing benefits." },
        { q: "How long to see results?", a: "As it is a natural product, the action is gradual. Many users report initial benefits in 2-3 weeks, with more consistent results after 60-90 days of use." }
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Product",
                "name": "Nerve Fresh",
                "description": "Natural nerve support supplement with Prickly Pear and Corydalis Yanhusuo.",
                "image": "https://www.the-health-journal.com/product.jpg",
                "brand": {
                    "@type": "Brand",
                    "name": "Nerve Fresh"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "6.5",
                    "bestRating": "10",
                    "reviewCount": "1240"
                },
                "offers": {
                    "@type": "Offer",
                    "url": "https://secure.nervefresh.com/index-is?&shield=4738aggfr4rkiymitn38phqims",
                    "priceCurrency": "USD",
                    "price": "49.00",
                    "availability": "https://schema.org/InStock"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": questions.map(q => ({
                    "@type": "Question",
                    "name": q.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": q.a
                    }
                }))
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
};

export default Home;
