import React, { useEffect } from 'react';

// --- CONFIGURATION ---
const OFFER_URL = "https://secure.nervefresh.com/index-is?&shield=4738aggfr4rkiymitn38phqims";

import { trackEvent } from '../utils/analytics';

import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import QuickVerdict from '../components/QuickVerdict';
import ScamOrLegit from '../components/ScamOrLegit';
import MechanismSection from '../components/MechanismSection';
import MethodologySection from '../components/MethodologySection';
import DeepDive from '../components/DeepDive';
import EvidenceTable from '../components/EvidenceTable';
import UserSentiment from '../components/UserSentiment';
import EditorialGuides from '../components/EditorialGuides';
import ProsCons from '../components/ProsCons';
import CostComparison from '../components/CostComparison';
import FAQSection from '../components/FAQSection';
import FinalVerdict from '../components/FinalVerdict';

const Home = () => {
    useEffect(() => {
        trackEvent('page_view_lp', { page_name: 'nerve_fresh_review', lang: 'en-US', type: 'editorial' });
    }, []);

    const unifiedSchema = {
        "@context": "https://schema.org",
        "@graph": [

            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Nerve Fresh a scam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, we found no evidence of a financial scam. The official ordering page presents a purchasable product, the checkout is secure, and a 180-day refund policy is advertised."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Nerve Fresh really work?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Public discussions and ingredient research suggest it provides mild to moderate support for nerve health over time. It is not a rapid fix."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the side effects?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The most common side effect reported is drowsiness due to calming ingredients like Passionflower and California Poppy."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Nerve Fresh safe with medications?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "If you take prescription sedatives, sleep aids, or blood pressure medication, you must consult your doctor before use."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Where should I buy Nerve Fresh?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You should only purchase Nerve Fresh through the official website to ensure the money-back guarantee."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is there a refund policy?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. The company offers a 180-day money-back guarantee, even on empty bottles."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Who should avoid Nerve Fresh?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Anyone with nerve pain caused by mechanical compression (like a pinched nerve), pregnant women, and nursing mothers."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <SEOHead schema={unifiedSchema} />
            <HeroSection />
            <TrustBar />
            <QuickVerdict />
            <ScamOrLegit />
            <UserSentiment />
            <EditorialGuides />
            <MethodologySection />
            <MechanismSection />
            <DeepDive />
            <ProsCons />
            <CostComparison />
            <FAQSection />
            <FinalVerdict />
        </>
    );
};

export default Home;
