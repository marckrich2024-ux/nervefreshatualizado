import React from 'react';
import { ExternalLink } from 'lucide-react';

const MechanismSection = () => {
    const ingredients = [
        {
            name: "Prickly Pear",
            claim: "Acts as a cellular shield against oxidative stress",
            evidence: "Animal studies show antioxidant properties. Human evidence for neuropathy is limited.",
            strength: 30,
            level: "Preliminary",
            color: "bg-red-100 text-red-800",
            image: "/ingredients/prickly-pear.webp",
            fallback: "https://images.unsplash.com/photo-1596547608622-c3227499696f?auto=format&fit=crop&w=400&q=80" // Cactus/Prickly Pear
        },
        {
            name: "Passionflower",
            claim: "The nerve architect that rebuilds neural pathways",
            evidence: "Moderate evidence for anxiety and insomnia. No specific studies on 'neural rebuilding'.",
            strength: 50,
            level: "Mixed Evidence",
            color: "bg-yellow-100 text-yellow-800",
            image: "/ingredients/passionflower.webp",
            fallback: "https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=400&q=80" // Passionflower
        },
        {
            name: "Corydalis",
            claim: "Intercepts pain signals before they reach the brain",
            evidence: "Contains DHCB, studied for pain in animal models. Few human trials.",
            strength: 40,
            level: "Preliminary",
            color: "bg-red-100 text-red-800",
            image: "/ingredients/corydalis.webp",
            fallback: "https://images.unsplash.com/photo-1598425237654-446755e167c1?auto=format&fit=crop&w=400&q=80" // Generic herb
        },
        {
            name: "Marshmallow Root",
            claim: "A natural guardian for inflamed nerve tissue",
            evidence: "Anti-inflammatory properties shown in vitro. Lacks clinical trials for neuropathy.",
            strength: 20,
            level: "Preliminary",
            color: "bg-red-100 text-red-800",
            image: "/ingredients/marshmallow-root.webp",
            fallback: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80" // Root/herbal tea
        },
        {
            name: "California Poppy",
            claim: "The ultimate rest-inducer for nerve recovery",
            evidence: "Traditional use for insomnia/anxiety. Rated 'possibly effective' by EMA for sleep.",
            strength: 60,
            level: "Moderate (for sleep)",
            color: "bg-green-100 text-green-800",
            image: "/ingredients/california-poppy.webp",
            fallback: "https://images.unsplash.com/photo-1588610664687-57894d8cb9a6?auto=format&fit=crop&w=400&q=80" // Poppy
        }
    ];

    return (
        <section id="benefits" className="bg-base py-12 md:py-16 px-4 scroll-mt-24">
            <div className="max-w-[780px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="font-sans font-medium text-[13px] text-slate-400 tracking-widest uppercase mb-4 block">
                        HOW IT WORKS
                    </span>
                    <h2 className="font-serif font-semibold text-3xl text-text-main mb-6">
                        What the Manufacturer Claims — And What We Found
                    </h2>
                    <p className="font-sans text-[17px] text-text-muted leading-relaxed">
                        Nerve Fresh is marketed as a nerve support supplement containing five botanical ingredients. Below, we present the manufacturer's claims alongside what peer-reviewed research actually says about each ingredient. Where evidence is strong, we say so. Where it's preliminary, we say that too.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {ingredients.map((item, index) => (
                        <div key={index} className={`bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${index === 4 ? 'md:col-span-2 md:flex' : ''}`}>
                            {/* Image Container */}
                            <div className={`${index === 4 ? 'md:w-1/3 h-48 md:h-auto' : 'h-48'} bg-slate-100 relative overflow-hidden group`}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = item.fallback;
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className={`p-6 ${index === 4 ? 'md:w-2/3 flex flex-col justify-center' : ''}`}>
                                <h3 className="font-serif font-semibold text-lg text-text-main mb-4">{item.name}</h3>

                                {/* Claim */}
                                <div className="mb-4">
                                    <span className="inline-block bg-yellow-50 text-yellow-800 text-[11px] font-bold px-2 py-0.5 rounded mb-1">CLAIM</span>
                                    <p className="font-sans text-[15px] text-text-muted leading-snug">"{item.claim}"</p>
                                </div>

                                {/* Evidence */}
                                <div className="mb-4">
                                    <span className="inline-block bg-green-50 text-green-800 text-[11px] font-bold px-2 py-0.5 rounded mb-1">EVIDENCE</span>
                                    <p className="font-sans text-[15px] text-text-muted leading-snug">{item.evidence}</p>
                                </div>

                                {/* Strength Bar */}
                                <div className="mt-4 pt-4 border-t border-slate-100">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-mono text-[11px] text-slate-400 uppercase">Evidence Strength</span>
                                        <span className={`font-mono text-[11px] font-bold ${item.strength > 50 ? 'text-green-600' : 'text-orange-600'}`}>
                                            {item.level}
                                        </span>
                                    </div>
                                    <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full ${item.strength > 50 ? 'bg-green-500' : 'bg-orange-400'}`}
                                            style={{ width: `${item.strength}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MechanismSection;
