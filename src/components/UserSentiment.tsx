import React from 'react';
import { Star, MessageCircle, ShoppingBag, Globe } from 'lucide-react';

const UserSentiment = () => {
    const reviews = [
        {
            name: "Common Positive Sentiment",
            role: "Focus: Gradual Relief",
            text: "Many public comments reflect a slow build-up of effects. Users who stick with it for 4-8 weeks frequently note a reduction in the intensity of nighttime burning or tingling. Some mention improved sleep quality, though they clarify it is not a complete cure.",
            source: "Aggregated from Neuropathy Support Groups",
            icon: <ShoppingBag className="w-4 h-4 text-green-600" />,
            borderColor: "border-green-200",
            bg: "bg-white"
        },
        {
            name: "Common Negative Sentiment",
            role: "Focus: Lack of Results",
            text: "A noticeable portion of users report taking the supplement as directed for 30 to 60 days with absolutely zero change in symptoms. In these discussions, users often note that a 180-day refund policy is advertised, though individual refund experiences vary.",
            source: "Aggregated from Public Forums",
            icon: <MessageCircle className="w-4 h-4 text-orange-600" />,
            borderColor: "border-orange-200",
            bg: "bg-orange-50/30"
        },
        {
            name: "Common Mixed Sentiment",
            role: "Focus: Mild Improvement vs Cost",
            text: "Several users describe the results as 'modest' rather than life-changing. A common theme is taking the edge off nighttime discomfort. However, a recurring complaint is the price, with many questioning if the partial relief justifies the ongoing monthly cost.",
            source: "Aggregated from Review Discussions",
            icon: <Star className="w-4 h-4 text-blue-600" />,
            borderColor: "border-slate-200",
            bg: "bg-white"
        }
    ];

    return (
        <section className="bg-slate-soft py-16 px-4">
            <div className="max-w-[1140px] mx-auto">
                <h2 className="font-serif font-semibold text-2xl md:text-3xl text-text-main mb-2">
                    What Real Users Are Saying Online
                </h2>
                <p className="font-sans text-[17px] text-text-muted leading-relaxed mb-8 max-w-3xl">
                    Instead of displaying cherry-picked testimonials, we analyzed publicly available feedback on independent forums and social platforms to summarize the most common user experiences.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {reviews.map((review, index) => (
                        <div key={index} className={`border ${review.borderColor} rounded-xl p-6 ${review.bg} shadow-sm hover:shadow-md transition-shadow relative`}>
                            <p className="font-sans text-[15px] text-slate-700 leading-relaxed mb-6">
                                {review.text}
                            </p>

                            <div className="border-t border-slate-100 pt-4">
                                <p className="font-sans font-bold text-text-main text-sm">{review.name}</p>
                                <p className="font-sans text-xs text-slate-500 mb-2">{review.role}</p>
                                <div className="flex items-center gap-2 bg-slate-50 w-fit px-2 py-1 rounded text-xs text-slate-600">
                                    {review.icon}
                                    <span>Source: {review.source}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-6">
                    <p className="font-sans text-[14px] text-slate-500 bg-white inline-block px-6 py-3 rounded-lg border border-slate-200 shadow-sm">
                        While individual results vary, aggregate public sentiment indicates some users report symptomatic relief after several weeks of use, though a clear portion of users utilize the refund policy. You can read our deep dive on <a href="/blog/nerve-fresh-customer-reviews-2026" className="text-brand-green font-bold hover:underline">what public feedback suggests</a>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default UserSentiment;
