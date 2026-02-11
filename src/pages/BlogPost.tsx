import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ExternalLink } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEOHead from '../components/SEOHead';

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

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const OFFER_URL = "https://secure.nervefresh.com/index-is?&shield=4738aggfr4rkiymitn38phqims";

    return (
        <div className="bg-white min-h-screen pb-20">
            <SEOHead
                title={`${post.title} - Health Journal Daily`}
                description={post.excerpt}
                image={post.image}
                type="article"
            />
            {/* Header / Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-200 py-8">
                <div className="max-w-3xl mx-auto px-4">
                    <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-brand-green text-sm font-medium mb-4 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                    </Link>
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                        {post.title}
                    </h1>
                    <div className="flex items-center text-sm text-gray-500 space-x-6">
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</span>
                        <span className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-12">
                {/* Content */}
                <article className="prose prose-lg prose-green mx-auto text-gray-800 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                {/* Sidebar / CTA Injection */}
                <div className="mt-16 p-8 bg-green-50 rounded-2xl border border-green-100 text-center">
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                        Interested in Nerve Fresh?
                    </h3>
                    <p className="text-gray-700 mb-8 max-w-lg mx-auto">
                        Read our comprehensive 2026 review to see why we rated it #1 for nerve support and ingredient transparency.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            to="/"
                            className="bg-white text-green-700 border-2 border-green-600 font-bold py-3 px-8 rounded-lg hover:bg-green-50 transition-colors w-full md:w-auto"
                        >
                            Read Full Review
                        </Link>
                        <a
                            href={OFFER_URL}
                            className="bg-brand-green text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-darkGreen transition-colors shadow-lg w-full md:w-auto flex items-center justify-center"
                        >
                            Check Availability <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
