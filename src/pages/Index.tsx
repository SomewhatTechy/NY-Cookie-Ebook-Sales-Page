import { lazy, Suspense } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';
import StickyUrgencyBar from '@/components/StickyUrgencyBar';
import FloatingCTA from '@/components/FloatingCTA';
import HeroSection from '@/components/HeroSection';

// Lazy-load below-the-fold sections to reduce initial bundle size
const PainPointsSection = lazy(() => import('@/components/PainPointsSection'));
const TransformationSection = lazy(() => import('@/components/TransformationSection'));
const WhatYouGetSection = lazy(() => import('@/components/WhatYouGetSection'));
const BonusesSection = lazy(() => import('@/components/BonusesSection'));
const PriceDropSection = lazy(() => import('@/components/PriceDropSection'));
const DeliverySection = lazy(() => import('@/components/DeliverySection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const GuaranteeSection = lazy(() => import('@/components/GuaranteeSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const ObjectionsSection = lazy(() => import('@/components/ObjectionsSection'));
const FinalCTASection = lazy(() => import('@/components/FinalCTASection'));
const Footer = lazy(() => import('@/components/Footer'));

type LangKey = 'en' | 'es' | 'pt';

// Checkout URLs: Single price ($6.97) for all visitors
const CHECKOUT_URLS: Record<LangKey, string> = {
  en: 'https://pay.hotmart.com/U104053904F?off=wkl6rja2&checkoutMode=10',
  es: 'https://pay.hotmart.com/M104071921A?off=leny9hwp&checkoutMode=10',
  pt: 'https://pay.hotmart.com/F104072332S?off=9ha4yghn&checkoutMode=10',
};

function normalizeLanguageToKey(language: unknown): LangKey {
  const raw = typeof language === 'string' ? language.trim().toLowerCase() : '';
  if (raw.startsWith('es')) return 'es';
  if (raw.startsWith('pt')) return 'pt';
  return 'en';
}

const PageContent = () => {
  const { language } = useLanguage();

  const langKey = normalizeLanguageToKey(language);
  const checkoutUrl = CHECKOUT_URLS[langKey];

  return (
    <div className="min-h-screen premium-page text-foreground">
      <StickyUrgencyBar checkoutUrl={checkoutUrl} />
      <LanguageToggle />
      <FloatingCTA checkoutUrl={checkoutUrl} />

      <main>
        <HeroSection checkoutUrl={checkoutUrl} />
        <Suspense fallback={null}>
          <PainPointsSection />
          <TransformationSection />
          <WhatYouGetSection />
          <BonusesSection />
          <PriceDropSection checkoutUrl={checkoutUrl} />
          <DeliverySection />
          <TestimonialsSection />
          <GuaranteeSection checkoutUrl={checkoutUrl} />
          <FAQSection />
          <ObjectionsSection />
          <FinalCTASection checkoutUrl={checkoutUrl} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
};

export default Index;
