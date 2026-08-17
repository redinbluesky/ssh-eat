import Hero from '@/components/landing/Hero';
import ProblemSection from '@/components/landing/ProblemSection';
import ThreeLowSection from '@/components/landing/ThreeLowSection';
import ProductSection from '@/components/landing/ProductSection';
import CTASection from '@/components/landing/CTASection';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSection />
      <ThreeLowSection />
      <ProductSection />
      <CTASection />
      
      <footer className="py-12 bg-brand-charcoal text-brand-ivory/40 text-center text-sm border-t border-white/5">
        <div className="container mx-auto px-6">
          <p>© 2026 Shh-eat. All rights reserved.</p>
          <p className="mt-2">회의는 계속. 간식도 조용히.</p>
        </div>
      </footer>
    </main>
  );
}
