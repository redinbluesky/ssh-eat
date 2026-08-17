import React from 'react';

export default function ThreeLowSection() {
  const principles = [
    {
      id: '01',
      title: 'Low Sound',
      desc: '소리는 낮추고, 집중은 그대로.',
      detail: '부드러운 식감으로 씹는 소리를 최소화했습니다.'
    },
    {
      id: '02',
      title: 'Low Mess',
      desc: '가루 걱정 없이 깔끔하게.',
      detail: '부스러기가 거의 남지 않는 밀도 높은 제형.'
    },
    {
      id: '03',
      title: 'Low Scent',
      desc: '공유 공간에서도 매너 있게.',
      detail: '주변에 퍼지지 않는 은은하고 담백한 향.'
    }
  ];

  return (
    <section className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold md:text-4xl text-brand-charcoal">
            Shh-eat의 3 LOW 원칙
          </h2>
          <p className="mt-4 text-lg text-brand-charcoal/60">
            우리가 제품을 설계하는 세 가지 기준입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {principles.map((p) => (
            <div key={p.id} className="relative group">
              <div className="absolute -top-4 -left-4 text-4xl font-mono text-brand-sage/20 group-hover:text-brand-sage/40 transition-colors">
                {p.id}
              </div>
              <div className="border-t border-brand-charcoal/10 pt-8">
                <h3 className="text-2xl font-bold text-brand-charcoal mb-2">{p.title}</h3>
                <p className="text-brand-corn font-semibold mb-4">{p.desc}</p>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
