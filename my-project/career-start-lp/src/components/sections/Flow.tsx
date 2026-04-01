
import React from 'react';

export const Flow = () => {
    const steps = [
        { title: "会員登録", desc: "まずは無料登録。1分で完了します。" },
        { title: "面談・相談", desc: "アドバイザーが希望をヒアリングします。" },
        { title: "求人紹介・面接", desc: "あなたに合った企業をご紹介。面接対策も。" },
        { title: "内定・入社", desc: "条件交渉などもサポートします。" }
    ];

    return (
        <section className="py-20 bg-blue-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">
                    ご利用の<span className="text-[--color-career-blue-start]">流れ</span>
                </h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Desktop Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2"></div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center bg-white md:bg-transparent p-6 md:p-0 rounded-xl shadow-sm md:shadow-none">
                                <div className="w-12 h-12 bg-[--color-career-blue-start] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg z-10">
                                    {index + 1}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
