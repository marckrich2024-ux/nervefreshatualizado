import React from 'react';
import { BookOpen, MessageSquare, Shield } from 'lucide-react';

const MethodologySection = () => {
    return (
        <section className="bg-slate-soft py-16 border-y border-slate-200">
            <div className="max-w-[1140px] mx-auto px-4">
                <h2 className="font-serif font-semibold text-3xl text-text-main mb-12 text-center md:text-left">
                    Our Research Methodology
                </h2>

                {/* Process Visualization Placeholder */}
                {/* Process Visualization Removed as per user feedback (redundant) */}

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Literature Review */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                            <BookOpen className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="font-sans font-semibold text-lg text-text-main">
                            Ingredient Literature Review
                        </h3>
                        <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                            We cross-referenced each ingredient against PubMed, NIH, and EMA databases. We looked specifically for human clinical trials, not just animal studies or in-vitro research.
                        </p>
                    </div>

                    {/* User Feedback */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                            <MessageSquare className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="font-sans font-semibold text-lg text-text-main">
                            Real User Feedback Analysis
                        </h3>
                        <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                            We analyzed discussions on Reddit (r/Peripheralneuropathy), Trustpilot, and medical forums like Mayo Clinic Connect to find unfiltered user experiences.
                        </p>
                    </div>

                    {/* Compliance */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                            <Shield className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="font-sans font-semibold text-lg text-text-main">
                            Compliance & Safety Review
                        </h3>
                        <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                            We evaluated the product's marketing claims against FTC guidelines and FDA supplement regulations to identify potentially misleading promises or safety risks.
                        </p>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-12 bg-white border border-slate-200 rounded-lg p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className="font-sans text-[14px] text-slate-600 leading-relaxed">
                        This review was conducted independently. We may earn a commission if you purchase through our links, but this does not influence our analysis or ratings. Our methodology is the same regardless of affiliate relationships.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MethodologySection;
