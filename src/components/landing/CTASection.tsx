'use client';

import React, { useState } from 'react';
import LeadForm from './LeadForm';

export default function CTASection() {
  const [isTesterModalOpen, setIsTesterModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  return (
    <section className="py-24 bg-brand-charcoal text-brand-ivory overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            지금, 조용한 첫입을 <br />
            <span className="text-brand-corn">준비하고 있습니다.</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-ivory/70 mb-12">
            Shh-eat의 첫 번째 체험단이 되어 제품을 가장 먼저 경험해보세요.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setIsTesterModalOpen(true)}
              className="w-full sm:w-auto rounded-full bg-brand-corn px-10 py-5 text-xl font-bold text-brand-charcoal shadow-xl hover:bg-brand-corn/90 transition-all active:scale-95"
            >
              체험단 신청하기
            </button>
            <button 
              onClick={() => setIsNotificationModalOpen(true)}
              className="w-full sm:w-auto rounded-full border-2 border-brand-ivory/30 px-10 py-5 text-xl font-semibold text-brand-ivory hover:bg-brand-ivory/10 transition-all"
            >
              사전 알림 받기
            </button>
          </div>
          
          <p className="mt-8 text-sm text-brand-ivory/40">
            * 신청 시 제품 테스트를 위한 정보 수집이 진행될 수 있습니다.
          </p>
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-corn rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-sage rounded-full blur-[120px]" />
      </div>

      {/* Modals */}
      <LeadForm 
        isOpen={isTesterModalOpen} 
        onClose={() => setIsTesterModalOpen(false)} 
        type="tester" 
      />
      <LeadForm 
        isOpen={isNotificationModalOpen} 
        onClose={() => setIsNotificationModalOpen(false)} 
        type="notification" 
      />
    </section>
  );
}
