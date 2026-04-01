
import React from 'react';
import Marquee from "react-fast-marquee";

export const Works = () => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-8">
                <h2 className="text-xl font-bold text-gray-400 uppercase tracking-widest">
                    Supporting Companies
                </h2>
            </div>

            <Marquee gradient={false} speed={40}>
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="mx-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                        <div className="h-12 w-32 bg-gray-200 flex items-center justify-center font-bold text-gray-400 rounded">
                            LOGO {i + 1}
                        </div>
                    </div>
                ))}
            </Marquee>
        </section>
    );
};
