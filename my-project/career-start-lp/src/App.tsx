
import React from 'react';
import { Hero } from './components/sections/Hero';
import { UserVoice } from './components/sections/UserVoice';
import { Satisfaction } from './components/sections/Satisfaction';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { SuccessRate } from './components/sections/SuccessRate';
import { Reasons } from './components/sections/Reasons';
import { Advisor } from './components/sections/Advisor';
import { Works } from './components/sections/Works';
import { Flow } from './components/sections/Flow';
import { FAQ } from './components/sections/FAQ';
import { SidebarForm } from './components/layout/SidebarForm';
import { StickyFooter } from './components/layout/StickyFooter';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <div className="lg:flex max-w-[1920px] mx-auto relative">

        {/* Left Column: Sticky Sidebar Form (Desktop Only) */}
        <aside className="hidden lg:block lg:w-[360px] xl:w-[400px] h-screen sticky top-0 bg-[#ecf3fd] border-r border-gray-200 z-50 shrink-0">
          <SidebarForm />
        </aside>

        {/* Right Column: Main Content */}
        <main className="flex-1 w-full relative bg-white">
          <Hero />
          <UserVoice />
          <Satisfaction />
          <Problem />
          <Solution />
          <SuccessRate />
          <Reasons />
          <Advisor />
          <Works />
          <Flow />
          <FAQ />

          {/* Mobile Bottom Form Area */}
          <div className="lg:hidden p-4 bg-[#ecf3fd]">
            <SidebarForm isMobile={true} />
          </div>

          <footer className="bg-slate-800 text-white p-8 text-center text-sm">
            <div className="mb-4">
              <a href="#" className="hover:text-blue-300 mx-2">会社概要</a>
              <a href="#" className="hover:text-blue-300 mx-2">プライバシーポリシー</a>
            </div>
            <p>&copy; CareerStart Clone. All rights reserved.</p>
          </footer>
        </main>
      </div>

      {/* Mobile Sticky Footer CTA */}
      <StickyFooter />
    </div>
  );
}

export default App;
