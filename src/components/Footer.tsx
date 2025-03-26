// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';
import UboraLogo from '/ubora.png'; // Assurez-vous d'avoir le logo dans votre dossier public

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full min-h-[554px] relative">
      <div className="container mx-auto px-6 py-12">
        {/* Back to top button */}
        <div className="absolute right-6 -top-6">
          <Link 

            href="#top" 
            aria-label="Retour en haut de la page"
            className="bg-green-500 rounded-full p-3 flex items-center justify-center hover:bg-green-600 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 15l7-7 7 7" 
              />
            </svg>
          </Link>
        </div>

        {/* Main footer content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company info */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <div className="flex items-center">
                  <Image
                               src="/ubora.png" 
                               alt="UboraAI Logo"
                               width={190} 
                               height={70} 
                               priority
                               className="hover:opacity-90 transition-opacity"
                             />
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Système de numérisation et d&apos;extraction d&apos;informations, notre solution transforme des documents papier en données exploitables grâce à des technologies avancées telles que l&apos;OCR multilingue et l&apos;analyse sémantique. Adaptable à divers secteurs, il offre une personnalisation selon les besoins spécifiques de chaque organisation tout en garantissant la conformité avec les réglementations en vigueur.
              </p>
            </div>

            {/* Support column */}
            <div className="col-span-1">
              <h2 className="font-semibold text-lg mb-4">Support</h2>
              <ul className="space-y-3">
                {[
                  { href: "/centre-aide", text: "Centre d'aide" },
                  { href: "/info-compte", text: "Information du compte" },
                  { href: "/a-propos", text: "À propos" },
                  { href: "/contact", text: "Contactez nous" }
                ].map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help & Solutions column */}
            <div className="col-span-1">
              <h2 className="font-semibold text-lg mb-4">Aide et Solution</h2>
              <ul className="space-y-3">
                {[
                  { href: "/parler-support", text: "Parler au support" },
                  { href: "/documents-support", text: "Documents support" },
                  { href: "/statut-systeme", text: "Statut du système" },
                  { href: "/reponses", text: "Réponses" }
                ].map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-gray-300 hover:text-white text-sm transition-colors"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product & Social media columns */}
            <div className="col-span-1">
              <div className="mb-8">
                <h2 className="font-semibold text-lg mb-4">Produit</h2>
                <ul className="space-y-3">
                  {[
                    { href: "/mises-a-jours", text: "Mises à jour" },
                    { href: "/securite", text: "Sécurité" },
                    { href: "/test-beta", text: "Test bêta" },
                    { href: "/tarification", text: "Tarification" }
                  ].map((item) => (
                    <li key={item.href}>
                      <Link 
                        href={item.href} 
                        className="text-gray-300 hover:text-white text-sm transition-colors"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="font-semibold text-lg mb-4">Réseaux sociaux</h2>
                <ul className="space-y-3">
                  {[
                    { href: "https://linkedin.com", text: "LinkedIn" },
                    { href: "https://telegram.org", text: "Telegram" },
                    { href: "https://tiktok.com", text: "TikTok" },
                    { href: "https://facebook.com", text: "Facebook" }
                  ].map((item) => (
                    <li key={item.href}>
                      <Link 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white text-sm transition-colors"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Legal section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 SynthiAI Inc. Tous droits réservés
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Link 
                  href="/terms" 
                  className="hover:text-white transition-colors"
                >
                  Termes et conditions
                </Link>
                <span>•</span>
                <Link 
                  href="/privacy" 
                  className="hover:text-white transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}