'use client'; 

import Header from '@/components/Header';
import dynamic from 'next/dynamic'; 

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const AboutSection = dynamic(() => import('@/components/AboutSection'), { ssr: false });
const IndustriesTransformationSection = dynamic(() => import('@/components/IndustriesTransformationSection'), { ssr: false });
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), { ssr: false });
const UseCasesSection = dynamic(() => import('@/components/UseCasesSection'), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), { ssr: false });
const PricingSection = dynamic(() => import('../components/PricingSection'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const ClientWrapper = dynamic(() => import('@/components/ClientWrapper'), { ssr: false }); // Si vous utilisez ClientWrapper autour d'autres choses

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
      {/* Si ClientWrapper est un wrapper autour de votre contenu principal, il doit aussi être dynamique s'il utilise window */}
      {/* <ClientWrapper>
        ... votre contenu ...
      </ClientWrapper> */}
    </>
  );
}