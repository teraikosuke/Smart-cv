
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative w-full aspect-[16/12] sm:aspect-[16/9] lg:aspect-[2/1] bg-gray-100 flex items-center overflow-hidden">
            {/* Background Gradient & Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-[--color-career-light-blue] z-0">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1779cd 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            </div>

            {/* Placeholder for Hero Image */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gray-200/50 skew-x-[-12deg] translate-x-20 z-0">
                {/* If we had an image, it would go here */}
                <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold text-4xl opacity-20 transform skew-x-[12deg]">
                    Professional Image
                </div>
            </div>

            <div className="relative z-10 w-full px-6 lg:px-12 py-12 lg:w-2/3">
                <div className="inline-block bg-white/80 backdrop-blur-sm border border-[--color-career-blue-start] text-[--color-career-blue-start] px-4 py-1 rounded-full text-sm font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    \ 20代・第二新卒の転職なら /
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#222] leading-[1.2] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                    <span className="text-[--color-career-blue-start]">未経験</span>から<br />
                    <span className="bg-gradient-to-r from-[--color-career-orange-start] to-[--color-career-orange-end] text-transparent bg-clip-text">正社員</span>に就職！
                </h1>

                <p className="text-lg text-gray-700 mb-8 max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                    マンツーマンのサポートで、<br className="sm:hidden" />あなたの適性に合った企業をご紹介。<br />
                    最短2週間で内定獲得も可能です。
                </p>

                <button className="lg:hidden w-full sm:w-auto py-4 px-8 rounded-full bg-gradient-to-r from-[--color-career-orange-start] to-[--color-career-orange-end] text-white font-bold shadow-lg flex items-center justify-center gap-2">
                    まずは無料相談 <ArrowRight size={20} />
                </button>
            </div>
        </section>
    );
};
