'use client'; // Move this to the TOP

import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import Hero from './Hero';
import IndustriesTransformationSection from './IndustriesTransformationSection';
import TestimonialsSection from './TestimonialsSection';
import UseCasesSection from './UseCasesSection';

export default function ClientLayout() {
  return (
    <>
      <Hero />
      <AboutSection />
      <IndustriesTransformationSection />
      <FeaturesSection />
      <UseCasesSection />
      <TestimonialsSection />
    </>
  );
}