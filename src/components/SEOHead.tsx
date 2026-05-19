
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    type?: 'website' | 'article';
    image?: string;
    faqs?: Array<{ question: string; answer: string }>;
    schema?: Record<string, any>;
    noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title = "Nerve Fresh Review: Scam, Side Effects, Ingredients & What We Found",
    description = "Independent editorial review of Nerve Fresh. We look at ingredients, side effects, public feedback, refund terms, and what claims could not be verified.",
    canonicalUrl = `${window.location.origin}${window.location.pathname}`,
    type = 'website',
    image = "https://www.the-health-journal.com/product.jpg",
    faqs,
    schema,
    noindex = false
}) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {noindex ? <meta name="robots" content="noindex, follow" /> : <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Custom Schema */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}


        </Helmet>
    );
};

export default SEOHead;
