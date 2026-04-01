
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    { q: "本当に無料ですか？", a: "はい、相談から内定、入社まで一切費用はかかりません。" },
    { q: "未経験でも大丈夫ですか？", a: "はい、ご紹介する求人の多くが未経験歓迎です。" },
    { q: "地方在住でも利用できますか？", a: "はい、オンライン面談や電話相談も可能です。" },
    { q: "今すぐ転職しなくても相談できますか？", a: "もちろんです。まずは情報収集やお悩み相談だけでも大歓迎です。" },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-2xl">
                <h2 className="text-3xl font-bold text-center mb-12">
                    よくある<span className="text-[--color-career-blue-start]">ご質問</span>
                </h2>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left font-bold text-gray-800"
                            >
                                <span>Q. {item.q}</span>
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            {openIndex === index && (
                                <div className="p-4 bg-white text-gray-600 text-sm border-t border-gray-100 animate-in fade-in slide-in-from-top-1">
                                    A. {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
