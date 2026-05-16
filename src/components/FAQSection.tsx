import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const FAQSection = () => {
    const faqs = [
        {
            question: "Is Nerve Fresh a scam?",
            answer: "No, we found no evidence of a financial scam. The product is shipped as promised, the checkout is secure, and the 180-day refund policy is generally honored. However, like many supplements, its marketing claims may be stronger than the publicly available clinical evidence."
        },
        {
            question: "Does Nerve Fresh really work?",
            answer: "Public discussions and ingredient research suggest it provides mild to moderate support for nerve health over time. It works primarily through botanical extracts that target oxidative stress, but it is not a rapid fix."
        },
        {
            question: "What are the side effects?",
            answer: "The most common side effect reported is drowsiness due to calming ingredients like Passionflower and California Poppy. It is highly recommended to take this supplement in the evening."
        },
        {
            question: "Is Nerve Fresh safe with medications?",
            answer: "If you take prescription sedatives, sleep aids, or blood pressure medication, you must consult your doctor before use. The herbal ingredients can amplify the effects of these medications."
        },
        {
            question: "Where should I buy Nerve Fresh?",
            answer: "You should only purchase Nerve Fresh through the official website. Buying from Amazon, Walmart, or third-party sellers voids the 180-day money-back guarantee and increases the risk of receiving a counterfeit product."
        },
        {
            question: "Is there a refund policy?",
            answer: "Yes. The company offers a 180-day money-back guarantee. According to public feedback, this policy is legitimate and they accept returns of empty bottles."
        },
        {
            question: "Who should avoid Nerve Fresh?",
            answer: "Anyone with nerve pain caused by mechanical compression (like a pinched nerve or herniated disc) should avoid this, as a supplement cannot fix a physical impingement. Pregnant women, nursing mothers, and children should also avoid use."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="bg-white py-20 px-4 scroll-mt-24">
            <div className="max-w-[780px] mx-auto">
                <div className="flex items-center gap-3 justify-center mb-8">
                    <HelpCircle className="w-8 h-8 text-accent" />
                    <h2 className="font-serif font-semibold text-3xl text-text-main text-center">
                        Addressing Your Doubts
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => {
                                    const isOpening = openIndex !== index;
                                    setOpenIndex(isOpening ? index : null);
                                    if (isOpening) {
                                        trackEvent('faq_open', { question: faq.question });
                                    }
                                }}
                                className="w-full flex items-center justify-between p-5 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                            >
                                <span className="font-sans font-semibold text-[16px] text-text-main pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="p-5 bg-white border-t border-slate-200">
                                    <p className="font-sans text-[15px] text-text-muted leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
