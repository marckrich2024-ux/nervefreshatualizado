import React from 'react';
import { Mail, Clock, MapPin } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <h1 className="font-heading text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        We value your feedback and are here to assist with any inquiries regarding our reviews or website content. Please verify that your question is related to "Health Journal Daily" and not a specific product manufacturer.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="bg-brand-green/10 p-3 rounded-lg mr-4">
                                <Mail className="w-6 h-6 text-brand-green" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Email Us</h3>
                                <p className="text-gray-600 mb-1">For general inquiries and support:</p>
                                <a href="mailto:support@healthjournaldaily.com" className="text-brand-green font-bold hover:underline">
                                    support@healthjournaldaily.com
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
                                    We aim to respond to all legitimate business inquiries within <strong className="text-gray-900">24-48 business hours</strong>.
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

                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                    <h3 className="font-bold text-xl text-gray-900 mb-4">Product Support</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                        Please note that we are an independent review publication. If you have questions regarding a specific order, shipping, or refund for "Nerve Fresh," please contact the official manufacturer directly.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                        <p className="font-bold text-gray-800 text-sm mb-2">For Nerve Fresh Orders:</p>
                        <p className="text-xs text-gray-500">
                            Please refer to your order confirmation email for the direct customer support link of the vendor (e.g., BuyGoods, ClickBank).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
