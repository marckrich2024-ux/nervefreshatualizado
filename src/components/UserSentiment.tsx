import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp, MessageCircle, Star, Globe } from 'lucide-react';

const UserSentiment = () => {
    const platforms = [
        {
            name: "Reddit (r/Peripheralneuropathy)",
            icon: <MessageCircle className="w-5 h-5 text-orange-600" />,
            score: 1.5,
            sentiment: "Very Negative",
            summary: "Users generally skeptical. Several threads call out 'fake reviews' sites.",
            quote: "I haven't seen anyone on this sub actually say it worked for them. It's all just affiliate sites pushing it.",
            color: "border-red-500 text-red-600"
        },
        {
            name: "Trustpilot",
            icon: <Star className="w-5 h-5 text-green-600" />,
            score: 3.4,
            sentiment: "Insufficient Data",
            summary: "Only 1 verified review found. Not enough to form a conclusive opinion.",
            quote: "Delivery was fast, but too early to tell if it works.",
            color: "border-yellow-500 text-yellow-600"
        },
        {
            name: "GlobeNewsWire",
            icon: <Globe className="w-5 h-5 text-blue-600" />,
            score: 2.0,
            sentiment: "Disguised Marketing",
            summary: "Articles appear to be paid press releases rather than independent journalism.",
            quote: "This reads exactly like the sales page. No critical analysis whatsoever.",
            color: "border-red-500 text-red-600"
        },
        {
            name: "General US Sentiment",
            icon: <div className="w-5 h-5 font-bold text-slate-600 text-xs flex items-center justify-center border rounded-full">US</div>,
            score: 2.0,
            sentiment: "Extremely Skeptical",
            summary: "High volume of 'is this a scam' search queries suggests trust issues.",
            quote: "If it's so good, why is it only sold on one website?",
            color: "border-red-500 text-red-600"
        }
    ];

    const [expandedDeck, setExpandedDeck] = useState<number | null>(null);

    return (
        <section className="bg-slate-soft py-20 px-4">
            <div className="max-w-[1140px] mx-auto">
                <h2 className="font-serif font-semibold text-3xl text-text-main mb-6">
                    What Real Users Are Saying Online
                </h2>
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                    <p className="font-sans text-[17px] text-text-muted leading-relaxed flex-1">
                        Instead of hand-picked testimonials, we searched Reddit, Trustpilot, and medical forums for unfiltered opinions. Here's what we found.
                    </p>
                    {/* Social Proof Image Removed as per user request */}
                </div>

                {/* Platform Cards Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-12">
                    {platforms.map((platform, index) => (
                        <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    {platform.icon}
                                    <h3 className="font-sans font-semibold text-[16px] text-text-main">{platform.name}</h3>
                                </div>
                                <div className={`w-12 h-12 rounded-full border-[3px] flex items-center justify-center font-mono font-bold text-lg ${platform.color.split(' ')[0]} ${platform.color.split(' ')[1]}`}>
                                    {platform.score}
                                </div>
                            </div>

                            <div className="mb-3">
                                <span className={`font-mono text-[13px] font-medium uppercase tracking-wide ${platform.color.split(' ')[1]}`}>
                                    {platform.sentiment}
                                </span>
                            </div>

                            <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-4">
                                {platform.summary}
                            </p>

                            <div>
                                <button
                                    onClick={() => setExpandedDeck(expandedDeck === index ? null : index)}
                                    className="flex items-center text-[13px] font-medium text-slate-500 hover:text-accent transition-colors mb-2"
                                >
                                    {expandedDeck === index ? 'Hide quote' : 'See actual quote'}
                                    {expandedDeck === index ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
                                </button>
                                {expandedDeck === index && (
                                    <blockquote className={`pl-3 border-l-2 ${platform.color.split(' ')[0]} text-[14px] italic text-slate-500`}>
                                        "{platform.quote}"
                                    </blockquote>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Honesty Box */}
                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-sans font-semibold text-[16px] text-amber-900 mb-2">The Honest Truth</h4>
                        <p className="font-sans text-[15px] text-amber-800 leading-relaxed">
                            We could not find a single verified, independent user who confirmed positive results with Nerve Fresh on any major platform. This doesn't mean the product doesn't work — it means there isn't enough independent evidence to confirm that it does.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserSentiment;
