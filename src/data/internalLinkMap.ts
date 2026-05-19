// =============================================================================
// Internal Link Map — Phase 3 Operational Infrastructure
// Health Journal Daily / Nerve Fresh Ecosystem
// Created: 2026-05-18
// =============================================================================
//
// PURPOSE:
// Defines the internal linking strategy so that every page strengthens the
// hub-and-spoke architecture with the home (Nerve Fresh Review) as the central
// pillar. This ensures link equity flows correctly and Google understands the
// topical relationships between pages.
//
// RULES:
// 1. Home (/) is the primary hub for "nerve fresh review" — all BOFU pages
//    must link back to it.
// 2. Symptom pages link to educational content first, then to the review/
//    ingredient overview at the end (soft commercial bridge).
// 3. Ingredient pages link to the ingredients overview and to the home review.
// 4. Every internal link must use descriptive anchor text — no "click here".
// 5. Prioritize links within the first 50% of content for higher value.
// =============================================================================

export type LinkPriority = 'Critical' | 'High' | 'Medium' | 'Low';

export interface InternalLink {
  id: string;
  sourceUrl: string;
  sourcePage: string;
  destinationUrl: string;
  destinationPage: string;
  anchorText: string;
  usageContext: string;
  priority: LinkPriority;
}

export const internalLinkMap: InternalLink[] = [
  // =========================================================================
  // HOME → BOFU PAGES (Hub → Spokes)
  // =========================================================================
  {
    id: 'link-home-to-ingredients',
    sourceUrl: '/',
    sourcePage: 'Home (Nerve Fresh Review)',
    destinationUrl: '/blog/nerve-fresh-ingredients-overview',
    destinationPage: 'Nerve Fresh Ingredients Overview',
    anchorText: 'detailed ingredients overview',
    usageContext:
      'In the ingredient summary section of the home page, link to the full ingredient deep dive.',
    priority: 'Critical',
  },
  {
    id: 'link-home-to-scam',
    sourceUrl: '/',
    sourcePage: 'Home (Nerve Fresh Review)',
    destinationUrl: '/blog/is-nerve-fresh-a-scam-or-legit',
    destinationPage: 'Is Nerve Fresh a Scam or Legit?',
    anchorText: 'Is Nerve Fresh a scam or legit?',
    usageContext:
      'In the "What I Could Verify" or trust section of the home page.',
    priority: 'Critical',
  },
  {
    id: 'link-home-to-side-effects',
    sourceUrl: '/',
    sourcePage: 'Home (Nerve Fresh Review)',
    destinationUrl: '/blog/nerve-fresh-side-effects',
    destinationPage: 'Nerve Fresh Side Effects',
    anchorText: 'potential side effects and safety notes',
    usageContext:
      'In the safety considerations section of the home page.',
    priority: 'Critical',
  },
  {
    id: 'link-home-to-customer-reviews',
    sourceUrl: '/',
    sourcePage: 'Home (Nerve Fresh Review)',
    destinationUrl: '/blog/nerve-fresh-customer-reviews',
    destinationPage: 'Nerve Fresh Customer Reviews',
    anchorText: 'what public feedback suggests',
    usageContext:
      'In the public feedback summary section of the home page.',
    priority: 'High',
  },
  {
    id: 'link-home-to-nerve-support',
    sourceUrl: '/',
    sourcePage: 'Home (Nerve Fresh Review)',
    destinationUrl: '/blog/nerve-support-supplements',
    destinationPage: 'Nerve Support Supplements Guide',
    anchorText: 'compare nerve support supplements',
    usageContext:
      'In the comparison or alternatives section of the home page.',
    priority: 'High',
  },

  // =========================================================================
  // INGREDIENTS OVERVIEW → HOME + SPOKES
  // =========================================================================
  {
    id: 'link-ingredients-to-home',
    sourceUrl: '/blog/nerve-fresh-ingredients-overview',
    sourcePage: 'Nerve Fresh Ingredients Overview',
    destinationUrl: '/',
    destinationPage: 'Home (Nerve Fresh Review)',
    anchorText: 'full Nerve Fresh review',
    usageContext:
      'In the introduction and conclusion — link back to the main review for the complete editorial verdict.',
    priority: 'Critical',
  },
  {
    id: 'link-ingredients-to-side-effects',
    sourceUrl: '/blog/nerve-fresh-ingredients-overview',
    sourcePage: 'Nerve Fresh Ingredients Overview',
    destinationUrl: '/blog/nerve-fresh-side-effects',
    destinationPage: 'Nerve Fresh Side Effects',
    anchorText: 'side effects and medication interactions',
    usageContext:
      'In the safety section of each ingredient — link to the dedicated side effects page.',
    priority: 'High',
  },
  {
    id: 'link-ingredients-to-nerve-support',
    sourceUrl: '/blog/nerve-fresh-ingredients-overview',
    sourcePage: 'Nerve Fresh Ingredients Overview',
    destinationUrl: '/blog/nerve-support-supplements',
    destinationPage: 'Nerve Support Supplements Guide',
    anchorText: 'how Nerve Fresh compares to other supplements',
    usageContext:
      'In the conclusion — bridge from ingredient analysis to broader comparison.',
    priority: 'Medium',
  },

  // =========================================================================
  // SCAM OR LEGIT → HOME + SAFETY
  // =========================================================================
  {
    id: 'link-scam-to-home',
    sourceUrl: '/blog/is-nerve-fresh-a-scam-or-legit',
    sourcePage: 'Is Nerve Fresh a Scam or Legit?',
    destinationUrl: '/',
    destinationPage: 'Home (Nerve Fresh Review)',
    anchorText: 'our complete Nerve Fresh review',
    usageContext:
      'In the verdict section — direct users to the full review for a comprehensive evaluation.',
    priority: 'Critical',
  },
  {
    id: 'link-scam-to-customer-reviews',
    sourceUrl: '/blog/is-nerve-fresh-a-scam-or-legit',
    sourcePage: 'Is Nerve Fresh a Scam or Legit?',
    destinationUrl: '/blog/nerve-fresh-customer-reviews',
    destinationPage: 'Nerve Fresh Customer Reviews',
    anchorText: 'public customer reviews and feedback',
    usageContext:
      'When discussing verifiable public feedback, link to the dedicated reviews page.',
    priority: 'High',
  },
  {
    id: 'link-scam-to-ingredients',
    sourceUrl: '/blog/is-nerve-fresh-a-scam-or-legit',
    sourcePage: 'Is Nerve Fresh a Scam or Legit?',
    destinationUrl: '/blog/nerve-fresh-ingredients-overview',
    destinationPage: 'Nerve Fresh Ingredients Overview',
    anchorText: 'ingredient transparency and evidence',
    usageContext:
      'When discussing formula credibility in the checklist section.',
    priority: 'Medium',
  },

  // =========================================================================
  // SIDE EFFECTS → HOME + INGREDIENTS
  // =========================================================================
  {
    id: 'link-side-effects-to-home',
    sourceUrl: '/blog/nerve-fresh-side-effects',
    sourcePage: 'Nerve Fresh Side Effects',
    destinationUrl: '/',
    destinationPage: 'Home (Nerve Fresh Review)',
    anchorText: 'complete Nerve Fresh review',
    usageContext:
      'In the introduction — provide context that this is a deep dive on safety from the main review.',
    priority: 'Critical',
  },
  {
    id: 'link-side-effects-to-ingredients',
    sourceUrl: '/blog/nerve-fresh-side-effects',
    sourcePage: 'Nerve Fresh Side Effects',
    destinationUrl: '/blog/nerve-fresh-ingredients-overview',
    destinationPage: 'Nerve Fresh Ingredients Overview',
    anchorText: 'full ingredients overview',
    usageContext:
      'When referencing specific ingredient safety profiles, link to the ingredient overview.',
    priority: 'High',
  },

  // =========================================================================
  // CUSTOMER REVIEWS → HOME + SCAM
  // =========================================================================
  {
    id: 'link-reviews-to-home',
    sourceUrl: '/blog/nerve-fresh-customer-reviews',
    sourcePage: 'Nerve Fresh Customer Reviews',
    destinationUrl: '/',
    destinationPage: 'Home (Nerve Fresh Review)',
    anchorText: 'read the complete Nerve Fresh review',
    usageContext:
      'In the conclusion — direct users to the comprehensive editorial verdict.',
    priority: 'Critical',
  },
  {
    id: 'link-reviews-to-scam',
    sourceUrl: '/blog/nerve-fresh-customer-reviews',
    sourcePage: 'Nerve Fresh Customer Reviews',
    destinationUrl: '/blog/is-nerve-fresh-a-scam-or-legit',
    destinationPage: 'Is Nerve Fresh a Scam or Legit?',
    anchorText: 'our scam analysis and trust checklist',
    usageContext:
      'In the "how to read reviews safely" section — bridge to trust/scam evaluation.',
    priority: 'High',
  },
  {
    id: 'link-reviews-to-nerve-support',
    sourceUrl: '/blog/nerve-fresh-customer-reviews',
    sourcePage: 'Nerve Fresh Customer Reviews',
    destinationUrl: '/blog/nerve-support-supplements',
    destinationPage: 'Nerve Support Supplements Guide',
    anchorText: 'compare with other nerve support supplements',
    usageContext:
      'In the conclusion or alternatives callout — offer comparison for undecided users.',
    priority: 'Medium',
  },

  // =========================================================================
  // NERVE SUPPORT SUPPLEMENTS GUIDE → HOME + COMPARISONS
  // =========================================================================
  {
    id: 'link-nerve-support-to-home',
    sourceUrl: '/blog/nerve-support-supplements',
    sourcePage: 'Nerve Support Supplements Guide',
    destinationUrl: '/',
    destinationPage: 'Home (Nerve Fresh Review)',
    anchorText: 'our detailed Nerve Fresh review',
    usageContext:
      'When Nerve Fresh is mentioned in the guide, link to the full review.',
    priority: 'Critical',
  },
  {
    id: 'link-nerve-support-to-ingredients',
    sourceUrl: '/blog/nerve-support-supplements',
    sourcePage: 'Nerve Support Supplements Guide',
    destinationUrl: '/blog/nerve-fresh-ingredients-overview',
    destinationPage: 'Nerve Fresh Ingredients Overview',
    anchorText: 'Nerve Fresh ingredients breakdown',
    usageContext:
      'In the Nerve Fresh section of the guide, link to the ingredient deep dive.',
    priority: 'High',
  },
  {
    id: 'link-nerve-support-to-side-effects',
    sourceUrl: '/blog/nerve-support-supplements',
    sourcePage: 'Nerve Support Supplements Guide',
    destinationUrl: '/blog/nerve-fresh-side-effects',
    destinationPage: 'Nerve Fresh Side Effects',
    anchorText: 'side effects and safety considerations',
    usageContext:
      'In the safety section of the buyer guide.',
    priority: 'Medium',
  },

  // =========================================================================
  // SYMPTOM PAGES → EDUCATIONAL CONTENT → REVIEW (Soft Bridge)
  // =========================================================================
  {
    id: 'link-burning-feet-to-nerve-support',
    sourceUrl: '/blog/burning-feet-at-night',
    sourcePage: 'Burning Feet at Night',
    destinationUrl: '/blog/nerve-support-supplements',
    destinationPage: 'Nerve Support Supplements Guide',
    anchorText: 'nerve support supplement options',
    usageContext:
      'At the end of the article, in a "What some people try next" section — soft bridge to supplement consideration.',
    priority: 'High',
  },
  {
    id: 'link-burning-feet-to-home',
    sourceUrl: '/blog/burning-feet-at-night',
    sourcePage: 'Burning Feet at Night',
    destinationUrl: '/',
    destinationPage: 'Home (Nerve Fresh Review)',
    anchorText: 'Nerve Fresh review',
    usageContext:
      'Final CTA section only — do not push commercial content in the medical-informational body.',
    priority: 'Medium',
  },
  {
    id: 'link-tingling-feet-to-nerve-support',
    sourceUrl: '/blog/tingling-feet-at-night',
    sourcePage: 'Tingling Feet at Night',
    destinationUrl: '/blog/nerve-support-supplements',
    destinationPage: 'Nerve Support Supplements Guide',
    anchorText: 'supplements people consider for nerve support',
    usageContext:
      'End of article — same soft bridge pattern as burning feet.',
    priority: 'High',
  },
  {
    id: 'link-numb-toes-to-nerve-support',
    sourceUrl: '/blog/numb-toes-causes',
    sourcePage: 'Numb Toes Causes',
    destinationUrl: '/blog/nerve-support-supplements',
    destinationPage: 'Nerve Support Supplements Guide',
    anchorText: 'nerve support supplement guide',
    usageContext:
      'End of article — link from causes exploration to solution consideration.',
    priority: 'High',
  },
  {
    id: 'link-numb-toes-to-home',
    sourceUrl: '/blog/numb-toes-causes',
    sourcePage: 'Numb Toes Causes',
    destinationUrl: '/',
    destinationPage: 'Home (Nerve Fresh Review)',
    anchorText: 'Nerve Fresh review',
    usageContext:
      'Final section only — commercial bridge at the very end.',
    priority: 'Low',
  },

  // =========================================================================
  // CROSS-LINKS BETWEEN BOFU PAGES
  // =========================================================================
  {
    id: 'link-ingredients-to-scam',
    sourceUrl: '/blog/nerve-fresh-ingredients-overview',
    sourcePage: 'Nerve Fresh Ingredients Overview',
    destinationUrl: '/blog/is-nerve-fresh-a-scam-or-legit',
    destinationPage: 'Is Nerve Fresh a Scam or Legit?',
    anchorText: 'scam analysis and trust checklist',
    usageContext:
      'In the conclusion — "Now that you understand the ingredients, you may also want to check our trust analysis."',
    priority: 'Medium',
  },
  {
    id: 'link-side-effects-to-customer-reviews',
    sourceUrl: '/blog/nerve-fresh-side-effects',
    sourcePage: 'Nerve Fresh Side Effects',
    destinationUrl: '/blog/nerve-fresh-customer-reviews',
    destinationPage: 'Nerve Fresh Customer Reviews',
    anchorText: 'what actual users report',
    usageContext:
      'In the "reported effects" section — link to the customer reviews for public anecdotal data.',
    priority: 'Medium',
  },
  {
    id: 'link-customer-reviews-to-side-effects',
    sourceUrl: '/blog/nerve-fresh-customer-reviews',
    sourcePage: 'Nerve Fresh Customer Reviews',
    destinationUrl: '/blog/nerve-fresh-side-effects',
    destinationPage: 'Nerve Fresh Side Effects',
    anchorText: 'side effects and safety notes',
    usageContext:
      'When discussing negative feedback themes, link to the dedicated safety page.',
    priority: 'Medium',
  },
];
