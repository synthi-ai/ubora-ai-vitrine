'use client';

import Hero from './Hero';
import LogoStrip from './LogoStrip';
import SplitFeatures from './SplitFeatures';
import TabbedPlatform from './TabbedPlatform';
import MetricsSection from './MetricsSection';
import CaseStudies from './CaseStudies';
import ProductGrid from './ProductGrid';
import IndustriesTransformationSection from './IndustriesTransformationSection';
import FAQSection from './FAQSection';
import ResourcesGrid from './ResourcesGrid';
import CTABanner from './CTABanner';

export default function ClientLayout() {
  return (
    <>
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
    </>
  );
}
