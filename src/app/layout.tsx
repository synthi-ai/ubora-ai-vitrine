import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="pt-10"></div> 
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}