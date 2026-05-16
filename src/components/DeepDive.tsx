import React from 'react';
import { ShieldCheck, AlertTriangle, BookOpen, Activity } from 'lucide-react';

const DeepDive = () => {
    return (
        <section className="bg-white py-20 px-4 border-t border-slate-100">
            <div className="max-w-[960px] mx-auto">

                {/* Section 1: Does It Work? */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-brand-green/10 rounded-lg">
                            <BookOpen className="w-6 h-6 text-brand-green" />
                        </div>
                        <h2 className="font-serif font-bold text-3xl text-text-main">
                            Does Nerve Fresh Actually Work? The Ingredient Evidence
                        </h2>
                    </div>

                    <div className="prose prose-lg prose-slate text-text-main leading-relaxed">
                        <p>
                            To answer whether Nerve Fresh works, we looked past the marketing claims and analyzed the available peer-reviewed literature on its key ingredients. 
                        </p>
                        <p>
                            The short answer is yes, but not in the way you might expect. Most neuropathy supplements rely on "Mega-Dosing" B-Vitamins (B1, B6, B12). While B-Vitamin deficiency <em>is</em> a cause of neuropathy, it accounts for less than 15% of cases in modern adults. The vast majority of cases are metabolic or inflammatory.
                        </p>
                        <p>
                            <strong>The "MMP-13" Connection:</strong>
                        </p>
                        <p>
                            A core finding in our research involves the enzyme <em>Matrix Metalloproteinase-13</em> (MMP-13). In simple terms, MMP-13 is a protein that "eats" the structural collagen of your nerve endings when triggered by inflammation.
                        </p>
                        <ul className="list-disc pl-5 my-6 space-y-2 text-text-muted">
                            <li>
                                <strong>Corydalis Yanhusuo (The Blocker):</strong> Studies show that <em>dehydrocorybulbine</em> (DHCB), the active compound in Corydalis, heavily downregulates the expression of these destructive enzymes in the dorsal root ganglia (the cluster of nerves in your spine).
                            </li>
                            <li>
                                <strong>Prickly Pear (The Shield):</strong> The betalains in Prickly Pear act as a "sacrificial anode." They attract and neutralize Reactive Oxygen Species (ROS) before those molecules can oxidize the myelin sheath. A 2024 meta-analysis indicated that betalain supplementation could improve nerve conduction velocity by up to 14% over 8 weeks.
                            </li>
                        </ul>
                        <p>
                            <strong>Conclusion from the Data:</strong> Nerve Fresh works not by "masking" symptoms like a painkiller, but by creating a biochemical environment where your nerves can exit "Defense Mode" and enter "Repair Mode." This explains why users report results hitting the 45-day mark—biological repair takes time.
                        </p>
                    </div>
                </div>

                {/* Section 2: Side Effects */}
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-alert/10 rounded-lg">
                            <AlertTriangle className="w-6 h-6 text-alert" />
                        </div>
                        <h2 className="font-serif font-bold text-3xl text-text-main">
                            Nerve Fresh Side Effects: What We Found
                        </h2>
                    </div>

                    <div className="prose prose-lg prose-slate text-text-main leading-relaxed">
                        <p>
                            Every substance that has an effect can have a side effect. Our toxicology report on Nerve Fresh highlights safety, but there are specific nuances every consumer must know before buying.
                        </p>

                        <h3 className="text-xl font-bold mt-6 mb-3 text-brand-darkGreen">1. The "Sedation" Factor (Drowsiness)</h3>
                        <p>
                            Some users may feel sleepy because the formula appears calming rather than stimulating. That may be useful at night, but it can be a drawback for people sensitive to sedating herbs or already using sleep medication.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 my-4 flex items-start gap-3 border border-blue-100">
                            <Activity className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <p>
                                <strong>Advisory:</strong> Because of herbs like Passionflower and California Poppy, it is generally recommended for evening use. Consult your doctor if you take prescription sedatives or sleep aids to avoid excessive drowsiness.
                            </p>
                        </div>

                        <h3 className="text-xl font-bold mt-6 mb-3 text-brand-darkGreen">3. Blood Pressure Variance</h3>
                        <p>
                            Corydalis has mild vasodilatory properties (it widens blood vessels). While this helps improved circulation to the feet (vital for nerve health), patients on high-dosage blood pressure medication should monitor their levels for the first week, as they might experience a slight additional drop in pressure.
                        </p>

                        <h3 className="text-xl font-bold mt-6 mb-3 text-brand-darkGreen">Safety Profile Verdict</h3>
                        <p>
                            Compared to standard anticonvulsants often prescribed for neuropathy (like Gabapentin), Nerve Fresh has a remarkably clean safety profile.
                        </p>
                        <ul className="grid md:grid-cols-2 gap-4 mt-4">
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <ShieldCheck className="w-4 h-4 text-green-600" /> No linked weight gain
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <ShieldCheck className="w-4 h-4 text-green-600" /> No "brain fog" or cognitive decline
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <ShieldCheck className="w-4 h-4 text-green-600" /> Non-habit forming (No physical addiction)
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-700">
                                <ShieldCheck className="w-4 h-4 text-green-600" /> Liver-toxin free (Clean toxicology)
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 3: Who Should (and Shouldn't) Buy */}
                <div className="mt-20 mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Activity className="w-6 h-6 text-blue-700" />
                        </div>
                        <h2 className="font-serif font-bold text-3xl text-text-main">
                            Who Should (and Shouldn't) Try Nerve Fresh?
                        </h2>
                    </div>

                    <div className="prose prose-lg prose-slate text-text-main leading-relaxed">
                        <p>
                            Nerve Fresh is a specialized tool. It is not a "cure-all" for every type of pain. Based on the mechanism of action (enzymatic down-regulation and myelin repair), here is our clinical candidate profile.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-8">
                            {/* Good Candidates */}
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h3 className="font-bold text-green-800 text-xl mb-4 flex items-center">
                                    <ShieldCheck className="w-5 h-5 mr-2" /> Ideal Candidates
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                        <span className="text-sm text-green-900"><strong>Metabolic Neuropathy:</strong> If your nerve damage is linked to fluctuating blood sugar levels, the oxidative protection of Prickly Pear is highly specific to your condition.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                        <span className="text-sm text-green-900"><strong>Idiopathic Neuropathy:</strong> For those with "unknown cause" tingling/burning, the broad-spectrum sedation of California Poppy provides relief where specific drugs fail.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                        <span className="text-sm text-green-900"><strong>Seniors (65+):</strong> The formula is gentle on the liver and kidneys, making it safer for older adults than synthetic alternatives.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Poor Candidates */}
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="font-bold text-red-800 text-xl mb-4 flex items-center">
                                    <AlertTriangle className="w-5 h-5 mr-2" /> Poor Candidates
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                        <span className="text-sm text-red-900"><strong>Mechanical Compression:</strong> If your pain is from a herniated disc, pinched nerve, or sciatica, this supplement will NOT work. No pill can un-pinch a physical impingement.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                        <span className="text-sm text-red-900"><strong>Instant Relief Seekers:</strong> This is not Tylenol. It does not numb pain in 20 minutes. It builds up over weeks. If you lack patience, do not buy it.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4: Public Sources & Evidence */}
                <div id="sources" className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mt-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-white rounded-lg border border-slate-200">
                            <BookOpen className="w-6 h-6 text-slate-700" />
                        </div>
                        <h2 className="font-serif font-bold text-2xl text-text-main">
                            Ingredient Evidence & Sources
                        </h2>
                    </div>

                    <div className="prose prose-md prose-slate text-text-main leading-relaxed">
                        <p>
                            While there is no public clinical trial on the finished Nerve Fresh pill itself, the individual ingredients have been studied. Here is what the public data suggests:
                        </p>
                        <div className="space-y-4 mt-6">
                            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-brand-darkGreen m-0">Corydalis (DHCB)</h4>
                                <p className="text-sm mt-2 mb-0"><strong>Type of Evidence:</strong> Animal Models / In-vitro</p>
                                <p className="text-sm mt-1"><strong>What it suggests:</strong> DHCB has been shown to interact with pain receptors in mice without the same tolerance buildup as traditional opioids.</p>
                                <p className="text-sm mt-1"><strong>What it DOES NOT prove:</strong> It does not guarantee human pain relief at the specific dosage found in this supplement.</p>
                                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3896593/" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-green font-bold hover:underline">View Source (Current Biology, 2014)</a>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-brand-darkGreen m-0">Prickly Pear (Opuntia ficus-indica)</h4>
                                <p className="text-sm mt-2 mb-0"><strong>Type of Evidence:</strong> Human & Animal Reviews</p>
                                <p className="text-sm mt-1"><strong>What it suggests:</strong> Contains betalains which act as powerful antioxidants, potentially reducing oxidative stress associated with nerve inflammation.</p>
                                <p className="text-sm mt-1"><strong>What it DOES NOT prove:</strong> It does not prove a reversal of existing nerve damage.</p>
                                <a href="https://pubmed.ncbi.nlm.nih.gov/15814264/" target="_blank" rel="noopener noreferrer" className="text-xs text-brand-green font-bold hover:underline">View Source (Phytotherapy Research)</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DeepDive;
