// =============================================================================
// Keyword Map — Phase 3 Operational Infrastructure
// Health Journal Daily / Nerve Fresh Ecosystem
// Created: 2026-05-18
// =============================================================================
//
// PURPOSE:
// Maps every target keyword to its cluster, volume, intent, funnel stage,
// priority, YMYL risk, target URL, and recommended format. This drives
// editorial planning, internal linking, and content prioritization.
//
// VOLUME SOURCE:
// Google Keyword Planner (US market, validated May 2026).
// Ranges use Google's standard buckets.
// =============================================================================

export type VolumeRange =
  | '0-10'
  | '10-100'
  | '100-1K'
  | '1K-10K'
  | '10K-100K'
  | '100K+';

export type SearchIntent =
  | 'commercial_investigation'
  | 'transactional'
  | 'informational'
  | 'navigational';

export type FunnelStage = 'TOFU' | 'MOFU' | 'BOFU';
export type Priority = 'P1' | 'P2' | 'P3';
export type YmylRisk = 'Critical' | 'High' | 'Moderate' | 'Low';

export type KeywordCluster =
  | 'product'
  | 'comparison'
  | 'symptom'
  | 'solution'
  | 'ingredient'
  | 'safety';

export interface KeywordEntry {
  keyword: string;
  cluster: KeywordCluster;
  volumeRange: VolumeRange;
  intent: SearchIntent;
  funnelStage: FunnelStage;
  priority: Priority;
  ymylRisk: YmylRisk;
  targetUrl: string;
  recommendedFormat: string;
  notes: string;
}

export const keywordMap: KeywordEntry[] = [
  // =========================================================================
  // CLUSTER: PRODUCT (BOFU)
  // =========================================================================
  {
    keyword: 'nerve fresh review',
    cluster: 'product',
    volumeRange: '100-1K',
    intent: 'commercial_investigation',
    funnelStage: 'BOFU',
    priority: 'P1',
    ymylRisk: 'High',
    targetUrl: '/',
    recommendedFormat: 'Editorial Review (Pillar Page)',
    notes:
      'Home is the pillar page. Do NOT create a duplicate /reviews/nerve-fresh to avoid cannibalization.',
  },
  {
    keyword: 'nerve fresh ingredients',
    cluster: 'product',
    volumeRange: '100-1K',
    intent: 'commercial_investigation',
    funnelStage: 'BOFU',
    priority: 'P1',
    ymylRisk: 'High',
    targetUrl: '/blog/nerve-fresh-ingredients-overview',
    recommendedFormat: 'Ingredients Deep Dive + Evidence Matrix',
    notes:
      'Link every ingredient to its Evidence Database entry. Include dose, evidence level, and safety note.',
  },
  {
    keyword: 'nerve fresh scam',
    cluster: 'product',
    volumeRange: '10-100',
    intent: 'commercial_investigation',
    funnelStage: 'BOFU',
    priority: 'P1',
    ymylRisk: 'High',
    targetUrl: '/blog/is-nerve-fresh-a-scam-or-legit',
    recommendedFormat: 'Scam Analysis / Fact Check',
    notes:
      'Checklist format: what we verified, what we could not verify, red flags to watch.',
  },
  {
    keyword: 'nerve fresh side effects',
    cluster: 'product',
    volumeRange: '10-100',
    intent: 'commercial_investigation',
    funnelStage: 'BOFU',
    priority: 'P1',
    ymylRisk: 'Critical',
    targetUrl: '/blog/nerve-fresh-side-effects',
    recommendedFormat: 'Safety / Side Effects Page',
    notes:
      'YMYL Critical — must include medication interaction warnings, drowsiness, and "talk to your doctor" advisory.',
  },
  {
    keyword: 'nerve fresh complaints',
    cluster: 'product',
    volumeRange: '10-100',
    intent: 'commercial_investigation',
    funnelStage: 'BOFU',
    priority: 'P1',
    ymylRisk: 'High',
    targetUrl: '/blog/nerve-fresh-customer-reviews',
    recommendedFormat: 'Public Feedback Aggregation',
    notes:
      'Merge "complaints" and "customer reviews" intent into one page to avoid thin content / cannibalization.',
  },
  {
    keyword: 'nerve fresh customer reviews',
    cluster: 'product',
    volumeRange: '10-100',
    intent: 'commercial_investigation',
    funnelStage: 'BOFU',
    priority: 'P1',
    ymylRisk: 'High',
    targetUrl: '/blog/nerve-fresh-customer-reviews',
    recommendedFormat: 'Public Feedback Aggregation',
    notes:
      'Same target as "complaints". One page, two keyword intents. Show methodology for how feedback was gathered.',
  },
  {
    keyword: 'nerve fresh price',
    cluster: 'product',
    volumeRange: '0-10',
    intent: 'transactional',
    funnelStage: 'BOFU',
    priority: 'P2',
    ymylRisk: 'Moderate',
    targetUrl: '/',
    recommendedFormat: 'Section within home / future dedicated page',
    notes:
      'Low volume — address within the home page pricing section for now. Can be split later if volume grows.',
  },
  {
    keyword: 'nerve fresh official website',
    cluster: 'product',
    volumeRange: '10-100',
    intent: 'navigational',
    funnelStage: 'BOFU',
    priority: 'P2',
    ymylRisk: 'Moderate',
    targetUrl: '/',
    recommendedFormat: 'Section within home / scam page',
    notes:
      'Address in the "where to buy safely" section of home and scam page. Multiple fake "official" domains exist in SERP.',
  },
  {
    keyword: 'does nerve fresh work',
    cluster: 'product',
    volumeRange: '10-100',
    intent: 'commercial_investigation',
    funnelStage: 'BOFU',
    priority: 'P2',
    ymylRisk: 'High',
    targetUrl: '/',
    recommendedFormat: 'Section within home review',
    notes:
      'Answer within the "Quick Verdict" and "What I Could Verify" sections of the home page.',
  },
  {
    keyword: 'nerve fresh refund policy',
    cluster: 'product',
    volumeRange: '0-10',
    intent: 'transactional',
    funnelStage: 'BOFU',
    priority: 'P3',
    ymylRisk: 'Moderate',
    targetUrl: '/',
    recommendedFormat: 'FAQ section of home page',
    notes: 'Very low volume. Cover in FAQ. Do not create a standalone page.',
  },

  // =========================================================================
  // CLUSTER: COMPARISON (MOFU/BOFU)
  // =========================================================================
  {
    keyword: 'nerve support supplements',
    cluster: 'comparison',
    volumeRange: '1K-10K',
    intent: 'commercial_investigation',
    funnelStage: 'MOFU',
    priority: 'P1',
    ymylRisk: 'High',
    targetUrl: '/blog/nerve-support-supplements',
    recommendedFormat: 'Editorial Buyer Guide / Listicle',
    notes:
      'High-volume MOFU keyword. Safety-first buyer guide with tiers and caution notes. Do NOT rank products by "effectiveness" — rank by buyer profile fit.',
  },
  {
    keyword: 'best nerve support supplements',
    cluster: 'comparison',
    volumeRange: '10-100',
    intent: 'commercial_investigation',
    funnelStage: 'MOFU',
    priority: 'P1',
    ymylRisk: 'High',
    targetUrl: '/blog/nerve-support-supplements',
    recommendedFormat: 'Editorial Buyer Guide / Listicle',
    notes: 'Secondary keyword for the same page as "nerve support supplements".',
  },
  {
    keyword: 'supplements for nerve support',
    cluster: 'comparison',
    volumeRange: '1K-10K',
    intent: 'informational',
    funnelStage: 'MOFU',
    priority: 'P1',
    ymylRisk: 'High',
    targetUrl: '/blog/nerve-support-supplements',
    recommendedFormat: 'Educational Buyer Guide',
    notes: 'Informational variant of the same intent. Same target page.',
  },
  {
    keyword: 'nerve fresh vs nerve control 911',
    cluster: 'comparison',
    volumeRange: '0-10',
    intent: 'commercial_investigation',
    funnelStage: 'BOFU',
    priority: 'P2',
    ymylRisk: 'High',
    targetUrl: '/blog/nerve-fresh-vs-nerve-control-911',
    recommendedFormat: 'Comparison Page',
    notes: 'Already exists as a blog post. Refresh and improve with evidence matrix.',
  },
  {
    keyword: 'nerve fresh vs nervive',
    cluster: 'comparison',
    volumeRange: '0-10',
    intent: 'commercial_investigation',
    funnelStage: 'BOFU',
    priority: 'P2',
    ymylRisk: 'High',
    targetUrl: '/blog/nerve-fresh-vs-nervive',
    recommendedFormat: 'Comparison Page',
    notes:
      'Herb-first (Nerve Fresh) vs ALA/B-vitamin (Nervive) is a strong angle for differentiation.',
  },

  // =========================================================================
  // CLUSTER: SYMPTOM (TOFU/MOFU)
  // =========================================================================
  {
    keyword: 'burning feet at night',
    cluster: 'symptom',
    volumeRange: '1K-10K',
    intent: 'informational',
    funnelStage: 'TOFU',
    priority: 'P1',
    ymylRisk: 'Critical',
    targetUrl: '/blog/burning-feet-at-night',
    recommendedFormat: 'Symptom Explainer + Next Steps',
    notes:
      'YMYL Critical — compete with Mayo, NIDDK. Must not diagnose. Must include "when to see a doctor". Link to supplement consideration only at end.',
  },
  {
    keyword: 'tingling feet at night',
    cluster: 'symptom',
    volumeRange: '1K-10K',
    intent: 'informational',
    funnelStage: 'TOFU',
    priority: 'P1',
    ymylRisk: 'Critical',
    targetUrl: '/blog/tingling-feet-at-night',
    recommendedFormat: 'Symptom Explainer',
    notes: 'Same approach as burning feet. Persona language match is critical.',
  },
  {
    keyword: 'numb toes causes',
    cluster: 'symptom',
    volumeRange: '1K-10K',
    intent: 'informational',
    funnelStage: 'TOFU',
    priority: 'P1',
    ymylRisk: 'Critical',
    targetUrl: '/blog/numb-toes-causes',
    recommendedFormat: 'Causes Page',
    notes: 'Older-adult angle. List common causes, red flags, when to get checked.',
  },
  {
    keyword: 'pins and needles in feet',
    cluster: 'symptom',
    volumeRange: '1K-10K',
    intent: 'informational',
    funnelStage: 'TOFU',
    priority: 'P1',
    ymylRisk: 'Critical',
    targetUrl: '/blog/pins-and-needles-in-feet',
    recommendedFormat: 'Symptom Explainer',
    notes: 'High volume. Strong persona match. Focus on language matching for 50+ audience.',
  },

  // =========================================================================
  // CLUSTER: INGREDIENT (MOFU)
  // =========================================================================
  {
    keyword: 'passionflower for sleep',
    cluster: 'ingredient',
    volumeRange: '1K-10K',
    intent: 'informational',
    funnelStage: 'MOFU',
    priority: 'P2',
    ymylRisk: 'Moderate',
    targetUrl: '/blog/passionflower-for-sleep',
    recommendedFormat: 'Ingredient Evidence Page',
    notes:
      'High-trust evidence page. NCCIH as primary source. Link to Nerve Fresh ingredients overview at end.',
  },
  {
    keyword: 'prickly pear benefits',
    cluster: 'ingredient',
    volumeRange: '1K-10K',
    intent: 'informational',
    funnelStage: 'TOFU',
    priority: 'P2',
    ymylRisk: 'Moderate',
    targetUrl: '/blog/prickly-pear-benefits',
    recommendedFormat: 'Ingredient Evidence Page',
    notes: 'Indirect evidence only for nerve health. Focus on antioxidant / general wellness angle.',
  },
  {
    keyword: 'marshmallow root benefits',
    cluster: 'ingredient',
    volumeRange: '10K-100K',
    intent: 'informational',
    funnelStage: 'TOFU',
    priority: 'P2',
    ymylRisk: 'Moderate',
    targetUrl: '/blog/marshmallow-root-benefits',
    recommendedFormat: 'Ingredient Evidence Page',
    notes:
      'Highest volume ingredient keyword (10K-100K). Huge topical authority opportunity even though nerve-specific evidence is weak.',
  },
  {
    keyword: 'california poppy supplement',
    cluster: 'ingredient',
    volumeRange: '100-1K',
    intent: 'informational',
    funnelStage: 'MOFU',
    priority: 'P3',
    ymylRisk: 'Moderate',
    targetUrl: '/blog/california-poppy-supplement',
    recommendedFormat: 'Ingredient Evidence Page',
    notes: 'Lower volume but supports topical depth. Focus on safety / sedative profile.',
  },

  // =========================================================================
  // CLUSTER: SAFETY
  // =========================================================================
  {
    keyword: 'are supplements fda approved',
    cluster: 'safety',
    volumeRange: '100-1K',
    intent: 'informational',
    funnelStage: 'TOFU',
    priority: 'P2',
    ymylRisk: 'High',
    targetUrl: '/blog/are-supplements-fda-approved',
    recommendedFormat: 'Compliance Explainer',
    notes:
      'Essential trust/authority page. Explain "FDA registered facility" ≠ "FDA approved product". Links to scam page and disclaimer.',
  },
  {
    keyword: 'neuropathy supplement',
    cluster: 'safety',
    volumeRange: '1K-10K',
    intent: 'informational',
    funnelStage: 'MOFU',
    priority: 'P2',
    ymylRisk: 'High',
    targetUrl: '/blog/nerve-support-supplements',
    recommendedFormat: 'Buyer Guide',
    notes: 'Direct to the nerve support supplements buyer guide. Variant of same intent.',
  },
];
