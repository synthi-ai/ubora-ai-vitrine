"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Platform",
    dropdown: [
      { name: "Document Processing", href: "#", description: "AI-powered data extraction from any document" },
      { name: "OCR Technology", href: "#", description: "Advanced optical character recognition" },
      { name: "AI Models", href: "#", description: "Custom-trained machine learning models" },
      { name: "Integrations", href: "#", description: "Connect with your existing tools" },
    ],
  },
  {
    name: "Solutions",
    dropdown: [
      { name: "Invoice Processing", href: "#", description: "Automate accounts payable workflows" },
      { name: "ID Verification", href: "#", description: "Secure identity document verification" },
      { name: "Contract Analysis", href: "#", description: "Extract key terms and clauses" },
      { name: "Form Processing", href: "#", description: "Digitize paper forms at scale" },
    ],
  },
  { name: "Pricing", href: "#" },
  { name: "Resources", href: "#" },
  { name: "About", href: "#about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50"
            : "bg-gray-950/80 backdrop-blur-sm"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/ubora.png"
                alt="UboraAI"
                width={130}
                height={40}
                className="h-8 lg:h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.dropdown ? (
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg transition-colors",
                        activeDropdown === item.name && "text-white"
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === item.name && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href!}
                      className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors group"
                            >
                              <div className="text-sm font-medium text-white group-hover:text-[#8cd139] transition-colors">
                                {subItem.name}
                              </div>
                              <div className="text-xs text-gray-400 mt-0.5">
                                {subItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="#"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Log in
              </Link>
              <Link
                href="#"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-[#8cd139] hover:bg-[#7bc234] rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden bg-gray-950 border-t border-gray-800"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <MobileDropdown item={item} />
                    ) : (
                      <Link
                        href={item.href!}
                        className="block px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-800 space-y-2">
                  <Link
                    href="#"
                    className="block px-4 py-3 text-center text-gray-300 hover:text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    Log in
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-center text-white font-semibold bg-[#8cd139] hover:bg-[#7bc234] rounded-lg transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
}

function MobileDropdown({ item }: { item: (typeof navItems)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
        onClick={() => setOpen(!open)}
      >
        {item.name}
        <ChevronDown
          size={16}
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="pl-4 space-y-1 pb-2">
              {item.dropdown!.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
