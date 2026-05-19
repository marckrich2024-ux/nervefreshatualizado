export const EvidenceMatrix = (rows: any[]) => `
    <div class="overflow-x-auto my-8 shadow-sm rounded-lg border border-gray-200">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-4">Ingredient</th>
                    <th scope="col" class="px-6 py-4">Dose</th>
                    <th scope="col" class="px-6 py-4">Evidence Level</th>
                    <th scope="col" class="px-6 py-4">Evidence Type</th>
                    <th scope="col" class="px-6 py-4">What It Suggests</th>
                </tr>
            </thead>
            <tbody>
                ${rows.map(r => `
                <tr class="bg-white border-b hover:bg-gray-50">
                    <td class="px-6 py-4 font-bold text-gray-900">${r.ingredient}</td>
                    <td class="px-6 py-4">${r.dose}</td>
                    <td class="px-6 py-4"><span class="px-2 py-1 rounded text-xs font-bold ${r.level === 'High' ? 'bg-green-100 text-green-800' : r.level === 'Moderate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}">${r.level}</span></td>
                    <td class="px-6 py-4 capitalize">${r.type.replace('_', ' ')}</td>
                    <td class="px-6 py-4 text-xs">${r.suggests}</td>
                </tr>
                `).join('')}
            </tbody>
        </table>
    </div>
`;

export const MedicalDisclaimerBox = () => `
    <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
        <h4 class="font-bold text-blue-900 mb-2 flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Medical Disclaimer
        </h4>
        <p class="text-sm text-blue-800 m-0">The information on this page is for educational purposes only and is not a substitute for professional medical advice. Always consult your physician before starting any new supplement, especially if you take prescription medications.</p>
    </div>
`;

export const AffiliateDisclosureBox = () => `
    <div class="bg-gray-50 text-gray-500 text-xs p-4 rounded-lg my-8 italic">
        <p class="m-0"><strong>Affiliate Disclosure:</strong> Health Journal Daily is supported by our readers. If you make a purchase through the links on this page, we may earn a small commission at no extra cost to you. This helps fund our editorial research. Our reviews remain independent.</p>
    </div>
`;

export const SafetyCallout = (title: string, text: string) => `
    <div class="bg-red-50 border border-red-200 p-6 rounded-xl my-6">
        <h4 class="font-bold text-red-800 mb-2 flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            ${title}
        </h4>
        <p class="text-sm text-red-900 m-0">${text}</p>
    </div>
`;

export const WhatWeCouldVerify = (verified: string[], notVerified: string[]) => `
    <div class="grid md:grid-cols-2 gap-8 my-10">
        <div class="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 class="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                What We Could Verify
            </h3>
            <ul class="space-y-2">
                ${verified.map(v => `
                    <li class="flex items-start gap-2">
                        <span class="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span class="text-sm text-green-900">${v}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
        <div class="bg-red-50 rounded-xl p-6 border border-red-200">
            <h3 class="font-bold text-red-800 text-lg mb-4 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                What We Could Not Verify
            </h3>
            <ul class="space-y-2">
                ${notVerified.map(v => `
                    <li class="flex items-start gap-2">
                        <span class="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span class="text-sm text-red-900">${v}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    </div>
`;

export const SourceLimitationsBox = (text: string) => `
    <div class="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-6">
        <h4 class="font-bold text-yellow-800 mb-2">Evidence Limitations</h4>
        <p class="text-sm text-yellow-900 m-0">${text}</p>
    </div>
`;

export const EditorialCTA = (url: string, text: string, eventName: string) => `
    <div class="mt-12 p-8 bg-green-50 rounded-2xl border border-green-100 text-center">
        <a href="${url}" target="_blank" rel="sponsored nofollow noopener noreferrer" onclick="if(window.dataLayer){window.dataLayer.push({event:'affiliate_click', cta_type:'${eventName}'})}" class="bg-brand-green text-white font-bold py-4 px-8 rounded-lg hover:bg-brand-darkGreen transition-colors shadow inline-block">
            ${text}
        </a>
    </div>
`;

export const TrustChecklist = (points: { title: string; pass: boolean; text: string }[]) => `
    <div class="my-8">
        <h3 class="text-2xl font-bold mb-6">Trust Checklist</h3>
        <div class="space-y-4">
            ${points.map(p => `
                <div class="bg-white border ${p.pass ? 'border-green-200' : 'border-red-200'} p-4 rounded-lg flex items-start gap-4">
                    <div class="${p.pass ? 'text-green-600' : 'text-red-600'} mt-1 flex-shrink-0">
                        ${p.pass 
                            ? `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
                            : `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
                        }
                    </div>
                    <div>
                        <h4 class="font-bold text-gray-900 m-0">${p.title}</h4>
                        <p class="text-sm text-gray-600 m-0 mt-1">${p.text}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;

export const IngredientCard = (name: string, dose: string, whatItSuggests: string, limitations: string) => `
    <div class="bg-white border border-gray-200 rounded-xl p-6 my-6 shadow-sm">
        <div class="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
            <h3 class="font-bold text-xl text-gray-900 m-0">${name}</h3>
            <span class="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">${dose}</span>
        </div>
        <div class="grid md:grid-cols-2 gap-6">
            <div>
                <h4 class="text-sm font-bold text-brand-green mb-2">What the Research Suggests</h4>
                <p class="text-sm text-gray-700">${whatItSuggests}</p>
            </div>
            <div>
                <h4 class="text-sm font-bold text-gray-600 mb-2">What it DOES NOT Prove</h4>
                <p class="text-sm text-gray-700">${limitations}</p>
            </div>
        </div>
    </div>
`;
