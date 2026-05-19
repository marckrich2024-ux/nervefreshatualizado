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

    return (
        <>
            <SEOHead />
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
