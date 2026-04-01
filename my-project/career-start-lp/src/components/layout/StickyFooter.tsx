
import React from 'react';
import { MessageCircle } from 'lucide-react';

export const StickyFooter = () => {
    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
            <button className="w-full py-3.5 rounded-full bg-gradient-to-r from-[--color-career-orange-start] to-[--color-career-orange-end] text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2 animate-pulse-subtle">
                <MessageCircle size={24} fill="currentColor" />
                アドバイザーに相談する (無料)
            </button>
        </div>
    );
};
