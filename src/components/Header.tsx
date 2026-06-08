"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  FileText,
  Zap,
  Shield,
  Globe,
  CreditCard,
  Cloud,
  Cpu,
  PenTool,
  Building2,
  Heart,
  Truck,
  Scale,
  ShoppingBag,
  GraduationCap,
  Users,
  BookOpen,
  Calendar,
  Newspaper,
  HelpCircle,
  MessageCircle,
  Activity,
  Play,
  Mail,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  NAV DATA – Rossum-style mega menus                                 */
/* ------------------------------------------------------------------ */

interface NavLink {
  name: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

interface NavGroup {
  title: string;
  items: NavLink[];
}

interface NavItem {
  name: string;
  href?: string;
  groups?: NavGroup[];
  featured?: { title: string; description: string; href: string; cta: string };
}

const navItems: NavItem[] = [
  {
    name: "Platform",
    groups: [
      {
        title: "Core Platform",
        items: [
          { name: "Platform Overview", href: "#", description: "AI-first end-to-end document automation", icon: Zap },
          { name: "Document Processing", href: "#", description: "Extract data from any document type", icon: FileText },
          { name: "OCR Technology", href: "#", description: "Advanced optical character recognition", icon: Cpu },
          { name: "AI Models", href: "#", description: "Custom-trained ML models for your data", icon: Cloud },
          { name: "Workflow Studio", href: "#", description: "Design automation flows visually", icon: PenTool },
        ],
      },
      {
        title: "Integrations",
        items: [
          { name: "SAP", href: "#", description: "Native SAP integration" },
          { name: "Salesforce", href: "#", description: "CRM document sync" },
          { name: "Microsoft 365", href: "#", description: "Office ecosystem connector" },
          { name: "REST API", href: "#", description: "Build custom integrations" },
          { name: "All Integrations", href: "#", description: "Browse 50+ connectors" },
        ],
      },
    ],
    featured: {
      title: "Security & Compliance",
      description: "SOC 2, ISO 27001, GDPR — enterprise-grade security built into every layer.",
      href: "#",
      cta: "Learn more",
    },
  },
  {
    name: "Solutions",
    groups: [
      {
        title: "By Use Case",
        items: [
          { name: "Invoice Processing", href: "#", description: "Automate accounts payable", icon: CreditCard },
          { name: "ID Verification", href: "#", description: "Secure identity checks", icon: Shield },
          { name: "Contract Analysis", href: "#", description: "Extract key clauses & terms", icon: Scale },
          { name: "Form Processing", href: "#", description: "Digitize paper forms at scale", icon: FileText },
          { name: "Order Management", href: "#", description: "Streamline purchase orders", icon: ShoppingBag },
        ],
      },
      {
        title: "By Industry",
        items: [
          { name: "Banking & Finance", href: "#", description: "Financial document automation", icon: Building2 },
          { name: "Healthcare", href: "#", description: "Medical records & claims", icon: Heart },
          { name: "Logistics", href: "#", description: "Supply chain documentation", icon: Truck },
          { name: "Education", href: "#", description: "Academic administration", icon: GraduationCap },
          { name: "Government", href: "#", description: "Public sector modernization", icon: Users },
        ],
      },
    ],
    featured: {
      title: "Customer Story",
      description: "See how Afriland First Bank reduced loan processing from 5 days to 30 minutes.",
      href: "#",
      cta: "Read case study",
    },
  },
  {
    name: "Resources",
    groups: [
      {
        title: "Learn",
        items: [
          { name: "Customer Stories", href: "#", description: "Real results from real customers", icon: Users },
          { name: "Blog", href: "#", description: "Insights on AI & automation", icon: Newspaper },
          { name: "Documentation", href: "#", description: "API docs & product guides", icon: BookOpen },
          { name: "Webinars & Events", href: "#", description: "Live sessions & recordings", icon: Calendar },
        ],
      },
      {
        title: "Support",
        items: [
          { name: "Help Center", href: "#", description: "Guides & troubleshooting", icon: HelpCircle },
          { name: "Community Forum", href: "#", description: "Connect with other users", icon: MessageCircle },
          { name: "System Status", href: "#", description: "Platform uptime & incidents", icon: Activity },
          { name: "Contact Support", href: "#", description: "Get help from our team", icon: Mail },
        ],
      },
    ],
  },
  { name: "Pricing", href: "#pricing" },
  {
    name: "Company",
    groups: [
      {
        title: "About",
        items: [
          { name: "About Us", href: "#about", description: "Our mission & story" },
          { name: "Careers", href: "#", description: "Join the team" },
          { name: "Partners", href: "#", description: "Partner program" },
          { name: "Newsroom", href: "#", description: "Press & announcements" },
          { name: "Contact Us", href: "#", description: "Get in touch" },
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  HEADER COMPONENT                                                   */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!activeDropdown) return;
    const onClick = () => setActiveDropdown(null);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [activeDropdown]);

  const enter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const leave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg shadow-black/10"
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

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.groups && enter(item.name)}
                  onMouseLeave={leave}
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.groups ? (
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                        activeDropdown === item.name
                          ? "text-white bg-white/5"
                          : "text-gray-400 hover:text-white"
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
                      className="px-3.5 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Mega dropdown */}
                  <AnimatePresence>
                    {item.groups && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className={cn(
                          "absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl shadow-black/30 overflow-hidden",
                          item.featured ? "w-[720px]" : item.groups.length > 1 ? "w-[560px]" : "w-[300px]"
                        )}
                      >
                        <div className="flex">
                          {/* Groups */}
                          <div className={cn("flex-1 p-4", item.featured && "border-r border-gray-800")}>
                            <div className={cn("grid gap-4", item.groups.length > 1 ? "grid-cols-2" : "grid-cols-1")}>
                              {item.groups.map((group) => (
                                <div key={group.title}>
                                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
                                    {group.title}
                                  </h4>
                                  <div className="space-y-0.5">
                                    {group.items.map((link) => (
                                      <Link
                                        key={link.name}
                                        href={link.href}
                                        className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-800/70 transition-colors group"
                                      >
                                        {link.icon && (
                                          <div className="w-8 h-8 rounded-md bg-gray-800 group-hover:bg-[#8cd139]/10 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                                            <link.icon size={16} className="text-gray-400 group-hover:text-[#8cd139] transition-colors" />
                                          </div>
                                        )}
                                        <div>
                                          <div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                                            {link.name}
                                          </div>
                                          {link.description && (
                                            <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                              {link.description}
                                            </div>
                                          )}
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Featured sidebar */}
                          {item.featured && (
                            <div className="w-[240px] p-5 bg-gray-800/30">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 rounded-full bg-[#8cd139]" />
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                  Featured
                                </span>
                              </div>
                              <h5 className="text-sm font-semibold text-white mb-2">
                                {item.featured.title}
                              </h5>
                              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                                {item.featured.description}
                              </p>
                              <Link
                                href={item.featured.href}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-[#8cd139] hover:underline"
                              >
                                {item.featured.cta}
                                <ArrowRight size={12} />
                              </Link>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                <Play size={14} />
                Take a Tour
              </Link>
              <Link
                href="/auth/login"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Log in
              </Link>
              <Link
                href="#"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-[#8cd139] hover:bg-[#7bc234] rounded-lg transition-colors"
              >
                Start Free Trial
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

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden bg-gray-950 border-t border-gray-800"
            >
              <div className="max-h-[80vh] overflow-y-auto px-4 py-4 space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.groups ? (
                      <MobileDropdown item={item} onNavigate={() => setMobileOpen(false)} />
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
                    Take a Tour
                  </Link>
                  <Link
                    href="/auth/login"
                    className="block px-4 py-3 text-center text-gray-300 hover:text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    Log in
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-3 text-center text-white font-semibold bg-[#8cd139] hover:bg-[#7bc234] rounded-lg transition-colors"
                  >
                    Start Free Trial
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

/* ------------------------------------------------------------------ */
/*  MOBILE DROPDOWN                                                    */
/* ------------------------------------------------------------------ */

function MobileDropdown({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
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
            <div className="pl-4 pb-2 space-y-3">
              {item.groups!.map((group) => (
                <div key={group.title}>
                  <h4 className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {group.title}
                  </h4>
                  <div className="space-y-0.5">
                    {group.items.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-gray-900 transition-colors"
                        onClick={onNavigate}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
