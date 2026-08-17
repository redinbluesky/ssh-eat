import React from 'react';

export default function ProductSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-sage/10 text-brand-sage text-sm font-bold uppercase tracking-wider">
              Our Product
            </div>
            <h2 className="text-4xl font-bold text-brand-charcoal leading-tight">
              업무의 흐름을 돕는 <br />
              <span className="text-brand-corn">Desk Pod & Bites</span>
            </h2>
            <p className="text-lg text-brand-charcoal/70 leading-relaxed">
              단순한 간식이 아닙니다. 당신의 책상 위에서 가장 조용하고 깔끔하게 즐길 수 있는 오피스 오브제입니다.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-corn/10 flex items-center justify-center text-brand-corn">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal">Soft Savory Bites</h4>
                  <p className="text-sm text-brand-charcoal/60">한입에 쏙 들어가는 부드러운 식감의 스낵</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-potato/10 flex items-center justify-center text-brand-potato">
                  <span className="text-xl">📦</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-charcoal">Desk Pod</h4>
                  <p className="text-sm text-brand-charcoal/60">소음과 부스러기를 방지하는 전용 데스크 케이스</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            {/* Placeholder for Product Image */}
            <div className="aspect-square rounded-3xl bg-brand-beige shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center text-brand-charcoal/20 font-mono text-sm">
                [Product Visual: Desk Pod & Bites on a clean desk]
              </div>
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs font-mono text-brand-charcoal/50 mb-1">MVP Concept</p>
                <p className="text-sm font-bold text-brand-charcoal">Quiet Corn & Mellow Potato</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-corn/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-sage/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
