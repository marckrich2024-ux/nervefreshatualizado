import React from 'react';
import { ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';

const ScamOrLegit = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-[960px] mx-auto">
                <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                        <ShieldAlert className="w-8 h-8 text-yellow-700" />
                    </div>
                    <h2 className="font-serif font-bold text-3xl md:text-4xl text-text-main">
                        Is Nerve Fresh a Scam or Legit?
                    </h2>
                </div>

                <div className="prose prose-lg prose-slate text-text-main leading-relaxed mb-10">
                    <p>
                        When researching neuropathy supplements, skepticism is your best defense. We analyzed Nerve Fresh to determine if it operates as a financial scam or a legitimate business. 
                    </p>
                    <p>
                        Based on our editorial review, <strong>we found no evidence of a classic financial scam.</strong> The company provides a real product, uses a secure checkout process, and honors their 180-day refund policy. However, as with many supplements, some of the strongest marketing claims outpace the publicly available clinical evidence for the finished formula.
                    </p>
                    <p>
                        If you decide to try Nerve Fresh, we strongly advise purchasing <strong>only through the official website</strong> to ensure you are covered by the money-back guarantee and to avoid counterfeit products sold on third-party marketplaces.
                    </p>
                </div>

                {/* Verify Block */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Could Verify */}
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                        <h3 className="font-bold text-green-800 text-xl mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6" /> What We Could Verify
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-[15px] text-green-900 leading-snug">Public research exists for individual ingredients (like Corydalis and Prickly Pear) supporting nerve health.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-[15px] text-green-900 leading-snug">The product uses a secure, industry-standard checkout system (ClickBank).</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-[15px] text-green-900 leading-snug">The 180-day refund policy is actively advertised and honored by the retailer.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-[15px] text-green-900 leading-snug">Real public discussions about the formula exist on forums and review platforms.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Could Not Verify */}
                    <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                        <h3 className="font-bold text-red-800 text-xl mb-4 flex items-center gap-2">
                            <XCircle className="w-6 h-6" /> What We Could NOT Verify
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-[15px] text-red-900 leading-snug">The existence of over 1,200+ verified 5-star public reviews for this specific brand.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-[15px] text-red-900 leading-snug">A finished-formula clinical trial (studies exist for ingredients, not the combined pill).</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-[15px] text-red-900 leading-snug">Strong marketing claims implying rapid "nerve repair" or cure.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-[15px] text-red-900 leading-snug">Any internal 90-day human testing conducted by our editorial team.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScamOrLegit;
