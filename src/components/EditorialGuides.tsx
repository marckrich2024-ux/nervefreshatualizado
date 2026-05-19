import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, ShieldQuestion, AlertTriangle, MessageSquare, BookOpen, ArrowRight } from 'lucide-react';

const guides = [
    {
        slug: '/blog/nerve-fresh-ingredients-overview',
        icon: <FlaskConical className="w-6 h-6 text-brand-green" />,
        title: 'Nerve Fresh Ingredients Overview',
        description: 'A breakdown of each botanical ingredient, what the research suggests, and the limits of the current evidence.',
    },
    {
        slug: '/blog/is-nerve-fresh-a-scam-or-legit',
        icon: <ShieldQuestion className="w-6 h-6 text-brand-green" />,
        title: 'Is Nerve Fresh a Scam or Legit?',
        description: 'We analyzed the business practices, refund terms, and marketing claims to give you an objective trust assessment.',
    },
    {
        slug: '/blog/nerve-fresh-side-effects',
        icon: <AlertTriangle className="w-6 h-6 text-brand-green" />,
        title: 'Nerve Fresh Side Effects',
        description: 'What the individual ingredient profiles and public data suggest about safety, drowsiness, and medication interactions.',
    },
    {
        slug: '/blog/nerve-fresh-customer-reviews-2026',
        icon: <MessageSquare className="w-6 h-6 text-brand-green" />,
        title: 'Nerve Fresh Customer Reviews',
        description: 'A look at public feedback patterns — positive, negative, and mixed — to help set realistic expectations.',
    },
    {
        slug: '/blog/nerve-support-supplements',
        icon: <BookOpen className="w-6 h-6 text-brand-green" />,
        title: 'Nerve Support Supplements Guide',
        description: 'How botanical blends compare to vitamins like ALA and B12, and how to evaluate any nerve supplement safely.',
    },
];

const EditorialGuides = () => {
    return (
        <section className="bg-slate-50 py-16 px-4 border-t border-slate-200">
            <div className="max-w-[1140px] mx-auto">
                <div className="text-center mb-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-green mb-2">Editorial Research</p>
                    <h2 className="font-serif font-semibold text-2xl md:text-3xl text-text-main mb-3">
                        Continue Your Research Before Buying
                    </h2>
                    <p className="font-sans text-[17px] text-text-muted leading-relaxed max-w-2xl mx-auto">
                        Explore our editorial guides on ingredients, safety, public feedback, and how to evaluate Nerve Fresh before making a decision.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {guides.map((guide) => (
                        <Link
                            key={guide.slug}
                            to={guide.slug}
                            className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-brand-green hover:shadow-md transition-all duration-200 flex flex-col"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-green-50 p-2 rounded-lg">{guide.icon}</div>
                                <h3 className="font-sans font-bold text-text-main text-[15px] leading-snug group-hover:text-brand-green transition-colors">
                                    {guide.title}
                                </h3>
                            </div>
                            <p className="font-sans text-[14px] text-text-muted leading-relaxed flex-grow">
                                {guide.description}
                            </p>
                            <div className="flex items-center gap-1 mt-4 text-brand-green font-bold text-sm">
                                Read guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>

                <p className="text-center text-xs text-slate-400 mt-8">
                    These guides are for informational purposes only and do not constitute medical advice.
                </p>
            </div>
        </section>
    );
};

export default EditorialGuides;
