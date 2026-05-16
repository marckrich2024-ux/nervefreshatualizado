import React from 'react';
import { CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

const QuickVerdict = () => {
    return (
        <section className="bg-slate-50 py-12 px-4 border-b border-slate-200">
            <div className="max-w-[800px] mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                    <div className="p-2 bg-brand-green/10 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-brand-green" />
                    </div>
                    <h2 className="font-serif font-bold text-2xl text-text-main">
                        Quick Verdict: Is It Right For You?
                    </h2>
                </div>

                <div className="space-y-4 font-sans text-[15px] text-text-main">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="font-bold text-slate-700">Is Nerve Fresh legit?</div>
                        <div className="md:col-span-2">Yes. We found no evidence of a classic financial scam. It has a real checkout, active customer service, and a published 180-day refund policy.</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="font-bold text-slate-700">Does it work?</div>
                        <div className="md:col-span-2">Evidence suggests mild to moderate support for nerve health based on the botanical ingredients, but it is not an overnight cure or a replacement for medical treatment.</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="font-bold text-slate-700">Main concern</div>
                        <div className="md:col-span-2">Potential drowsiness. The formula contains calming herbs which may cause sleepiness, especially if combined with other medications.</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="font-bold text-slate-700">Best for</div>
                        <div className="md:col-span-2">Adults dealing with nighttime nerve discomfort, burning feet, or tingling that disrupts sleep.</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="font-bold text-slate-700">Not ideal for</div>
                        <div className="md:col-span-2">Mechanical compression (like pinched nerves or herniated discs) or those seeking instant pain relief.</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="font-bold text-slate-700">Price range</div>
                        <div className="md:col-span-2">$49 to $69 per bottle, depending on the package you choose.</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="font-bold text-slate-700">Refund policy</div>
                        <div className="md:col-span-2">180 days (Verified. Empty bottles are accepted).</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 border-t border-slate-100 pt-4 mt-2">
                        <div className="font-bold text-slate-700">Where to buy</div>
                        <div className="md:col-span-2 font-semibold text-brand-darkGreen">Official Website Only. Avoid Amazon or Walmart to prevent counterfeits.</div>
                    </div>
                </div>

                <div className="mt-8 bg-slate-100 p-4 rounded-lg flex items-center justify-between">
                    <span className="font-bold text-slate-700">Our Editorial Verdict:</span>
                    <span className="font-mono font-bold text-xl text-accent bg-white px-4 py-1 rounded border border-slate-200">6.5 / 10</span>
                </div>
            </div>
        </section>
    );
};

export default QuickVerdict;
