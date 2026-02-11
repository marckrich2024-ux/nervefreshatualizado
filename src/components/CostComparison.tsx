import React from 'react';
import { Leaf, Info } from 'lucide-react';

const CostComparison = () => {
    return (
        <section className="bg-slate-soft py-12 md:py-16 px-4">
            <div className="max-w-[960px] mx-auto">
                <h2 className="font-serif font-semibold text-3xl text-text-main mb-8 text-center md:text-left">
                    Cost in Context: How Nerve Fresh Compares
                </h2>

                {/* Image Placeholder */}
                <div className="w-full h-48 bg-white rounded-lg border border-slate-200 mb-8 overflow-hidden shadow-sm">
                    <img
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80"
                        alt="Comparing health costs flat lay"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm mb-2">
                    <div className="overflow-x-auto pb-2">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr className="bg-slate-deep text-white">
                                    <th className="p-4 font-sans font-semibold text-[13px] uppercase tracking-wider w-[25%]">Option</th>
                                    <th className="p-4 font-sans font-semibold text-[13px] uppercase tracking-wider w-[20%]">Monthly Cost</th>
                                    <th className="p-4 font-sans font-semibold text-[13px] uppercase tracking-wider w-[30%]">Evidence Level</th>
                                    <th className="p-4 font-sans font-semibold text-[13px] uppercase tracking-wider w-[25%]">Money-Back Guarantee</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr className="bg-teal-50 border-l-4 border-l-accent">
                                    <td className="p-4 font-serif font-bold text-text-main flex items-center gap-2">
                                        <Leaf className="w-4 h-4 text-accent" /> Nerve Fresh (1 bottle)
                                    </td>
                                    <td className="p-4 font-mono font-medium text-text-main">$69/mo</td>
                                    <td className="p-4 font-sans text-sm text-text-muted">Preliminary <span className="text-xs text-slate-400">(individual ingredients)</span></td>
                                    <td className="p-4 font-sans font-bold text-success">180 days</td>
                                </tr>
                                <tr className="bg-teal-50/50 border-l-4 border-l-accent">
                                    <td className="p-4 font-serif font-bold text-text-main flex items-center gap-2">
                                        <Leaf className="w-4 h-4 text-accent" /> Nerve Fresh (6 bottles)
                                    </td>
                                    <td className="p-4 font-mono font-medium text-text-main">~$39/mo</td>
                                    <td className="p-4 font-sans text-sm text-text-muted">Preliminary <span className="text-xs text-slate-400">(individual ingredients)</span></td>
                                    <td className="p-4 font-sans font-bold text-success">180 days</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="p-4 font-sans font-medium text-text-main">Nerve Renew</td>
                                    <td className="p-4 font-mono text-text-muted">~$49/mo</td>
                                    <td className="p-4 font-sans text-sm text-text-muted">Moderate <span className="text-xs text-slate-400">(B vitamins well-studied)</span></td>
                                    <td className="p-4 font-sans text-text-muted">90 days</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="p-4 font-sans font-medium text-text-main">Nervive (P&G)</td>
                                    <td className="p-4 font-mono text-text-muted">~$25/mo</td>
                                    <td className="p-4 font-sans text-sm text-text-muted">Moderate <span className="text-xs text-slate-400">(B vitamins)</span></td>
                                    <td className="p-4 font-sans text-text-muted">30 days</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="p-4 font-sans font-medium text-text-main">Gabapentin (Rx)</td>
                                    <td className="p-4 font-mono text-text-muted">$15-50/mo <span className="text-xs text-slate-400">(with insurance)</span></td>
                                    <td className="p-4 font-sans text-sm text-text-muted">Strong <span className="text-xs text-slate-400">(FDA-approved)</span></td>
                                    <td className="p-4 font-sans text-text-muted">N/A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Mobile Scroll Hint */}
                <div className="md:hidden flex items-center justify-center gap-2 text-slate-400 text-xs mb-8 italic">
                    <Info className="w-4 h-4" />
                    <span>Scroll horizontally to see full comparison</span>
                </div>

                {/* Insight Box */}
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                    <p className="font-sans text-[17px] text-text-muted leading-relaxed">
                        At $69/bottle, Nerve Fresh is on the higher end for OTC nerve supplements. However, at $2.30 per day, it costs less than a cup of coffee — a small price to pay compared to the cost of sleepless nights. Plus, the 180-day guarantee significantly reduces financial risk compared to alternatives. If you opt for the 6-bottle package, the per-month cost drops to approximately $39, which is more competitive.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CostComparison;
