
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const SidebarForm = ({ isMobile = false }: { isMobile?: boolean }) => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const nextStep = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const ProgressStep = ({ num }: { num: number }) => (
        <div className={`flex flex-col items-center ${step >= num ? 'text-[--color-career-blue-start]' : 'text-gray-300'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-1 transition-colors ${step >= num ? 'bg-[--color-career-blue-start] text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                {step > num ? <CheckCircle2 size={18} /> : num}
            </div>
            <span className="text-xs font-bold">STEP{num}</span>
        </div>
    );

    return (
        <div className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col ${isMobile ? 'w-full' : 'h-[calc(100vh-2rem)] m-4'}`}>

            {/* Form Header */}
            <div className="bg-gradient-to-r from-[--color-career-blue-start] to-[--color-career-blue-end] p-4 text-white text-center">
                <h2 className="text-lg font-bold leading-tight drop-shadow-sm">
                    最短1分で完了！<br />
                    <span className="text-xl">無料相談に申し込む</span>
                </h2>
            </div>

            <div className="p-4 flex-1 flex flex-col overflow-y-auto">
                {/* Progress Bar */}
                <div className="flex justify-between items-start px-4 mb-6 relative">
                    {/* Connecting Line */}
                    <div className="absolute top-4 left-0 w-full h-0.5 bg-gray-200 -z-10" />
                    <div
                        className="absolute top-4 left-0 h-0.5 bg-[--color-career-blue-start] -z-10 transition-all duration-300"
                        style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                    />

                    <ProgressStep num={1} />
                    <ProgressStep num={2} />
                    <ProgressStep num={3} />
                </div>

                {/* Form Content Steps */}
                <div className="flex-1">
                    {step === 1 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div>
                                <label className="block text-sm font-bold mb-2">現在の状況 <span className="text-red-500 text-xs">必須</span></label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none">
                                    <option>選択してください</option>
                                    <option>在職中</option>
                                    <option>離職中</option>
                                    <option>学生</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">希望勤務地 <span className="text-red-500 text-xs">必須</span></label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none">
                                    <option>選択してください</option>
                                    <option>東京</option>
                                    <option>大阪</option>
                                    <option>その他</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div>
                                <label className="block text-sm font-bold mb-2">お名前 <span className="text-red-500 text-xs">必須</span></label>
                                <input type="text" placeholder="例：山田 太郎" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">生まれた年 <span className="text-red-500 text-xs">必須</span></label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none">
                                    <option>選択してください</option>
                                    <option>2000年</option>
                                    <option>2001年</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div>
                                <label className="block text-sm font-bold mb-2">電話番号 <span className="text-red-500 text-xs">必須</span></label>
                                <input type="tel" placeholder="090-1234-5678" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">メールアドレス <span className="text-red-500 text-xs">必須</span></label>
                                <input type="email" placeholder="sample@email.com" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Action Button */}
                <div className="mt-6">
                    <button
                        onClick={nextStep}
                        className="group relative w-full py-4 rounded-full bg-gradient-to-r from-[--color-career-orange-start] to-[--color-career-orange-end] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all duration-200 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {step === totalSteps ? '無料で申し込む' : '次へ進む'}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-3">
                        <a href="#" className="underline">利用規約</a>と<a href="#" className="underline">プライバシーポリシー</a>に同意の上、送信してください。
                    </p>
                </div>

            </div>
        </div>
    );
};
