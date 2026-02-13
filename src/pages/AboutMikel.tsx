import React from 'react';
import SEOHead from '../components/SEOHead';

const AboutMikel = () => {
    return (
        <div className="bg-white min-h-screen">
            <SEOHead
                title="Dr. Mikel Daniels - Clinical Neurologist | Health Journal Daily"
                description="Biography and credentials of Dr. Mikel Daniels, Clinical Advisor at Health Journal Daily."
            />
            <div className="max-w-3xl mx-auto px-4 py-16">
                <h1 className="font-serif text-4xl font-bold text-gray-900 mb-6">Dr. Mikel Daniels, MD</h1>
                <p className="text-xl text-gray-500 mb-8 font-light">Clinical Neurologist & Integrative Medicine Specialist</p>

                <div className="prose prose-lg prose-green mx-auto text-gray-800 leading-relaxed">
                    <p>
                        Dr. Mikel Daniels is a board-certified neurologist who has spent the last two decades treating patients suffering from chronic pain and peripheral neuropathy. After completing his residency at Johns Hopkins Hospital, he grew frustrated with the limitations of conventional pain management, which often relies on palliatives that mask symptoms rather than addressing root causes.
                    </p>
                    <p>
                        This frustration led him to pursue a fellowship in Integrative Medicine, seeking to combine the acute diagnostic power of Western medicine with the restorative philosophies of functional medicine. Dr. Daniels is a strong proponent of "Metabolic Neurology," a discipline that treats nerve damage by addressing the underlying metabolic dysfunction—typically blood sugar regulation and systemic inflammation.
                    </p>
                    <p>
                        In his clinical practice, Dr. Daniels has treated over 5,000 patients with various forms of neuropathy. He is known for his "3-Pillar Protocol" for nerve regeneration: Mechanical Decompression, Nutritional Restoration, and Bio-Electric Stimulation. He joined the Health Journal Daily advisory board to provide a clinical perspective on direct-to-consumer health products.
                    </p>
                    <p>
                        "Patients often ask me if a supplement they saw online will work," Dr. Daniels explains. "I don't rely on hope; I look for the mechanism of action. If a product cannot explain *how* it fixes the myelin sheath or *how* it modulates the calcium ion channels in the nerve, it belongs in the trash."
                    </p>
                    <p>
                        Dr. Daniels is also a vocal critic of the pharmaceutical industry's approach to pain management, having testified before congressional subcommittees regarding the opioid crisis. He advocates for non-addictive pain modulation strategies, championing ingredients like Corydalis Yanhusuo and Alpha-Lipoic Acid long before they became mainstream.
                    </p>
                    <p>
                        Currently, he splits his time between his private practice in Chicago and his role as a medical reviewer, ensuring that health information online maintains the same rigour as advice given in a clinical setting.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMikel;
