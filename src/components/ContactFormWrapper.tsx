"use client";

import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('./ContactForm'), {
  ssr: false,
  loading: () => <div className="h-96 w-full flex items-center justify-center">Loading map...</div>
});

export default function ContactFormWrapper() {
  return <ContactForm />;
}