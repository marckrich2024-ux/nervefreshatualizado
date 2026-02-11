import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-base pt-20 pb-16 md:pt-32 md:pb-24">
            <div className="max-w-[1140px] mx-auto px-4 grid md:grid-cols-5 gap-12 items-center">
                {/* Left Column (60%) */}
                <div className="md:col-span-3 order-2 md:order-1">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 border border-slate-200 bg-white rounded-full pr-4 pl-1 py-1 mb-4 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                            <img
                                src="/assets/reviewer-avatar.webp"
                                alt="Dr. Sarah Mitchell"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Sarah+Mitchell&background=0D9488&color=fff';
                                }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-sans font-bold text-[11px] text-text-main leading-tight">Reviewed by Dr. Sarah Mitchell</span>
                            <span className="font-sans text-[10px] text-slate-500 leading-tight">Health Research Analyst • Feb 2026</span>
                        </div>
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Micro-text above headline */}
                    <p className="font-sans italic text-slate-400 text-xs mb-2">
                        Updated February 2026 · 47-hour independent investigation · Not affiliated with manufacturer
                    </p>

                    {/* Headline */}
                    <h1 className="font-serif font-bold text-3xl md:text-[32px] lg:text-[42px] text-text-main leading-tight mb-4">
                        We Investigated Nerve Fresh So You Don't Have To — Here’s What 23 Studies and 200+ User Reports Actually Show.
                    </h1>

                    {/* Micro-copy (Empathy) */}
                    <p className="font-sans italic text-[17px] md:text-lg text-slate-500 mb-6 bg-slate-50 p-4 rounded-lg border-l-4 border-accent">
                        "If neuropathy pain has you searching for answers at 3 AM — you're not alone, and this review was written for you."
                    </p>

                    {/* Subtitle */}
                    <p className="font-sans text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                        An evidence-based analysis of the supplement's claims, ingredients, and what real users are saying across Reddit, Trustpilot, and medical forums.
                    </p>

                    {/* Verdict Bar */}
                    <div className="flex flex-row items-center gap-6 mt-8">
                        {/* Score Circle */}
                        <div className="w-16 h-16 rounded-full border-[3px] border-accent flex items-center justify-center flex-shrink-0">
                            <span className="font-mono font-bold text-[22px] text-accent">6.5</span>
                        </div>

                        {/* Score Label */}
                        <div className="flex flex-col">
                            <span className="font-sans font-semibold text-base text-text-main">Mixed Verdict</span>
                            <span className="font-sans text-sm text-slate-400">
                                Based on ingredient research, user reports, and compliance review
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Column (40%) */}
                <div className="md:col-span-2 order-1 md:order-2">
                    <div className="relative rounded-lg overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] aspect-video md:aspect-[4/3]">
                        {/* Placeholder for generated image */}
                        <img
                            src="/imagem-sessão-hero - Editado.jpg"
                            alt="Health journalist workspace investigating Nerve Fresh"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none'; // Hide if broken, fallback to bg color or just hide
                                // Better fallback:
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'; // Generic logic/research image
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
