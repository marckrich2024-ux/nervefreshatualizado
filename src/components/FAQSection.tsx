import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQSection = () => {
    const faqs = [
        {
            question: "Why can't I find this on Amazon or at Walmart?",
            answer: "Nerve Fresh plays hardball with retailers. To maintain quality control and prevent counterfeits (a major issue with popular supplements), they only sell direct-to-consumer. This cuts out the middleman but means you can't just pick it up at the pharmacy."
        },
        {
            question: "Does this interfere with Gabapentin or Lyrica?",
            answer: "We analyzed the interaction potential. Generally, herbal supplements like Passionflower and California Poppy have a mild sedative effect, which could theoretically amplify the drowsiness caused by Gabapentin. You should absolutely consult your doctor before combining them. Do not stop your prescription medication to take this instead."
        },
        {
            question: "How long until I feel relief?",
            answer: "This isn't a painkiller that works in 20 minutes. It's a nutritional support formula. Based on the ingredient profiles, most users in similar studies report noticeable changes in sensation after 4-6 weeks of consistent use. If you expect overnight miracles, you will be disappointed."
        },
        {
            question: "What if it doesn't work for me?",
            answer: "This is the Safety Net. Nerve Fresh offers a 180-day money-back guarantee. We verified this policy: you can return even empty bottles for a refund. It's a no-questions-asked policy, which significantly lowers the risk of trying it."
        },
        {
            question: "Is this a subscription trap?",
            answer: "No. The checkout page defaults to a one-time purchase. There is no hidden auto-ship unless you explicitly check a box requesting a subscription (if available). We always recommend double-checking your cart before confirming."
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
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
