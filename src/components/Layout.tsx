import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
    Menu,
    X,
    Activity,
    ExternalLink,
    ShieldCheck,
    Check,
    Info
} from 'lucide-react';
import ExitModal from './ExitModal';

// --- CONFIGURATION ---
const OFFER_URL = "https://secure.nervefresh.com/index-is?&shield=4738aggfr4rkiymitn38phqims";

// --- TRACKING HELPER ---
const trackEvent = (eventName: string, params: any = {}) => {
    if (window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...params
        });
    } else {
        // console.log("GTM Event:", eventName, params);
    }
};

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleLinkClick = (id: string) => {
        setIsOpen(false);
        trackEvent('anchor_click', { anchor_id: id });

        // If not on home page, navigation is handled by Link to="/#id"
        // If on home page, we might need to manually scroll if hash doesn't work automatically on re-render
        // But usually href="/#id" works fine.
    };

    return (
        <>
            {/* Advertorial Label */}
            <div className="bg-gray-100 text-[10px] text-gray-500 text-center py-1 uppercase tracking-widest font-semibold">
                Advertorial / Independent Review
            </div>

            <header className="sticky top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 h-16 md:h-20 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="font-heading font-black text-xl md:text-2xl text-blue-900 tracking-tight flex items-center">
                        <Activity className="w-6 h-6 mr-2 text-brand-green" />
                        Health Journal <span className="text-gray-400 font-light mx-1">|</span> <span className="text-brand-green">Review</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="/#benefits" onClick={() => handleLinkClick('benefits')} className="font-medium text-gray-600 hover:text-brand-green uppercase text-sm tracking-wide">Benefits</a>
                        <a href="/#story" onClick={() => handleLinkClick('story')} className="font-medium text-gray-600 hover:text-brand-green uppercase text-sm tracking-wide">My Story</a>
                        <a href="/#faq" onClick={() => handleLinkClick('faq')} className="font-medium text-gray-600 hover:text-brand-green uppercase text-sm tracking-wide">FAQ</a>
                    </nav>

                    <div className="hidden md:block">
                        <a
                            href={OFFER_URL}
                            id="btn-nav-check"
                            onClick={() => trackEvent('cta_click', { cta_id: 'btn-nav-check' })}
                            className="bg-brand-green hover:bg-brand-darkGreen text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors shadow-md uppercase flex items-center animate-pulse hover:animate-none"
                        >
                            Check Official Availability <ExternalLink className="w-4 h-4 ml-2 opacity-80" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu Panel */}
                {isOpen && (
                    <div className="md:hidden bg-white border-b border-gray-200 absolute w-full left-0 top-16 shadow-xl py-4 flex flex-col items-center space-y-4 animate-in slide-in-from-top-2">
                        <a href="/#benefits" onClick={() => handleLinkClick('benefits')} className="font-medium text-gray-800 py-2">Benefits</a>
                        <a href="/#story" onClick={() => handleLinkClick('story')} className="font-medium text-gray-800 py-2">My Story</a>
                        <a href="/#faq" onClick={() => handleLinkClick('faq')} className="font-medium text-gray-800 py-2">FAQ</a>
                        <a
                            href={OFFER_URL}
                            id="btn-header-mobile"
                            onClick={() => trackEvent('cta_click', { cta_id: 'btn-header-mobile' })}
                            className="bg-brand-green text-white font-bold py-3 px-8 rounded-lg w-[90%] text-center shadow-lg uppercase"
                        >
                            Check Official Availability
                        </a>
                    </div>
                )}
            </header>
        </>
    );
};

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
                <div className="col-span-1 md:col-span-2">
                    <div className="font-heading text-white font-bold text-xl mb-4">Health Journal Daily</div>
                    <p className="mb-4">
                        Our mission is to provide honest, evidence-based reviews to help you make better health decisions.
                    </p>
                    <p className="text-xs text-gray-600">
                        &copy; {new Date().getFullYear()} Health Journal Daily. All rights reserved.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Useful Links</h4>
                    <ul className="space-y-2">
                        <li><Link to="/blog" className="hover:text-white transition-colors">Latest Articles</Link></li>
                        <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
                        <li><Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Important Disclaimer</h4>
                    <p className="text-xs leading-relaxed mb-4">
                        <strong>Medical Disclaimer:</strong> This content is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician with any questions you may have regarding a medical condition.
                    </p>
                    <p className="text-xs leading-relaxed">
                        <strong>Affiliate Disclosure:</strong> We may earn a commission if you purchase through our link, at no extra cost to you. This helps support our research and editorial team.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Scientific References</h4>
                    <ul className="space-y-2 text-xs text-gray-500">
                        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3896593/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Current Biology (2014) - DHCB</a></li>
                        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7143924/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Phytother Res (2020) - Marshmallow Root</a></li>
                        <li><a href="https://pubmed.ncbi.nlm.nih.gov/29113066/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PubMed - Prickly Pear BBB</a></li>
                        <li><a href="https://pubmed.ncbi.nlm.nih.gov/15814264/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Phytotherapy Research - Antioxidants</a></li>
                        <li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4049052/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">NCBI - Hydrotherapy Clinical Basis</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const StickerCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] md:hidden animation-slide-up">
            <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Official Review</span>
                    <span className="text-gray-900 font-bold text-sm">Check Stock Status</span>
                </div>
                <a
                    href={OFFER_URL}
                    id="btn-sticky-mobile"
                    onClick={() => trackEvent('cta_click', { cta_id: 'btn-sticky-mobile' })}
                    className="flex-1 bg-brand-green text-white font-bold py-3 rounded-lg text-center uppercase text-sm shadow-md"
                >
                    View Official Details
                </a>
            </div>
        </div>
    );
}

const Layout = () => {
    return (
        <div className="min-h-screen font-sans text-gray-800 bg-white selection:bg-green-100 selection:text-green-900 flex flex-col">
            <Header />
            <main className="flex-grow animate-fade-in">
                <Outlet />
            </main>
            <Footer />
            <StickerCTA />
            <ExitModal />
        </div>
    );
};

export default Layout;
