import { trackEvent } from '../utils/analytics';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const OFFER_URL = "https://secure.nervefresh.com/index-is?&shield=4738aggfr4rkiymitn38phqims";

const FinalVerdict = () => {
    return (
        <section className="bg-white py-20 px-4 border-t border-slate-200">
            <div className="max-w-[780px] mx-auto text-center">
                <span className="font-sans font-bold text-[13px] text-accent uppercase tracking-widest mb-4 block">
                    FINAL VERDICT
                </span>
                <h2 className="font-serif font-bold text-3xl md:text-4xl text-text-main mb-6">
                    A Safe Experiment, But Keep Expectations Realistic
                </h2>
                <p className="font-sans text-[17px] text-text-muted leading-relaxed mb-8">
                    Nerve Fresh isn't a miraculous cure for neuropathy. The science behind its ingredients suggests it may provide mild support for nerve health and oxidative stress, but strong clinical evidence for the specific formula is missing. However, given the 180-day money-back guarantee and lack of severe side effects, it is a low-risk option to try if you are seeking a natural complement to your current treatment plan.
                </p>

                <div className="inline-block bg-slate-50 border border-slate-200 rounded-lg p-6 mb-10 text-left w-full max-w-[480px]">
                    <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-4">
                        <span className="font-sans font-semibold text-text-main">Ingredient Safety</span>
                        <span className="font-mono font-bold text-success">Pass</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-4">
                        <span className="font-sans font-semibold text-text-main">Scientific Backing</span>
                        <span className="font-mono font-bold text-orange-500">Preliminary</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-sans font-semibold text-text-main">Consumer Protection</span>
                        <span className="font-mono font-bold text-success">Excellent (180 Days)</span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <p className="font-sans font-medium text-[17px] text-text-main mb-2 max-w-[500px]">
                        "We know you've been disappointed before. That's exactly why the 180-day guarantee matters — it's not your money on the line, it's theirs."
                    </p>
                    <a
                        href={OFFER_URL}
                        id="btn-final-check"
                        onClick={() => trackEvent('cta_click', { cta_id: 'btn-final-check' })}
                        className="w-full sm:w-auto bg-alert hover:bg-alert-hover text-white font-sans font-bold text-[18px] py-5 px-10 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                        Check Current Pricing & Availability <ArrowRight className="w-5 h-5" />
                    </a>
                    <span className="flex items-center text-[14px] text-slate-400">
                        <ShieldCheck className="w-4 h-4 mr-1" /> Secure Manufacturer Checkout
                    </span>
                </div>

                {/* Disclaimer */}
                <div className="mt-16 pt-8 border-t border-slate-100 text-left">
                    <p className="font-sans text-[12px] text-slate-400 leading-relaxed italic">
                        <strong>Disclaimer:</strong> The content on this page is for informational purposes only and does not constitute medical advice. The products discussed are not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. We are an independent review publication supported by affiliate commissions, but our editorial standards remain objective.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FinalVerdict;
