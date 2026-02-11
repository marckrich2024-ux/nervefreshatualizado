import React, { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

const OFFER_URL = "https://secure.nervefresh.com/index-is?&shield=4738aggfr4rkiymitn38phqims";

const ExitModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShocked, setHasShocked] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShocked && !localStorage.getItem('exit_intent_shown')) {
                setIsVisible(true);
                setHasShocked(true);
                localStorage.setItem('exit_intent_shown', 'true');
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasShocked]);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden relative animate-in zoom-in-95 duration-300">
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 p-1 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-500"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl">⚠️</span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-text-main mb-3">
                        Wait! Don't Miss This
                    </h3>

                    <p className="font-sans text-text-muted mb-8 leading-relaxed">
                        Before you go, check the official availability. Stock levels for Nerve Fresh are currently low due to high demand.
                    </p>

                    <div className="flex flex-col gap-3">
                        <a
                            href={OFFER_URL}
                            onClick={() => setIsVisible(false)}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
                        >
                            Check Availability Now <ExternalLink className="w-4 h-4" />
                        </a>

                        <button
                            onClick={handleClose}
                            className="text-slate-400 text-xs hover:text-slate-600 underline decoration-slate-300 underline-offset-2"
                        >
                            No thanks, I'll pass on this opportunity
                        </button>
                    </div>
                </div>

                <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
                    <p className="text-[10px] text-slate-400">
                        Limited time offer. Availability not guaranteed.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExitModal;
