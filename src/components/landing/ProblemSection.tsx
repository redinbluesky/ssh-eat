import React from 'react';

export default function ProblemSection() {
  const problems = [
    {
      title: "소리 (Sound)",
      description: "회의 중 봉지 개봉 소리가 신경 쓰이시나요?",
      icon: "🔊"
    },
    {
      title: "가루 (Mess)",
      description: "키보드 사이로 떨어지는 부스러기가 걱정되시나요?",
      icon: "🧹"
    },
    {
      title: "향 (Scent)",
      description: "공유 공간에서 퍼지는 강한 향이 부담스러우신가요?",
      icon: "🌬️"
    }
  ];

  return (
    <section className="bg-brand-beige py-24 text-brand-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold md:text-4xl">업무의 흐름을 방해하는 순간들</h2>
          <p className="mt-4 text-lg text-brand-charcoal/70">우리는 당신의 집중력을 존중합니다.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-white/50 rounded-2xl shadow-sm">
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
              <p className="text-brand-charcoal/70">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
