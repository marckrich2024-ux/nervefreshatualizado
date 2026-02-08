import React, { useState } from 'react';
import { Mail, Clock, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message. We will get back to you shortly.");
        // In a real app, this would send data to a backend.
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                    <p className="text-gray-700 mb-8 leading-relaxed">
                        We value your feedback and are here to assist with any inquiries regarding our editorial content. Please note we are an independent publication.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="bg-brand-green/10 p-3 rounded-lg mr-4">
                                <Mail className="w-6 h-6 text-brand-green" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Email Support</h3>
                                <p className="text-gray-600 mb-1">For general inquiries:</p>
                                <a href="mailto:contact@the-health-journal.com" className="text-brand-green font-bold hover:underline">
                                    contact@the-health-journal.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-brand-green/10 p-3 rounded-lg mr-4">
                                <Clock className="w-6 h-6 text-brand-green" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Response Time</h3>
                                <p className="text-gray-600">
                                    We aim to respond to all inquiries within <strong className="text-gray-900">24 business hours</strong>.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-brand-green/10 p-3 rounded-lg mr-4">
                                <MapPin className="w-6 h-6 text-brand-green" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Office</h3>
                                <p className="text-gray-600">
                                    Health Journal Daily<br />
                                    Digital Editorial Team
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-gray-900 mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                                placeholder="Your Name"
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                                placeholder="your@email.com"
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                                placeholder="How can we help you?"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-brand-green hover:bg-brand-darkGreen text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors flex items-center justify-center"
                        >
                            Send Message <Send className="w-4 h-4 ml-2" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
