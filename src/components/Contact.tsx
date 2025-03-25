import Head from 'next/head';
import ContactFormWrapper from './ContactFormWrapper';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <main className="py-6">
        <ContactFormWrapper />
      </main>
    </>
  );
}