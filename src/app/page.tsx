'use client';

import Header from '@/components/Header';
import dynamic from 'next/dynamic';
import LogoStrip from '@/components/LogoStrip';
import SplitFeatures from '@/components/SplitFeatures';
import TabbedPlatform from '@/components/TabbedPlatform';
import MetricsSection from '@/components/MetricsSection';
import CaseStudies from '@/components/CaseStudies';
import ProductGrid from '@/components/ProductGrid';
import IndustriesTransformationSection from '@/components/IndustriesTransformationSection';
import FAQSection from '@/components/FAQSection';
import ResourcesGrid from '@/components/ResourcesGrid';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

// Hero uses react-type-animation which requires browser globals
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoStrip />
      <SplitFeatures />
      <TabbedPlatform />
      <MetricsSection />
      <CaseStudies />
      <ProductGrid />
      <IndustriesTransformationSection />
      <FAQSection />
      <ResourcesGrid />
      <CTABanner />
      <Footer />
    </>
  );
}
