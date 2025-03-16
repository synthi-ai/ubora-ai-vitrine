// components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 relative">
      {/* Back to top button */}
      <div className="absolute right-6 -top-6">
        <Link href="#top">
          <div className="bg-green-500 rounded-full p-3 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </Link>
      </div>

      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company logo and description */}
          <div className="col-span-1">
            <div className="mb-4">
              <h1 className="text-4xl font-bold">
                <span className="text-purple-600">Ubora</span>
                <span className="text-green-500">AI</span>
              </h1>
            </div>
            <p className="text-gray-300 text-sm">
              Système de numérisation et d&apos;extraction d&apos;informations, notre solution transforme des documents papier en données exploitables grâce à des technologies avancées telles que l&apos;OCR multilingue et l&apos;analyse sémantique. Adaptable à divers secteurs, il offre une personnalisation selon les besoins spécifiques de chaque organisation tout en garantissant la conformité avec les réglementations en vigueur.
            </p>
          </div>

          {/* Support column */}
          <div className="col-span-1">
            <h2 className="font-semibold mb-4">Support</h2>
            <ul className="space-y-2">
              <li><Link href="/centre-aide" className="text-gray-300 hover:text-white text-sm">Centre d&apos;aide</Link></li>
              <li><Link href="/info-compte" className="text-gray-300 hover:text-white text-sm">Information du compte</Link></li>
              <li><Link href="/a-propos" className="text-gray-300 hover:text-white text-sm">À propos</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white text-sm">Contactez nous</Link></li>
            </ul>
          </div>

          {/* Aide et Solution column */}
          <div className="col-span-1">
            <h2 className="font-semibold mb-4">Aide et Solution</h2>
            <ul className="space-y-2">
              <li><Link href="/parler-support" className="text-gray-300 hover:text-white text-sm">Parler au support</Link></li>
              <li><Link href="/documents-support" className="text-gray-300 hover:text-white text-sm">Documents support</Link></li>
              <li><Link href="/statut-systeme" className="text-gray-300 hover:text-white text-sm">Statut du système</Link></li>
              <li><Link href="/reponses" className="text-gray-300 hover:text-white text-sm">Réponses</Link></li>
            </ul>
          </div>

          {/* Combined Produit and Réaux sociaux columns */}
          <div className="col-span-1">
              <h2 className="font-semibold mb-4">Produit</h2>
              <ul className="space-y-2">
                <li><Link href="/mises-a-jour" className="text-gray-300 hover:text-white text-sm">Mises à jour</Link></li>
                <li><Link href="/securite" className="text-gray-300 hover:text-white text-sm">Sécurité</Link></li>
                <li><Link href="/test-beta" className="text-gray-300 hover:text-white text-sm">Test bêta</Link></li>
                <li><Link href="/tarification" className="text-gray-300 hover:text-white text-sm">Tarification</Link></li>
              </ul>
            
            </div>
            <div>
              <h2 className="font-semibold mb-4">Réaux sociaux</h2>
              <ul className="space-y-2">
                <li><Link href="https://linkedin.com" className="text-gray-300 hover:text-white text-sm">LinkedIn</Link></li>
                <li><Link href="https://telegram.org" className="text-gray-300 hover:text-white text-sm">Telegram</Link></li>
                <li><Link href="https://tiktok.com" className="text-gray-300 hover:text-white text-sm">Tiktok</Link></li>
                <li><Link href="https://facebook.com" className="text-gray-300 hover:text-white text-sm">Facebook</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SynthiAI Inc. Copyright and rights reserved
            </div>
            <div className="text-gray-400 text-sm">
              <Link href="/terms" className="hover:text-white">Termes et conditions d&apos;utilisation</Link>
              <span className="mx-2">•</span>
              <Link href="/privacy" className="hover:text-white">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
    </footer>
  );
}