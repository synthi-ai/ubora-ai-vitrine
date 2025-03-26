"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [activeSection, setActiveSection] = useState("accueil");

  // Fonction pour scroller vers une section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Détecte la section visible pendant le scroll
  useEffect(() => {
    const sections = ["accueil", "fonctionnalites", "tarifs", "temoignages", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      if (scrollPosition < 300) {
        setActiveSection("accueil");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-50 py-4 shadow-md z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo PNG UboraAI */}
          <Link href="/" className="flex items-center">
            <Image
              src="/ubora.png" 
              alt="UboraAI Logo"
              width={140} 
              height={50} 
              priority
              className="hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("accueil")}
            className={`text-lg transition-colors duration-300 ${
              activeSection === "accueil" 
                ? "text-green-600 font-semibold" 
                : "text-gray-800 hover:text-green-500"
            }`}
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("fonctionnalites")}
            className={`text-lg transition-colors duration-300 ${
              activeSection === "fonctionnalites" 
                ? "text-green-600 font-semibold" 
                : "text-gray-800 hover:text-green-500"
            }`}
          >
            Fonctionnalités
          </button>
          <button
            onClick={() => scrollToSection("tarifs")}
            className={`text-lg transition-colors duration-300 ${
              activeSection === "tarifs" 
                ? "text-green-600 font-semibold" 
                : "text-gray-800 hover:text-green-500"
            }`}
          >
            Tarifs
          </button>
          <button
            onClick={() => scrollToSection("temoignages")}
            className={`text-lg transition-colors duration-300 ${
              activeSection === "temoignages" 
                ? "text-green-600 font-semibold" 
                : "text-gray-800 hover:text-green-500"
            }`}
          >
            Témoignages
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-lg transition-colors duration-300 ${
              activeSection === "contact" 
                ? "text-green-600 font-semibold" 
                : "text-gray-800 hover:text-green-500"
            }`}
          >
            Contact
          </button>
        </nav>

        <div>
          <Link
            href="/auth/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-colors duration-300 text-lg font-medium"
          >
            Connexion
          </Link>
        </div>
      </div>
    </header>
  );
}