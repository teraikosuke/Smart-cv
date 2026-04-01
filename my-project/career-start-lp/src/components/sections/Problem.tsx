
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Problem = () => {
    const problems = [
        "自分に向いている仕事がわからない",
        "未経験からでも正社員になれるか不安",
        "面接が苦手でなかなか受からない",
        "ブラック企業には入社したくない",
        "やりたいことが見つからない"
    ];

    return (
        <section className="py-20 bg-[#2d3770] text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                    こんな<span className="text-yellow-400">お悩み</span>ありませんか？
                </h2>

                <div className="max-w-2xl mx-auto space-y-4">
                    {problems.map((problem, index) => (
                        <div key={index} className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
                            <CheckCircle2 className="text-yellow-400 shrink-0" size={24} />
                            <span className="text-lg font-bold">{problem}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
