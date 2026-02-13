import React, { useEffect, useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ExternalLink, ChevronRight, List } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEOHead from '../components/SEOHead';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.slug === slug);

    // Tracking for Blog View
    useEffect(() => {
        if (post && window.dataLayer) {
            window.dataLayer.push({
                event: 'blog_view',
                post_title: post.title,
                post_id: post.id
            });
        }
    }, [post]);

    // Parse Content for TOC and IDs
    const { modifiedContent, toc } = useMemo(() => {
        if (!post) return { modifiedContent: '', toc: [] };
        const tocItems: { id: string; title: string }[] = [];
        // Regex to find H2 tags and inject IDs
        const contentWithIds = post.content.replace(/<h2(.*?)>(.*?)<\/h2>/g, (match, attrs, title) => {
            // Strip HTML tags from title for the ID
            const cleanTitle = title.replace(/<[^>]*>/g, '');
            const id = cleanTitle.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
            tocItems.push({ id, title: cleanTitle });
            return `<h2 id="${id}"${attrs} class="scroll-mt-24 text-2xl font-bold mt-12 mb-6 text-gray-900">${title}</h2>`;
        });
        return { modifiedContent: contentWithIds, toc: tocItems };
    }, [post]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const OFFER_URL = "https://secure.nervefresh.com/index-is?&shield=4738aggfr4rkiymitn38phqims";

    // Related Articles Logic
    const relatedPosts = blogPosts
        .filter(p => p.id !== post.id)
        .slice(0, 3);

    // Schema Generator
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": [
            `https://www.the-health-journal.com${post.image}`
        ],
        "datePublished": new Date(post.date).toISOString(),
        "dateModified": new Date().toISOString(), // Assuming current build is modification
        "author": [{
            "@type": "Person",
            "name": post.author,
            "url": "https://www.the-health-journal.com/about/dr-sarah-mitchell"
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Health Journal Daily",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.the-health-journal.com/logo.png"
            }
        },
        "description": post.excerpt
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.the-health-journal.com"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://www.the-health-journal.com/blog"
        }, {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://www.the-health-journal.com/blog/${post.slug}`
        }]
    };

    return (
        <div className="bg-white min-h-screen pb-20">
            <SEOHead
                title={`${post.title} - Health Journal Daily`}
                description={post.excerpt}
                image={post.image}
                type="article"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            {/* Breadcrumb Nav */}
            <nav className="bg-gray-50 border-b border-gray-100 py-3 hidden md:block">
                <div className="max-w-4xl mx-auto px-4 flex items-center text-sm text-gray-500">
                    <Link to="/" className="hover:text-brand-green">Home</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <Link to="/blog" className="hover:text-brand-green">Blog</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-gray-900 truncate max-w-[300px]">{post.title}</span>
                </div>
            </nav>

            {/* Header */}
            <div className="bg-white border-b border-gray-100 pt-10 pb-8">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Clinically Reviewed
                        </span>
                        <span className="text-gray-400 text-sm">5 Min Read</span>
                    </div>

                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center text-sm text-gray-500 space-x-6">
                        <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-gray-400" /> {post.date}
                        </span>
                        <Link to="/about/dr-sarah-mitchell" className="flex items-center hover:text-brand-green transition-colors">
                            <User className="w-4 h-4 mr-2 text-gray-400" />
                            <span className="underline decoration-dotted underline-offset-4">{post.author}</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Main Content Column */}
                <div className="lg:col-span-8 lg:col-start-3">

                    {/* Table of Contents - Mobile & Desktop */}
                    {toc.length > 0 && (
                        <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-100">
                            <div className="flex items-center gap-2 mb-4">
                                <List className="w-5 h-5 text-gray-700" />
                                <h4 className="font-bold text-gray-900">Table of Contents</h4>
                            </div>
                            <ul className="space-y-2">
                                {toc.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            className="text-gray-600 hover:text-brand-green text-sm hover:underline block py-1"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Article Body */}
                    <article className="prose prose-lg prose-green mx-auto text-gray-800 leading-relaxed font-sans">
                        <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />
                    </article>

                    {/* Author Bio Box - Bottom */}
                    <div className="mt-16 bg-slate-50 border-t-4 border-brand-green rounded-lg p-8">
                        <h4 className="font-bold text-gray-900 mb-2">About the Author</h4>
                        <div className="flex items-start gap-4">
                            <div className="flex-1">
                                <p className="font-bold text-lg text-brand-green mb-1">{post.author}</p>
                                <p className="text-sm text-gray-600 mb-4">
                                    Medical Reviewer & Senior Health Editor at Health Journal Daily. Specialized in neurology and integrative medicine.
                                </p>
                                <Link to="/about/dr-sarah-mitchell" className="text-sm font-bold text-gray-900 underline hover:text-brand-green">
                                    View Full Bio & Credentials &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* CTA Injection */}
                    <div className="mt-12 p-8 bg-green-50 rounded-2xl border border-green-100 text-center">
                        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                            Ready to Try Nerve Fresh?
                        </h3>
                        <p className="text-gray-700 mb-8 max-w-lg mx-auto">
                            Join over 14,000 Americans who have found relief with this 100% natural, scientifically backed formula.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <a
                                href={OFFER_URL}
                                className="bg-brand-green text-white font-bold py-4 px-8 rounded-lg hover:bg-brand-darkGreen transition-colors shadow-lg w-full md:w-auto flex items-center justify-center"
                            >
                                Check Availability For {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} <ExternalLink className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">60-Day Money-Back Guarantee included.</p>
                    </div>

                </div>
            </div>

            {/* Related Articles Section */}
            <div className="bg-gray-50 py-16 mt-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Read Next</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedPosts.map((relatedPost) => (
                            <Link to={`/blog/${relatedPost.slug}`} key={relatedPost.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group block">
                                <div className="h-48 bg-gray-200 relative overflow-hidden">
                                    <img src={relatedPost.image} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <p className="text-xs text-brand-green font-bold mb-2 uppercase tracking-wide">Analysis</p>
                                    <h4 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-brand-green transition-colors">
                                        {relatedPost.title}
                                    </h4>
                                    <p className="text-sm text-gray-500 line-clamp-2">
                                        {relatedPost.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogPost;
