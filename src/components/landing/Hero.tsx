import React from 'react';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 text-center md:py-32">
      <div className="container mx-auto px-6">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-brand-charcoal md:text-7xl">
          Shh-eat
        </h1>
        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-brand-charcoal/80 md:text-3xl">
          회의는 계속. <br className="md:hidden" />
          <span className="text-brand-corn">간식도 조용히.</span>
        </p>
        <p className="mt-8 max-w-lg mx-auto text-lg text-brand-charcoal/60">
          업무의 흐름을 덜 깨는, 당신의 책상을 위한 한입 오피스 스낵.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="rounded-full bg-brand-corn px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95">
            체험단 신청하기
          </button>
          <button className="rounded-full border-2 border-brand-charcoal px-8 py-4 text-lg font-semibold text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-brand-ivory">
            제품 둘러보기
          </button>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-sage/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-corn/10 blur-3xl" />
    </section>
  );
}
