
import React from 'react';

export const Solution = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">
                    その悩み、<span className="text-[--color-career-blue-start]">キャリアスタート</span>にお任せください！
                </h2>
                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    プロのアドバイザーが、あなたの就職・転職を徹底的にサポートします。<br />
                    未経験からの正社員就職に特化したノウハウがあります。
                </p>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center">
                            <div className="w-20 h-20 bg-gray-100 rounded-full mb-4 flex items-center justify-center text-3xl">
                                👑
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-[#1779cd]">実績No.1</h3>
                            <p className="text-sm text-gray-500">
                                多くの20代・第二新卒の方に選ばれています。
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
