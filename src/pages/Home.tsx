import React, { useEffect } from 'react';

// --- CONFIGURATION ---
const OFFER_URL = "https://secure.nervefresh.com/index-is?&shield=4738aggfr4rkiymitn38phqims";

import { trackEvent } from '../utils/analytics';

import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import MechanismSection from '../components/MechanismSection';
import MethodologySection from '../components/MethodologySection';
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
        { q: "What is Nerve Fresh exactly?", a: "It is an advanced nutritional supplement formulated to support peripheral nerve health specifically through a precise combination of vitamins, minerals, and botanical extracts." },
        { q: "How should I take it?", a: "The official recommendation is 2 capsules daily with water, preferably 20-30 minutes before a meal." },
        { q: "How long until I receive my order?", a: "Orders are typically processed within 24 hours. You can expect delivery within 5 to 8 business days for US addresses." },
        { q: "Is the formula safe?", a: "Yes. Nerve Fresh is free from gluten, GMOs, and toxins. It is manufactured in an FDA-registered facility following strict GMP guidelines." },
        { q: "How long to see results?", a: "As it is a natural product, the action is gradual. Many users report initial benefits in 2-3 weeks, with more consistent results after 60-90 days of use." },
        { q: "How does the guarantee work?", a: "You have a full 180 days to try it risk-free. If you are not satisfied for any reason, simply contact customer support for a full refund of your purchase price." },
        { q: "Do I need a prescription?", a: "No. Nerve Fresh is classified as a dietary supplement, not a medication. However, if you have pre-existing health conditions, consult your doctor." }
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
                    "ratingValue": "4.8",
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
