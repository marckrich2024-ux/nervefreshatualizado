import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl font-bold text-gray-900 mb-4">Health Journal Daily <span className="text-brand-green">Blog</span></h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Latest research, tips, and deep dives into nerve health and natural supplementation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                            <div className="h-48 overflow-hidden relative group">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                                    <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                                </div>
                                <h2 className="font-heading text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-brand-green transition-colors">
                                    <Link to={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-brand-green font-bold text-sm hover:underline">
                                        Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
