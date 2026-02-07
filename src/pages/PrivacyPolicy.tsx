import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-4">Last updated: {new Date().getFullYear()}</p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
                    <p>
                        Welcome to Health Journal Daily ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
                    <p>
                        We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>Personal Data:</strong> Name, email address, and other contact data if you reach out to us.</li>
                        <li><strong>Usage Data:</strong> IP address, browser type, device information, and operating system.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
                    <p>
                        We use personal information collected via our Website for a variety of business purposes described below:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>To operate and maintain our Service.</li>
                        <li>To improve user experience and analyze website traffic.</li>
                        <li>To respond to user inquiries/offer support.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies and Tracking Technologies</h2>
                    <p>
                        We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Checkouts</h2>
                    <p>
                        We do NOT sell your personal data to third parties. When you click on links to purchase products, you may be redirected to a third-party vendor's website. We are not responsible for the privacy practices or content of those third-party sites.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Privacy Rights (GDPR & CCPA)</h2>
                    <p>
                        Depending on your location, you may have specific rights regarding your personal information, including the right to access, correct, or delete your data.
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>GDPR (EU):</strong> You have the right to request access to and rectification or erasure of your personal data.</li>
                        <li><strong>CCPA (California):</strong> You have the right to know what personal information is collected and the right to delete such information.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">7. Updates to This Policy</h2>
                    <p>
                        We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">8. Contact Us</h2>
                    <p>
                        If you have questions or comments about this policy, you may contact us via our Contact page.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
