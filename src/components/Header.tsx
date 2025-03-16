"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [activeSection, setActiveSection] = useState("accueil");

  // Fonction pour scroller vers une section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Remonte en haut si "Accueil"
    }
  };

  // Détecte la section visible pendant le scroll
  useEffect(() => {
    const sections = ["accueil", "fonctionnalites", "tarifs", "temoignages", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Ajustement pour détecter la section

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
    <header  className="fixed top-0 left-0 right-0 bg-gray-50 py-4 shadow-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="mb-4">
          <h1 className="text-4xl font-bold">
            <span className="text-purple-600">Ubora</span>
            <span className="text-green-500">AI</span>
          </h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection("accueil")}
            className={`transition-colors ${activeSection === "accueil" ? "text-green-500 font-medium" : "text-gray-700 hover:text-green-500"}`}
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection("fonctionnalites")}
            className={`transition-colors ${activeSection === "fonctionnalites" ? "text-green-500 font-medium" : "text-gray-700 hover:text-green-500"}`}
          >
            Fonctionnalités
          </button>
          <button
            onClick={() => scrollToSection("tarifs")}
            className={`transition-colors ${activeSection === "tarifs" ? "text-green-500 font-medium" : "text-gray-700 hover:text-green-500"}`}
          >
            Tarifs
          </button>
          <button
            onClick={() => scrollToSection("temoignages")}
            className={`transition-colors ${activeSection === "temoignages" ? "text-green-500 font-medium" : "text-gray-700 hover:text-green-500"}`}
          >
            Témoignages
          </button>
          <button
            className={`transition-colors ${activeSection === "contact" ? "text-green-500 font-medium" : "text-gray-700 hover:text-green-500"}`}
          >
            Contact
          </button>
        </nav>

        <div>
          <Link
            href="/connexion"
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
          >
            Connexion
          </Link>
        </div>
      </div>
    </header>
  );
}
