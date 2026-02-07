import React from 'react';

const TermsOfUse = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Terms of Use</h1>
            <p className="text-gray-600 mb-4">Last updated: {new Date().getFullYear()}</p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
                    <p>
                        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Health Journal Daily ("we," "us," or "our"), concerning your access to and use of the healthjournaldaily.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">2. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Representations</h2>
                    <p>
                        By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">4. Disclaimer - Informational Purpose Only</h2>
                    <p>
                        The Site provides information for educational and entertainment purposes only. The information provided is NOT medical advice. You should not rely on any information on the Site as a substitute for professional medical advice, diagnosis, or treatment. Always consult with a physician or other healthcare professional.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">5. Limitations of Liability</h2>
                    <p>
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site, even if we have been advised of the possibility of such damages.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Websites and Content</h2>
                    <p>
                        The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). We are not responsible for any Third-Party Websites accessed through the Site.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">7. Modifications and Interruptions</h2>
                    <p>
                        We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">8. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and defined following the laws of the United States. Health Journal Daily and yourself irrevocably consent that the courts of the United States shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfUse;
