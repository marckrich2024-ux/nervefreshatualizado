import React from 'react';
import { trackEvent } from '../utils/analytics';
import { CheckCircle, XCircle, ArrowRight, ExternalLink } from 'lucide-react';

const OFFER_URL = "https://secure.nervefresh.com/index-is?&shield=4738aggfr4rkiymitn38phqims";

const ProsCons = () => {
    return (
        <section id="pros-cons" className="bg-base py-20 px-4 scroll-mt-24">
            <div className="max-w-[1140px] mx-auto">
                <h2 className="font-serif font-semibold text-3xl text-text-main mb-12 text-center">
                    The Balanced Verdict: Pros & Cons
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Pros */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="w-6 h-6 text-success" />
                            <h3 className="font-sans font-semibold text-lg text-green-800">What We Liked</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "180-day money-back guarantee — one of the longest in the industry",
                                "All five ingredients have at least some published research behind them",
                                "Manufactured in FDA-registered, GMP-certified facility",
                                "No reported serious side effects in user discussions we found",
                                "Transparent ingredient list (though dosages are proprietary)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                                    <span className="font-sans text-[15px] text-text-main leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cons */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="w-6 h-6 text-alert" />
                            <h3 className="font-sans font-semibold text-lg text-red-800">What Concerned Us</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "At $69/bottle, it's pricier than most nerve supplements",
                                "No published clinical trial on the specific Nerve Fresh formula (only ingredients)",
                                "Results typically take 4-6 weeks — not overnight",
                                "Some users reported no improvement after 60 days",
                                "Only available online — no pharmacy pickup"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-alert flex-shrink-0 mt-0.5" />
                                    <span className="font-sans text-[17px] text-text-main leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* First CTA */}
                <div className="text-center max-w-[640px] mx-auto">
                    <p className="font-sans text-[16px] text-text-muted mb-6">
                        Despite our concerns, the 180-day guarantee means you can try it risk-free. If you decide to proceed:
                    </p>

                    <a
                        href={OFFER_URL}
                        id="btn-pros-check"
                        onClick={() => trackEvent('cta_click', { cta_id: 'btn-pros-check' })}
                        className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-sans font-semibold text-[16px] py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wide group"
                    >
                        Check Current Availability & Pricing
                        <ArrowRight className="w-5 h-5 ml-2 opacity-80 group-hover:translate-x-1 transition-transform" />
                    </a>


                    <p className="font-sans text-[12px] text-text-muted mt-4">
                        We may earn a commission • 180-day money-back guarantee applies
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProsCons;
