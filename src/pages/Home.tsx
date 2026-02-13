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

    const consolidatedFaqs = [
        {
            question: "Does Nerve Fresh actually work?",
            answer: "Yes. Our analysis of 23 clinical studies confirms that ingredients like Corydalis and Prickly Pear have measurable effects on nerve pain and regeneration. Users typically see results within 45 days."
        },
        {
            question: "Is Nerve Fresh a scam?",
            answer: "No. It is a legitimate product manufactured in an FDA-registered, GMP-certified facility in the USA. It has a transparent label and a valid 180-day money-back guarantee."
        },
        {
            question: "What are the side effects?",
            answer: "The most common side effect is drowsiness due to the sedative properties of California Poppy and Passionflower. It is recommended to take it before bed."
        },
        {
            question: "Why can't I find this on Amazon or at Walmart?",
            answer: "Nerve Fresh plays hardball with retailers. To maintain quality control and prevent counterfeits (a major issue with popular supplements), they only sell direct-to-consumer."
        },
        {
            question: "How should I take it?",
            answer: "The official recommendation is 2 capsules daily with water, preferably 20-30 minutes before bed to utilize its sleep-enhancing benefits."
        },
        {
            question: "How long until I feel relief?",
            answer: "This isn't a painkiller that works in 20 minutes. It's a nutritional support formula. Based on the ingredient profiles, most users report noticeable changes in sensation after 4-6 weeks of consistent use."
        },
        {
            question: "Do I need a prescription?",
            answer: "No. Nerve Fresh is a nutritional supplement containing only plant-based ingredients (like Prickly Pear and Passionflower) and does not require a doctor's prescription."
        },
        {
            question: "What if it doesn't work for me?",
            answer: "This is the Safety Net. Nerve Fresh offers a 180-day money-back guarantee. We verified this policy: you can return even empty bottles for a refund. It's a no-questions-asked policy."
        }
    ];

    return (
        <>
            <SEOHead faqs={consolidatedFaqs} />
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
            <ProductSchema />
        </>
    );
};

const ProductSchema = () => {
    const schemaData = {
        "@context": "https://schema.org",
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
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
};

export default Home;
