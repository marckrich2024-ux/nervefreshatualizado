// =============================================================================
// Evidence Database — Phase 3 Operational Infrastructure
// Health Journal Daily / Nerve Fresh Ecosystem
// Created: 2026-05-18
// =============================================================================
//
// PURPOSE:
// Centralized, compliance-first evidence registry that feeds all editorial
// pages. Every claim on the site MUST reference an entry from this database.
//
// RULES:
// 1. Never invent a source URL. Use sourceUrl: null + needs_verification
//    until the URL is manually validated in a US-based browser.
// 2. Always distinguish ingredient-level evidence from finished-formula evidence.
// 3. Use structure/function language ("may support") — never disease claims.
// 4. Update accessDate every time a source is re-verified.
// =============================================================================

export type EvidenceType =
  | 'human_trial'
  | 'animal_study'
  | 'in_vitro'
  | 'review_article'
  | 'meta_analysis'
  | 'manufacturer_claim'
  | 'public_discussion'
  | 'regulatory_source'
  | 'needs_verification';

export type ConfidenceLevel = 'High' | 'Moderate' | 'Low' | 'Unverified';
export type YmylRisk = 'Critical' | 'High' | 'Moderate' | 'Low';

export interface EvidenceRecord {
  id: string;
  subject: string;
  claim: string;
  evidenceType: EvidenceType;
  sourceName: string;
  sourceUrl: string | null;
  accessDate: string;
  whatItSuggests: string;
  whatItDoesNotProve: string;
  confidenceLevel: ConfidenceLevel;
  applicablePages: string[];
  ymylRisk: YmylRisk;
  complianceNotes: string;
}

export const evidenceDB: EvidenceRecord[] = [
  // =========================================================================
  // MANUFACTURER CLAIMS
  // =========================================================================
  {
    id: 'ev-mfr-001',
    subject: 'Nerve Fresh Manufacturer Claims',
    claim: 'Nerve Fresh supports nerve health through a blend of natural ingredients',
    evidenceType: 'manufacturer_claim',
    sourceName: 'Nerve Fresh Official Website',
    sourceUrl: null,
    accessDate: '2026-05-18',
    whatItSuggests:
      'The manufacturer markets Nerve Fresh as a plant-based nerve support supplement containing Passionflower (110mg), Corydalis (100mg), Marshmallow Root (110mg), Prickly Pear (45mg), and California Poppy (45mg).',
    whatItDoesNotProve:
      'No publicly available clinical trial on the finished Nerve Fresh formula was found. The "23 studies" claim could not be verified through a public, transparent bibliography. Marketing claims about the complete formula should be treated as manufacturer assertions, not independently verified scientific conclusions.',
    confidenceLevel: 'Unverified',
    applicablePages: [
      '/',
      '/blog/nerve-fresh-ingredients-overview',
      '/blog/is-nerve-fresh-a-scam-or-legit',
      '/blog/nerve-fresh-side-effects',
      '/blog/nerve-fresh-customer-reviews',
      '/blog/nerve-support-supplements',
    ],
    ymylRisk: 'High',
    complianceNotes:
      'Frame all manufacturer claims with "the manufacturer states" or "according to the product website". Never present manufacturer claims as independently verified facts. Never use "clinically proven" for the finished formula.',
  },

  // =========================================================================
  // CORYDALIS
  // =========================================================================
  {
    id: 'ev-corydalis-001',
    subject: 'Corydalis Yanhusuo',
    claim: 'Dehydrocorybulbine (DHCB) from Corydalis may have analgesic properties in neuropathic pain models',
    evidenceType: 'animal_study',
    sourceName: 'PubMed — Current Biology (2014)',
    sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/24388848/',
    accessDate: '2026-05-18',
    whatItSuggests:
      'DHCB showed activity in animal models for inflammatory and neuropathic pain. The compound acts through dopamine D2 receptor antagonism, a different mechanism than opioids.',
    whatItDoesNotProve:
      'Does not prove efficacy for neuropathic pain in humans. Does not validate the Nerve Fresh formula specifically. Rodent dosing and extract concentration may not translate to the 100mg Corydalis in Nerve Fresh.',
    confidenceLevel: 'Moderate',
    applicablePages: [
      '/blog/nerve-fresh-ingredients-overview',
      '/blog/nerve-fresh-side-effects',
      '/blog/nerve-support-supplements',
    ],
    ymylRisk: 'High',
    complianceNotes:
      'Use "preclinical research suggests potential analgesic properties" — never "proven pain reliever" or "cures nerve pain". Always note the animal-model limitation.',
  },
  {
    id: 'ev-corydalis-002',
    subject: 'Corydalis Yanhusuo',
    claim: 'DHCB shows analgesic effect after nerve injury in preclinical model',
    evidenceType: 'animal_study',
    sourceName: 'PubMed (2019)',
    sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/30622226/',
    accessDate: '2026-05-18',
    whatItSuggests:
      'Reinforces the analgesic potential of dehydrocorybulbine in a neuropathic pain setting (nerve injury model).',
    whatItDoesNotProve:
      'Still preclinical. No human trial on Corydalis for peripheral neuropathy was identified. Does not validate the commercial product.',
    confidenceLevel: 'Moderate',
    applicablePages: [
      '/blog/nerve-fresh-ingredients-overview',
      '/blog/nerve-support-supplements',
    ],
    ymylRisk: 'High',
    complianceNotes:
      'Cite as "additional preclinical evidence". Do not stack multiple animal studies to imply strong human proof.',
  },

  // =========================================================================
  // PRICKLY PEAR
  // =========================================================================
  {
    id: 'ev-prickly-pear-001',
    subject: 'Prickly Pear (Opuntia)',
    claim: 'Prickly Pear has antioxidant and anti-inflammatory properties',
    evidenceType: 'review_article',
    sourceName: 'PubMed (2012)',
    sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/22285760/',
    accessDate: '2026-05-18',
    whatItSuggests:
      'Betalains and other phytochemicals in Opuntia show antioxidant activity in laboratory and some human biomarker studies. May help manage oxidative stress markers.',
    whatItDoesNotProve:
      'No direct evidence that Prickly Pear repairs nerves, reverses neuropathy, or reduces nerve pain in humans. The 45mg dose in Nerve Fresh has not been studied independently.',
    confidenceLevel: 'Low',
    applicablePages: [
      '/blog/nerve-fresh-ingredients-overview',
      '/blog/nerve-support-supplements',
    ],
    ymylRisk: 'Moderate',
    complianceNotes:
      'Use "may support antioxidant balance" or "traditionally consumed for general wellness". Do not claim it treats or prevents any nerve condition.',
  },

  // =========================================================================
  // PASSIONFLOWER
  // =========================================================================
  {
    id: 'ev-passionflower-001',
    subject: 'Passionflower (Passiflora incarnata)',
    claim: 'Passionflower may help with sleep quality and mild anxiety',
    evidenceType: 'needs_verification',
    sourceName: 'NCCIH — National Center for Complementary and Integrative Health',
    sourceUrl: null,
    accessDate: '2026-05-18',
    whatItSuggests:
      'NCCIH states that research on passionflower is limited but suggests some potential for anxiety and possibly increasing total sleep time. Multiple small RCTs exist with mixed but somewhat positive results for sleep/anxiety.',
    whatItDoesNotProve:
      'Does not prove efficacy for neuropathic pain or nerve repair. The evidence for sleep is moderate at best. Individual trial quality varies.',
    confidenceLevel: 'Moderate',
    applicablePages: [
      '/blog/nerve-fresh-ingredients-overview',
      '/blog/nerve-fresh-side-effects',
      '/blog/nerve-support-supplements',
    ],
    ymylRisk: 'Moderate',
    complianceNotes:
      'Can say "may promote relaxation" or "may improve sleep quality according to limited research". Always note NCCIH warns about drowsiness, dizziness, confusion, and potential medication interactions.',
  },
  {
    id: 'ev-passionflower-002',
    subject: 'Passionflower (Passiflora incarnata)',
    claim: 'Passionflower extract shows potential in neuropathic allodynia model',
    evidenceType: 'animal_study',
    sourceName: 'PubMed (2016)',
    sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/26912265/',
    accessDate: '2026-05-18',
    whatItSuggests:
      'Suggests utility of Passiflora incarnata in a neuropathic allodynia model (preclinical).',
    whatItDoesNotProve:
      'Animal model only. Does not validate the commercial formula in human neuropathy. Dose and extract type may differ from the supplement.',
    confidenceLevel: 'Low',
    applicablePages: [
      '/blog/nerve-fresh-ingredients-overview',
    ],
    ymylRisk: 'High',
    complianceNotes:
      'Cite as "early preclinical finding" only. Do not use this to claim passionflower treats neuropathy in humans.',
  },

  // =========================================================================
  // MARSHMALLOW ROOT
  // =========================================================================
  {
    id: 'ev-marshmallow-001',
    subject: 'Marshmallow Root (Althaea officinalis)',
    claim: 'Marshmallow root has anti-inflammatory and antioxidant properties',
    evidenceType: 'in_vitro',
    sourceName: 'PubMed (2020 / 2011)',
    sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/32256361/',
    accessDate: '2026-05-18',
    whatItSuggests:
      'In vitro and review data support general anti-inflammatory and mucosal-soothing properties. Traditionally used for throat and gut irritation, not nerve conditions.',
    whatItDoesNotProve:
      'No evidence that marshmallow root supports nerve health, repairs peripheral nerves, or alleviates neuropathic pain. Its inclusion in a "nerve" formula lacks direct published justification.',
    confidenceLevel: 'Low',
    applicablePages: [
      '/blog/nerve-fresh-ingredients-overview',
      '/blog/nerve-support-supplements',
    ],
    ymylRisk: 'Moderate',
    complianceNotes:
      'Use "traditionally known for soothing properties" or "may support general anti-inflammatory balance". Do NOT connect it to nerve repair or nerve pain relief.',
  },

  // =========================================================================
  // CALIFORNIA POPPY
  // =========================================================================
  {
    id: 'ev-california-poppy-001',
    subject: 'California Poppy (Eschscholzia californica)',
    claim: 'California Poppy has sedative and mild analgesic properties',
    evidenceType: 'animal_study',
    sourceName: 'PubMed (1991 / 2001)',
    sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/1680240/',
    accessDate: '2026-05-18',
    whatItSuggests:
      'Preclinical and mechanistic studies support traditional use as a mild sedative and relaxant. Contains alkaloids that may interact with GABAergic and opioid-adjacent pathways, but it does NOT contain opiates.',
    whatItDoesNotProve:
      'No clinical evidence for neuropathic pain specifically. Sedative effect may cause drowsiness — this is a side effect, not an unintended consequence. No human RCT for nerve conditions.',
    confidenceLevel: 'Low',
    applicablePages: [
      '/blog/nerve-fresh-ingredients-overview',
      '/blog/nerve-fresh-side-effects',
      '/blog/nerve-support-supplements',
    ],
    ymylRisk: 'Moderate',
    complianceNotes:
      'Describe as "traditionally used as a mild relaxant". Note it may cause sleepiness. Do NOT frame the drowsiness as "intended functionality" — be transparent that it is a potential side effect.',
  },

  // =========================================================================
  // REFUND POLICY / OFFICIAL ORDERING
  // =========================================================================
  {
    id: 'ev-refund-001',
    subject: 'Nerve Fresh Refund Policy and Official Ordering',
    claim: 'Nerve Fresh offers a 180-day money-back guarantee when purchased through the official site',
    evidenceType: 'manufacturer_claim',
    sourceName: 'Nerve Fresh Official Checkout / Sales Page',
    sourceUrl: null,
    accessDate: '2026-05-18',
    whatItSuggests:
      'The manufacturer states a 180-day refund window for purchases made through the official checkout. The product is sold via ClickBank, which has its own refund mechanisms. Multiple "official" domains exist in SERP, creating confusion for buyers.',
    whatItDoesNotProve:
      'We could not independently verify how consistently the refund policy is honored for all customers. The existence of multiple "official" domains raises buyer-safety concerns.',
    confidenceLevel: 'Moderate',
    applicablePages: [
      '/',
      '/blog/is-nerve-fresh-a-scam-or-legit',
      '/blog/nerve-fresh-customer-reviews',
    ],
    ymylRisk: 'Moderate',
    complianceNotes:
      'Always recommend purchasing through the official manufacturer site. Note ClickBank as the payment processor. Warn about unofficial clones and third-party sellers.',
  },

  // =========================================================================
  // SIDE EFFECT: DROWSINESS
  // =========================================================================
  {
    id: 'ev-side-effect-drowsiness-001',
    subject: 'Nerve Fresh Side Effect: Drowsiness',
    claim: 'The formula contains multiple calming/sedative botanicals that may cause drowsiness',
    evidenceType: 'review_article',
    sourceName: 'NCCIH (Passionflower) + PubMed (California Poppy) + Traditional Use Literature',
    sourceUrl: null,
    accessDate: '2026-05-18',
    whatItSuggests:
      'At least three ingredients (Passionflower, California Poppy, and potentially Corydalis) have documented calming or sedative effects. NCCIH specifically warns that passionflower may cause drowsiness, dizziness, and confusion. This makes drowsiness a plausible and expected effect.',
    whatItDoesNotProve:
      'The exact incidence or severity of drowsiness from the specific Nerve Fresh formula is unknown — no adverse event data from the manufacturer was publicly found.',
    confidenceLevel: 'Moderate',
    applicablePages: [
      '/',
      '/blog/nerve-fresh-side-effects',
      '/blog/nerve-fresh-ingredients-overview',
    ],
    ymylRisk: 'High',
    complianceNotes:
      'Do NOT frame drowsiness as "intended functionality" — be transparent that it is a potential side effect. Warn users who operate vehicles, take sedatives, or use sleep medications. Recommend evening use and medical consultation.',
  },

  // =========================================================================
  // MEDICATION INTERACTION CONCERN
  // =========================================================================
  {
    id: 'ev-interaction-001',
    subject: 'Nerve Fresh Medication Interaction Concern',
    claim: 'Herbal ingredients in Nerve Fresh may interact with prescription medications',
    evidenceType: 'regulatory_source',
    sourceName: 'NCCIH + General Pharmacology Literature',
    sourceUrl: null,
    accessDate: '2026-05-18',
    whatItSuggests:
      'NCCIH warns that herbal supplements can interact with prescribed medications. Specific concerns for Nerve Fresh ingredients include: (1) Passionflower/California Poppy with sedatives, anesthesia, or sleep meds — additive sedation; (2) Prickly Pear with blood sugar medications — potential hypoglycemia; (3) Corydalis with blood thinners — potential interaction. Older adults (the primary persona) are more likely to be on multiple medications.',
    whatItDoesNotProve:
      'Specific interaction studies for the Nerve Fresh formula were not found. Interactions are inferred from individual ingredient profiles, not tested as a combined formula.',
    confidenceLevel: 'Moderate',
    applicablePages: [
      '/blog/nerve-fresh-side-effects',
      '/blog/nerve-fresh-ingredients-overview',
      '/blog/nerve-support-supplements',
    ],
    ymylRisk: 'Critical',
    complianceNotes:
      'Always include a clear "talk to your doctor" advisory, especially for users on gabapentin, pregabalin, warfarin, diabetes medications, or sedatives. This is non-negotiable for YMYL compliance.',
  },

  // =========================================================================
  // FINISHED-FORMULA CLINICAL EVIDENCE LIMITATION
  // =========================================================================
  {
    id: 'ev-formula-limitation-001',
    subject: 'Finished-Formula Clinical Evidence Limitation',
    claim: 'No publicly available clinical trial exists for the complete Nerve Fresh formula',
    evidenceType: 'needs_verification',
    sourceName: 'PubMed / ClinicalTrials.gov / Manufacturer Public Materials',
    sourceUrl: null,
    accessDate: '2026-05-18',
    whatItSuggests:
      'Despite marketing language suggesting extensive research, no public clinical trial of the finished Nerve Fresh formula (all 5 ingredients combined) was found on PubMed, ClinicalTrials.gov, or any peer-reviewed source. The "23 studies" referenced in some marketing materials could not be verified through a public bibliography.',
    whatItDoesNotProve:
      'This does not prove the product is ineffective or harmful — only that publicly available scientific validation of the finished formula is absent. Individual ingredient evidence exists at varying levels (mostly preclinical).',
    confidenceLevel: 'Unverified',
    applicablePages: [
      '/',
      '/blog/nerve-fresh-ingredients-overview',
      '/blog/is-nerve-fresh-a-scam-or-legit',
      '/blog/nerve-fresh-side-effects',
      '/blog/nerve-fresh-customer-reviews',
      '/blog/nerve-support-supplements',
    ],
    ymylRisk: 'Critical',
    complianceNotes:
      'This is the single most important compliance note. NEVER say "clinically proven" for the finished formula. Use "ingredient-level research exists, but the combined formula has not been tested in a published clinical trial". This record must be referenced on every BOFU page.',
  },
];
