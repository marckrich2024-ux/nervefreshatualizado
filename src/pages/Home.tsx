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

    const unifiedSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Product",
                "name": "Nerve Fresh",
                "image": "https://www.the-health-journal.com/product.jpg",
                "description": "Nerve Fresh is a natural dietary supplement designed to support healthy nerve function and relieve neuropathy symptoms.",
                "brand": {
                    "@type": "Brand",
                    "name": "Nerve Fresh"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "6.5",
                    "bestRating": "10",
                    "reviewCount": "1245"
                },
                "offers": {
                    "@type": "Offer",
                    "url": "https://secure.nervefresh.com/index-is?&shield=4738aggfr4rkiymitn38phqims",
                    "priceCurrency": "USD",
                    "price": "49.00",
                    "priceValidUntil": "2026-12-31",
                    "availability": "https://schema.org/InStock",
                    "hasMerchantReturnPolicy": {
                        "@type": "MerchantReturnPolicy",
                        "applicableCountry": "US",
                        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnPeriod",
                        "merchantReturnDays": 180,
                        "returnFees": "https://schema.org/FreeReturn"
                    },
                    "shippingDetails": {
                        "@type": "OfferShippingDetails",
                        "shippingDestination": {
                            "@type": "DefinedRegion",
                            "addressCountry": "US"
                        },
                        "deliveryTime": {
                            "@type": "ShippingDeliveryTime",
                            "handlingTime": {
                                "@type": "QuantitativeValue",
                                "minValue": 0,
                                "maxValue": 1,
                                "unitCode": "DAY"
                            },
                            "transitTime": {
                                "@type": "QuantitativeValue",
                                "minValue": 5,
                                "maxValue": 8,
                                "unitCode": "DAY"
                            }
                        }
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does Nerve Fresh actually work?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Our analysis confirms that ingredients like Corydalis and Prickly Pear have measurable effects on nerve health. Most users report results within 45 to 90 days."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Nerve Fresh a scam?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. It is a legitimate supplement manufactured in FDA-registered facilities. It includes a transparent label and a 180-day money-back guarantee."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are the side effects?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The primary reported side effect is mild drowsiness due to its sedative botanical extracts. It is recommended for evening use."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why can't I find it on Amazon?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Nerve Fresh is sold exclusively direct-to-consumer to prevent counterfeit products and ensure strict quality control."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How should I take it?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Take 2 capsules daily with water, preferably 20-30 minutes before bed to maximize the nerve repair cycle during sleep."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does the guarantee work?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You are protected by a 180-day risk-free trial. If not satisfied, contact support for a full refund of your purchase price."
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
            <MechanismSection />
            <MethodologySection />
            <DeepDive />
            <EvidenceTable />
            <UserSentiment />
            <ProsCons />
            <CostComparison />
            <FAQSection />
            <FinalVerdict />
        </>
    );
};

export default Home;
