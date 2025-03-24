import dynamic from 'next/dynamic';
import Head from 'next/head';

// Import dynamique du composant ContactForm pour éviter les erreurs de SSR avec Leaflet
const ContactFormWithNoSSR = dynamic(
  () => import('../components/ContactForm'),
  { ssr: false }
);

export default function Contact() {
  return (
    <>
      <main className="py-6">
        <ContactFormWithNoSSR />
      </main>
    </>
  );
}