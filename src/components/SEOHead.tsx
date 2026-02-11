
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    type?: 'website' | 'article';
    image?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
    title = "Nerve Fresh Review (2026): Is It a Scam? My Honest Result",
    description = "Read my honest Nerve Fresh review before you buy. I tested this neuropathy support formula for 90 days. Here are my results.",
    canonicalUrl = window.location.href,
    type = 'website',
    image = "https://www.the-health-journal.com/product.jpg"
}) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
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
        </Helmet>
    );
};

export default SEOHead;
