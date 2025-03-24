import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import UseCasesSection from '../components/UseCasesSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ChatWidget from '../components/ChatWidget';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>UboaAI - Transformez vos documents en données exploitables</title>
        <meta name="description" content="Système de numérisation et d'extraction d'informations adapté à tous les secteurs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <UseCasesSection />
      <PricingSection />
      <TestimonialsSection />
      <ChatWidget />
      <Contact />
      <Footer/>
      </>  
  );
}