import React from 'react';
import { Search, MessageSquare, ClipboardCheck, AlertTriangle } from 'lucide-react';

const TrustBar = () => {
    return (
        <section className="bg-slate-soft py-4 border-y border-slate-200">
            <div className="max-w-[1140px] mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {/* FDA */}
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-xs border border-blue-200">
                            FDA
                        </div>
                        <span className="font-sans font-medium text-[12px] md:text-[13px] text-text-main leading-tight">
                            FDA Registered<br />Facility
                        </span>
                    </div>

                    {/* GMP */}
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold text-xs border border-green-200">
                            GMP
                        </div>
                        <span className="font-sans font-medium text-[12px] md:text-[13px] text-text-main leading-tight">
                            GMP Certified<br />Manufacturing
                        </span>
                    </div>

                    {/* Guarantee */}
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 border border-yellow-200">
                            <ClipboardCheck className="w-4 h-4" />
                        </div>
                        <span className="font-sans font-medium text-[12px] md:text-[13px] text-text-main leading-tight">
                            180-Day Money<br />Back Guarantee
                        </span>
                    </div>

                    {/* Editorial */}
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 border border-slate-300">
                            <Search className="w-4 h-4" />
                        </div>
                        <span className="font-sans font-medium text-[11px] md:text-[12px] text-text-main leading-tight text-center md:text-left">
                            Editorial review based on<br />ingredient evidence & safety
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
