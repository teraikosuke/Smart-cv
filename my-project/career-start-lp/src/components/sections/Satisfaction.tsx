
import React from 'react';
import { motion } from 'framer-motion';

export const Satisfaction = () => {
    return (
        <section className="py-20 bg-blue-50 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">
                    <span className="text-[--color-career-blue-start]">高い満足度</span>の理由
                </h2>

                <div className="relative w-64 h-64 mx-auto mb-8">
                    {/* Animated Donut Chart Representation */}
                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                        <motion.circle
                            cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" strokeWidth="10"
                            strokeDasharray="283"
                            strokeDashoffset="283"
                            whileInView={{ strokeDashoffset: 14 }} // 95% filled
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ed9f09" />
                                <stop offset="100%" stopColor="#e82c03" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-gray-500 font-bold text-sm">利用者満足度</span>
                        <span className="text-5xl font-extrabold text-[#e82c03]">96<span className="text-2xl">%</span></span>
                    </div>
                </div>

                <p className="text-lg font-bold text-gray-700">
                    多くの方に支持されています！
                </p>
            </div>
        </section>
    );
};
