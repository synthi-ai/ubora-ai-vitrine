import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UboraAI - Intelligent Document Processing Platform',
  description:
    'Transform documents into actionable data with AI-powered intelligent document processing. Automate invoice processing, ID verification, contract analysis and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
