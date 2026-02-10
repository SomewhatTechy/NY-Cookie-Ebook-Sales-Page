import { lazy, Suspense } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { useOfferCountdown } from '@/hooks/useOfferCountdown';
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

// Checkout URLs: Launch price ($6.97) - active during countdown
const CHECKOUT_URLS_LAUNCH: Record<LangKey, string> = {
  en: 'https://pay.hotmart.com/U104053904F?off=wkl6rja2&checkoutMode=10',
  es: 'https://pay.hotmart.com/M104071921A?off=leny9hwp&checkoutMode=10',
  pt: 'https://pay.hotmart.com/F104072332S?off=9ha4yghn&checkoutMode=10',
};

// Checkout URLs: Regular price ($27.00) - after timer expires
const CHECKOUT_URLS_REGULAR: Record<LangKey, string> = {
  en: 'https://pay.hotmart.com/U104053904F?off=n06q2grn&checkoutMode=10',
  es: 'https://pay.hotmart.com/M104071921A?off=nw46w8wm&checkoutMode=10',
  pt: 'https://pay.hotmart.com/F104072332S?off=ecdxpg1v&checkoutMode=10',
};

function normalizeLanguageToKey(language: unknown): LangKey {
  const raw = typeof language === 'string' ? language.trim().toLowerCase() : '';
  if (raw.startsWith('es')) return 'es';
  if (raw.startsWith('pt')) return 'pt';
  return 'en';
}

const PageContent = () => {
  const { language } = useLanguage();
  const { isExpired } = useOfferCountdown();

  const langKey = normalizeLanguageToKey(language);

  // Switch checkout URL based on timer state
  const checkoutUrl = isExpired
    ? CHECKOUT_URLS_REGULAR[langKey]
    : CHECKOUT_URLS_LAUNCH[langKey];

  return (
    <div className="min-h-screen premium-page text-foreground">
      {/* Hide sticky urgency bar when offer expired */}
      {!isExpired && <StickyUrgencyBar checkoutUrl={checkoutUrl} />}
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
