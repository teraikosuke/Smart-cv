
import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

export const Reasons = () => {
    const reasons = [
        {
            icon: <Target size={48} className="text-[--color-career-orange-start]" />,
            title: "マンツーマンサポート",
            desc: "プロのアドバイザーがあなたの強みを引き出します。"
        },
        {
            icon: <Users size={48} className="text-[--color-career-orange-start]" />,
            title: "厳選された求人",
            desc: "成長企業から安定企業まで、あなたに合った企業を厳選。"
        },
        {
            icon: <TrendingUp size={48} className="text-[--color-career-orange-start]" />,
            title: "入社後も徹底フォロー",
            desc: "就職がゴールではありません。定着するまでサポートします。"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">
                    <span className="text-[--color-career-blue-start]">キャリアスタート</span>が選ばれる3つの理由
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {reasons.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                {item.icon}
                            </div>
                            <div className="text-4xl font-black text-gray-200 mb-2">0{index + 1}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600 px-4">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
