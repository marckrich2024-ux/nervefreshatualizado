import React from 'react';
import { ExternalLink, Info } from 'lucide-react';

const EvidenceTable = () => {
    const data = [
        {
            ingredient: "Prickly Pear",
            claim: "Acts as a cellular shield against oxidative stress",
            research: "Animal studies show antioxidant properties. Evidence in humans for neuropathy is limited.",
            level: "Preliminary",
            levelColor: "bg-red-50 text-red-700",
            source: "NIH",
            url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6270776/"
        },
        {
            ingredient: "Passionflower",
            claim: "The nerve architect that rebuilds neural pathways",
            research: "Moderate evidence for anxiety (2020 meta-analysis). No specific studies on 'neural rebuilding'.",
            level: "Moderate (Anxiety)",
            levelColor: "bg-yellow-50 text-yellow-700",
            source: "PubMed",
            url: "https://pubmed.ncbi.nlm.nih.gov/32335198/"
        },
        {
            ingredient: "Corydalis",
            claim: "Intercepts pain signals before they reach the brain",
            research: "Contains DHCB, studied for pain in animal models. Few human clinical trials available.",
            level: "Preliminary",
            levelColor: "bg-red-50 text-red-700",
            source: "NIH",
            url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5127495/"
        },
        {
            ingredient: "Marshmallow Root",
            claim: "A natural guardian for inflamed nerve tissue",
            research: "Anti-inflammatory properties demonstrated in vitro. No clinical studies for neuropathy.",
            level: "Preliminary",
            levelColor: "bg-red-50 text-red-700",
            source: "PubMed",
            url: "https://pubmed.ncbi.nlm.nih.gov/?term=Althaea+officinalis+inflammation"
        },
        {
            ingredient: "California Poppy",
            claim: "The ultimate rest-inducer for nerve recovery",
            research: "Traditional use for insomnia. Classified as 'possibly effective' by EMA.",
            level: "Moderate (Sleep)",
            levelColor: "bg-green-50 text-green-700",
            source: "EMA",
            url: "https://www.ema.europa.eu/en/medicines/herbal/eschscholziae-herba"
        }
    ];

    return (
        <section className="bg-base py-20 px-4">
            <div className="max-w-[960px] mx-auto">
                <h2 className="font-serif font-semibold text-3xl text-text-main mb-6 text-center md:text-left">
                    Ingredient Claims vs. Scientific Evidence
                </h2>
                <p className="font-sans text-[17px] text-text-muted mb-10 leading-relaxed text-center md:text-left">
                    The table below compares what the manufacturer claims with what peer-reviewed research actually supports. We include direct links to sources so you can verify everything yourself.
                </p>

                {/* Evidence Image Removed as per user request */}

                {/* Table */}
                <div className="rounded-lg border border-slate-200 overflow-hidden bg-white shadow-sm mb-2">
                    <div className="overflow-x-auto pb-2">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr className="bg-slate-deep text-white">
                                    <th className="p-4 font-sans font-semibold text-[13px] uppercase tracking-wider w-[20%]">Ingredient</th>
                                    <th className="p-4 font-sans font-semibold text-[13px] uppercase tracking-wider w-[30%]">Manufacturer's Claim</th>
                                    <th className="p-4 font-sans font-semibold text-[13px] uppercase tracking-wider w-[35%]">What Research Says</th>
                                    <th className="p-4 font-sans font-semibold text-[13px] uppercase tracking-wider w-[15%]">Evidence Level</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {data.map((row, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                        <td className="p-4 font-serif font-semibold text-text-main">{row.ingredient}</td>
                                        <td className="p-4 font-sans text-[14px] text-text-muted italic">"{row.claim}"</td>
                                        <td className="p-4 font-sans text-[14px] text-text-main leading-relaxed relative group">
                                            {row.research}
                                            <a
                                                href={row.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center ml-2 text-accent text-[11px] font-bold hover:underline"
                                            >
                                                [{row.source}] <ExternalLink className="w-3 h-3 ml-0.5" />
                                            </a>
                                        </td>
                                        <td className="p-4">
                                            <span className={`inline-block px-2 py-1 rounded text-[11px] font-bold uppercase tracking-wide ${row.levelColor}`}>
                                                {row.level}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Mobile Scroll Hint */}
                <div className="md:hidden flex items-center justify-center gap-2 text-slate-400 text-xs mb-10 italic">
                    <Info className="w-4 h-4" />
                    <span>Scroll horizontally to see full data</span>
                </div>
            </div>
        </section>
    );
};

export default EvidenceTable;
