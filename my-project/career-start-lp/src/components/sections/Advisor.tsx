
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const advisors = [
    { name: "佐藤 健太", role: "キャリアアドバイザー", message: "あなたの「やりたい」を一緒に見つけましょう。" },
    { name: "田中 美咲", role: "専任カウンセラー", message: "不安なことがあれば何でも相談してください。" },
    { name: "鈴木 一郎", role: "就職コンサルタント", message: "未経験からのキャリアアップを全力で応援します。" },
    { name: "高橋 恵", role: "転職サポーター", message: "あなたにぴったりの企業をご紹介します。" },
];

export const Advisor = () => {
    return (
        <section className="py-20 bg-blue-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-12">
                    <span className="text-[--color-career-blue-start]">頼れるアドバイザー</span>がサポート
                </h2>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12 max-w-5xl mx-auto"
                >
                    {advisors.map((advisor, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group">
                                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400 font-bold">
                                    Advisor Photo
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">{advisor.name}</h3>
                                    <p className="text-xs text-[--color-career-blue-start] font-bold mb-4">{advisor.role}</p>
                                    <p className="text-sm text-gray-600">"{advisor.message}"</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
