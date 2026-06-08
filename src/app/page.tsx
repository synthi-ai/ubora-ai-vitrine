'use client';

import Header from '@/components/Header';
import dynamic from 'next/dynamic';
import AboutSection from '@/components/AboutSection';
import IndustriesTransformationSection from '@/components/IndustriesTransformationSection';
import FeaturesSection from '@/components/FeaturesSection';
import UseCasesSection from '@/components/UseCasesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

// Hero uses react-type-animation which requires browser globals
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <IndustriesTransformationSection />
      <FeaturesSection />
      <UseCasesSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </>
  );
}
