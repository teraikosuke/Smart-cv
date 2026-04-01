
import React from 'react';

export const SuccessRate = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
            <div className="container mx-auto px-4 text-center">
                <div className="inline-block relative">
                    <span className="block text-xl font-bold text-gray-600 mb-2">内定率</span>
                    <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[--color-career-orange-start] to-[--color-career-orange-end] tracking-tighter">
                        90<span className="text-4xl md:text-6xl">%</span>
                    </div>
                    <div className="absolute top-0 right-0 transform translate-x-full translate-y-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                        業界トップクラス
                    </div>
                </div>
                <p className="mt-6 text-gray-600 font-bold">
                    マンツーマンの面接対策で、高い内定率を実現しています。
                </p>
            </div>
        </section>
    );
};
