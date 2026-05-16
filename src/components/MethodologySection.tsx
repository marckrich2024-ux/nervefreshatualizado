import React from 'react';
import { BookOpen, MessageSquare, Shield } from 'lucide-react';

const MethodologySection = () => {
    return (
        <section className="bg-slate-soft py-16 border-y border-slate-200">
            <div className="max-w-[1140px] mx-auto px-4">
                <h2 className="font-serif font-semibold text-3xl text-text-main mb-12 text-center md:text-left">
                    Our Evidence Review Framework
                </h2>

                {/* Process Visualization Placeholder */}
                {/* Process Visualization Removed as per user feedback (redundant) */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                            <BookOpen className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="font-sans font-semibold text-lg text-text-main">
                            Ingredient Literature Review
                        </h3>
                        <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                            We check the individual botanical ingredients against public research databases (like PubMed) to see if the physiological claims align with published science.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                            <MessageSquare className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="font-sans font-semibold text-lg text-text-main">
                            Public User Discussion Review
                        </h3>
                        <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                            We aggregate sentiment from independent forums, social media, and third-party review platforms to look for consistent patterns in success rates and complaints.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                            <Shield className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="font-sans font-semibold text-lg text-text-main">
                            Safety & Compliance Check
                        </h3>
                        <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                            We evaluate the product's safety profile based on known herb-drug interactions, side effects, and manufacturing facility claims (FDA registration/GMP).
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm">
                            <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <h3 className="font-sans font-semibold text-lg text-text-main">
                            Refund & Ordering Policy Review
                        </h3>
                        <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                            We verify the checkout security, subscription traps, and whether the advertised money-back guarantee is actually honored by the retailer.
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
