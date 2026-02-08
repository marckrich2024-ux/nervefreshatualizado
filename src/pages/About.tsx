import React from 'react';
import { ShieldCheck, Users, BookOpen } from 'lucide-react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="font-heading text-4xl font-bold text-gray-900 mb-8 text-center border-b pb-8">About Health Journal Daily</h1>

            <div className="space-y-12">
                {/* Mission */}
                <section>
                    <h2 className="font-heading text-2xl font-bold text-gray-800 mb-4 flex items-center">
                        <ShieldCheck className="w-6 h-6 mr-2 text-brand-green" />
                        Our Mission
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        At <strong>Health Journal Daily</strong>, we believe that informed decisions are the foundation of a healthier life. In a digital landscape flooded with conflicting information and aggressive marketing, our mission is to stand as a beacon of clarity and independence. We are dedicated to researching, analyzing, and reviewing natural health solutions with rigor and transparency.
                    </p>
                </section>

                {/* Who We Are */}
                <section className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                    <h2 className="font-heading text-2xl font-bold text-gray-800 mb-4 flex items-center">
                        <Users className="w-6 h-6 mr-2 text-brand-green" />
                        Who We Are
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We are a collective of independent health researchers, medical journalists, and wellness enthusiasts. Unlike retailer-owned blogs, we operate independently to ensure our reviews remain unbiased and focused solely on consumer value.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Our team spends hundreds of hours analyzing clinical studies, verifying ingredient sourcing, and collecting real-world user feedback before we ever publish a review.
                    </p>
                </section>

                {/* Editorial Standards */}
                <section>
                    <h2 className="font-heading text-2xl font-bold text-gray-800 mb-4 flex items-center">
                        <BookOpen className="w-6 h-6 mr-2 text-brand-green" />
                        Our Editorial Standards
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="font-bold text-brand-green mr-2">1.</span>
                            <span className="text-gray-700"><strong>Evidence-Based:</strong> We prioritize products backed by scientific literature and transparent labeling.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-brand-green mr-2">2.</span>
                            <span className="text-gray-700"><strong>Transparency:</strong> If we use affiliate links to support our operations, we disclose this clearly. We never accept payment in exchange for a positive review score.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-brand-green mr-2">3.</span>
                            <span className="text-gray-700"><strong>Continuous Updates:</strong> Health science evolves, and so do our reviews. We regularly update our content to reflect the latest research and product formulations.</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default About;
