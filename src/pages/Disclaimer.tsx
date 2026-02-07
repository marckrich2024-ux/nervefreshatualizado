import React from 'react';

const Disclaimer = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Full Disclaimer</h1>
            <p className="text-gray-600 mb-4">Last updated: {new Date().getFullYear()}</p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
                <section className="bg-red-50 p-6 border-l-4 border-red-500 rounded-r-lg">
                    <h2 className="text-xl font-bold text-red-900 mb-3">Medical Disclaimer</h2>
                    <p className="text-red-800">
                        The content on Health Journal Daily is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">FDA Disclosure</h2>
                    <p>
                        The products and claims made about specific products on or through this Site have not been evaluated by the United States Food and Drug Administration and are not approved to diagnose, treat, cure, or prevent disease.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Independent Reviewer</h2>
                    <p>
                        Health Journal Daily is an independent review site. We research and review products based on their ingredients, reported benefits, and user feedback. We are not the manufacturer of "Nerve Fresh" or any other product mentioned on this site.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Affiliate Disclosure</h2>
                    <p>
                        In compliance with FTC guidelines, please assume the following about links and posts on this site:
                    </p>
                    <p className="mt-2">
                        Some of the links on Health Journal Daily are affiliate links, meaning that if you click on the link and make a purchase, we may receive a commission. This is at no extra cost to you. These commissions help support our editorial team and research efforts.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Testimonials and Results</h2>
                    <p>
                        Testimonials appearing on this site are receiving via text, audio, or video submission. They are individual experiences, reflecting real life experiences of those who have used our products and/or services in some way or another. However, they are individual results and results do vary. We do not claim that they are typical results that consumers will generally achieve.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Disclaimer;
