
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    { id: 1, age: '24歳', prev: 'フリーター', curr: 'ITエンジニア', text: '「未経験からITなんて無理」と思っていましたが、丁寧な研修のおかげで自信がつきました。', gender: '男性' },
    { id: 2, age: '22歳', prev: 'アパレル販売', curr: '事務職', text: '土日休みの仕事に就きたくて相談。親身になって話を聞いてくれました。', gender: '女性' },
    { id: 3, age: '26歳', prev: '営業職（短期離職）', curr: 'マーケティング', text: '前職が合わずすぐ辞めてしまい不安でしたが、強みを活かせる職場に出会えました。', gender: '男性' },
    { id: 4, age: '23歳', prev: '公務員志望（既卒）', curr: '人材コーディネーター', text: '公務員試験に落ちて焦っていましたが、民間企業の面白さを教えてもらいました。', gender: '女性' },
];

export const UserVoice = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    <span className="text-[--color-career-blue-start]">利用者の声</span>
                </h2>
                <p className="text-gray-600">
                    実際にサービスを利用して就職・転職に成功した方々の声です。
                </p>
            </div>

            <div className="px-4 md:px-0">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2.2, centeredSlides: false },
                        1024: { slidesPerView: 3.2, centeredSlides: false },
                    }}
                    className="pb-12"
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 h-full flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                                {/* Card Header */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center text-3xl">
                                        {item.gender === '男性' ? '👨' : '👩'}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-500">{item.age} / {item.gender}</div>
                                        <div className="font-bold text-gray-800 text-sm mt-1">
                                            <span className="line-through text-gray-400 text-xs mr-2">{item.prev}</span>
                                            <br className="sm:hidden" />
                                            <span className="text-[--color-career-orange-end]">➡ {item.curr}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                                    {item.text}
                                </p>

                                {/* Decoration using Tailwind v4 theme vars directly in style for gradients if needed, or classes */}
                                <div className="absolute top-0 right-0 p-2 bg-[--color-career-light-blue] rounded-bl-xl text-[--color-career-blue-start] font-bold text-xs">
                                    Success!
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
