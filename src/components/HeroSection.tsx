import React from 'react';
import { trackEvent } from '../utils/analytics';
import { ArrowRight } from 'lucide-react';

const OFFER_URL = "https://secure.nervefresh.com/index-is?&shield=4738aggfr4rkiymitn38phqims";

const HeroSection = () => {
    return (
        <section className="bg-base pt-20 pb-16 md:pt-32 md:pb-24">
            <div className="max-w-[1140px] mx-auto px-4 grid md:grid-cols-5 gap-12 items-center">
                {/* Left Column (60%) */}
                <div className="md:col-span-3 order-2 md:order-1">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 border border-slate-200 bg-white rounded-full pr-4 pl-1 py-1 mb-4 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                            <img
                                src="/assets/editorial-avatar.webp"
                                alt="Health Journal Editorial Team"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=HJ&background=0D9488&color=fff';
                                }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-sans font-bold text-[11px] text-text-main leading-tight">Reviewed by Health Journal Editorial Team</span>
                            <span className="font-sans text-[10px] text-slate-500 leading-tight">Editorial Review</span>
                        </div>
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Micro-text above headline */}
                    <p className="font-sans italic text-slate-400 text-[11px] md:text-xs mb-3">
                        Updated May 2026 · Editorial review based on public ingredient research, manufacturer claims, and public user discussions · This page contains affiliate links
                    </p>

                    {/* Headline */}
                    <h1 className="font-serif font-bold text-3xl md:text-[32px] lg:text-[42px] text-text-main leading-tight mb-4">
                        Nerve Fresh Review: What the Ingredient Evidence Suggests, What Public Feedback Looks Like, and What We Could Not Verify
                    </h1>

                    {/* Micro-copy (Empathy) */}
                    <p className="font-sans italic text-[17px] md:text-lg text-slate-500 mb-6 bg-slate-50 p-4 rounded-lg border-l-4 border-accent">
                        "If neuropathy pain has you searching for answers at 3 AM — you're not alone, and this review was written for you."
                    </p>

                    {/* Subtitle */}
                    <p className="font-sans text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                        If you’re dealing with burning feet, tingling, numbness, or sleep-disrupting nerve discomfort, this review is designed to help you evaluate Nerve Fresh more carefully — including ingredients, safety notes, refund terms, and where the strongest claims may overreach the evidence.
                    </p>

                    {/* Verdict Bar */}
                    <div className="flex flex-row items-center gap-6 mt-8">
                        {/* Score Circle */}
                        <div className="w-16 h-16 rounded-full border-[3px] border-accent flex items-center justify-center flex-shrink-0">
                            <span className="font-mono font-bold text-[22px] text-accent">6.5</span>
                        </div>

                        {/* Score Label */}
                        <div className="flex flex-col">
                            <span className="font-sans font-semibold text-base text-text-main">Mixed Verdict</span>
                            <span className="font-sans text-sm text-slate-400">
                                Based on ingredient research, user reports, and compliance review
                            </span>
                        </div>
                    </div>

                    {/* Primary CTA */}
                    <div className="mt-8">
                        <a
                            href={OFFER_URL}
                            id="btn-hero-check"
                            target="_blank"
                            rel="sponsored nofollow noopener noreferrer"
                            onClick={() => { trackEvent('cta_click_hero'); trackEvent('affiliate_click'); }}
                            className="inline-flex items-center justify-center bg-brand-green hover:bg-brand-darkGreen text-white font-bold py-4 px-6 md:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all uppercase tracking-wide group w-full sm:w-auto text-sm md:text-base text-center"
                        >
                            See Current Price, Refund Policy & Official Ordering
                            <ArrowRight className="w-5 h-5 ml-2 opacity-80 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="font-sans text-[11px] text-slate-400 mt-3 max-w-[400px]">
                            Affiliate disclosure: If you buy through this page, we may earn a commission at no extra cost to you. This does not change our editorial criteria.
                        </p>
                    </div>
                </div>

                {/* Right Column (40%) */}
                <div className="md:col-span-2 order-1 md:order-2">
                    <div className="relative rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] aspect-video md:aspect-[4/3]">
                        {/* Placeholder for generated image */}
                        <img
                            src="/hero-optimized.webp"
                            alt="Health journalist workspace investigating Nerve Fresh"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none'; // Hide if broken, fallback to bg color or just hide
                                // Better fallback:
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'; // Generic logic/research image
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
