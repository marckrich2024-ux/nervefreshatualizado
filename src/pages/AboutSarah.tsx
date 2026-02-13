import React from 'react';
import SEOHead from '../components/SEOHead';

const AboutSarah = () => {
    return (
        <div className="bg-white min-h-screen">
            <SEOHead
                title="Dr. Sarah Mitchell - Medical Researcher | Health Journal Daily"
                description="Biography and credentials of Dr. Sarah Mitchell, Lead Researcher at Health Journal Daily."
            />
            <div className="max-w-3xl mx-auto px-4 py-16">
                <h1 className="font-serif text-4xl font-bold text-gray-900 mb-6">Dr. Sarah Mitchell, PhD</h1>
                <p className="text-xl text-gray-500 mb-8 font-light">Molecular Biologist & Senior Medical Researcher</p>

                <div className="prose prose-lg prose-green mx-auto text-gray-800 leading-relaxed">
                    <p>
                        Dr. Sarah Mitchell is a distinguished molecular biologist with over 15 years of experience in the field of nutritional biochemistry and neurophysiology. obtaining her Ph.D. from the University of California, San Francisco (UCSF), where her thesis focused on the role of oxidative stress in neurodegenerative pathways.
                    </p>
                    <p>
                        Her academic journey began with a curiosity about how plant-based compounds interact with human cellular mechanisms. Unlike many in her field who focus solely on pharmaceutical interventions, Dr. Mitchell has dedicated her career to bridging the gap between traditional herbal medicine and modern clinical science. She believes that the most potent solutions often lie in nature, waiting to be validated by rigorous scientific inquiry.
                    </p>
                    <p>
                        At Health Journal Daily, Dr. Mitchell leads the investigative team responsible for auditing supplement efficacy. She developed the "Bio-Availability Index," a proprietary metric used to evaluate how well a supplement's ingredients can be absorbed by the human body. Her rigorous standards mean that less than 5% of the products she reviews receive a passing grade. She specifically examines the molecular forms of vitamins and minerals—for instance, distinguishing between cheap Magnesium Oxide and the highly absorbable Magnesium Glycinate.
                    </p>
                    <p>
                        Dr. Mitchell has authored over 30 peer-reviewed papers in journals such as <em>The American Journal of Clinical Nutrition</em> and <em>Neurobiology of Aging</em>. Her recent research has focused on "The Gut-Brain Axis and Neuropathy," exploring how microbiome health influences peripheral nerve function.
                    </p>
                    <p>
                        When she is not dissecting clinical trials or analyzing mass spectrometry data, Dr. Mitchell represents the Consumer Health Safety Council, advocating for tighter regulations on the supplement industry to prevent "label dusting"—the practice of adding trace amounts of active ingredients just to claim them on the label.
                    </p>
                    <p>
                        "My goal is simple," says Dr. Mitchell. "To give the consumer the scientific literacy they need to make choices that actually improve their lives, rather than just emptying their wallets."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSarah;
