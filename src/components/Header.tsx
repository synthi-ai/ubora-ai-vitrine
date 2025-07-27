"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  User,
  Zap,
  FileText,
  Shield,
  Building,
  CreditCard,
  BookOpen,
  ArrowRight,
  Calendar,
  Cloud,
  Cpu,
  GraduationCap,
  Heart,
  PenTool,
  Users,
  Briefcase,
  Eye,
  Info,
  Newspaper,
  ShieldCheck,
  Binary,
  Orbit,
  Activity,
  Sparkles,
  Layers,
  Bot,
  Scan
} from "lucide-react";

const menuData = [
  {
    name: "Explore",
    mega: [
      {
        title: "Platform",
        items: [
          { name: "AI Center", href: "#", icon: Zap, description: "Build and manage machine learning models" },
          { name: "Automation Cloud", href: "#", icon: Cloud, description: "Deliver automation from the cloud" },
          { name: "Studio", href: "#", icon: PenTool, description: "Design automations with a visual interface" },
          { name: "Robot", href: "#", icon: Cpu, description: "Execute automations with software robots" }
        ]
      },
      {
        title: "Solutions",
        items: [
          { name: "Finance", href: "#", icon: CreditCard, description: "Streamline invoicing and reconciliation" },
          { name: "HR", href: "#", icon: User, description: "Simplify onboarding and employee services" },
          { name: "IT", href: "#", icon: Shield, description: "Automate support and system provisioning" },
          { name: "Healthcare", href: "#", icon: Heart, description: "Digitize patient and claims processes" }
        ]
      },
      {
        title: "Resources",
        items: [
          { name: "Academy", href: "#", icon: GraduationCap, description: "Upskill with free automation training" },
          { name: "Documentation", href: "#", icon: BookOpen, description: "Explore product guides and APIs" },
          { name: "Community", href: "#", icon: Users, description: "Connect with other automation experts" },
          { name: "Events", href: "#", icon: Calendar, description: "Join our webinars and conferences" }
        ]
      }
    ],
    cta: {
      text: "Try Ubora AI Free",
      href: "#",
      variant: "primary"
    }
  },
  {
    name: "Products",
    mega: [
      {
        title: "By Use Case",
        items: [
          { name: "Invoice Processing", href: "#", icon: FileText, description: "Automate invoice data extraction" },
          { name: "ID Verification", href: "#", icon: Shield, description: "Secure identity verification" },
          { name: "Document OCR", href: "#", icon: Zap, description: "Advanced text recognition" },
          { name: "Form Processing", href: "#", icon: FileText, description: "Digital form automation" },
        ],
      },
      {
        title: "By Industry",
        items: [
          { name: "Finance & Banking", href: "#", icon: CreditCard, description: "Financial document processing" },
          { name: "Healthcare", href: "#", icon: Shield, description: "Medical records management" },
          { name: "Logistics", href: "#", icon: Building, description: "Supply chain documentation" },
          { name: "Legal", href: "#", icon: BookOpen, description: "Legal document analysis" },
        ],
      },
      {
        title: "Developer Tools",
        items: [
          { name: "API Documentation", href: "#", icon: BookOpen, description: "Complete API reference" },
          { name: "SDK & Libraries", href: "#", icon: Zap, description: "Ready-to-use SDKs" },
          { name: "Sandbox", href: "#", icon: FileText, description: "Test our APIs" },
        ],
      },
    ],
    cta: { text: "Talk to Sales", href: "#", variant: "primary" }
  },
  {
    name: "Solutions",
    mega: [
      {
        title: "By Department",
        items: [
          { name: "Accounts Payable", href: "#", icon: CreditCard, description: "Streamline AP processes" },
          { name: "Procurement", href: "#", icon: Building, description: "Purchase order automation" },
          { name: "HR & Onboarding", href: "#", icon: User, description: "Employee document processing" },
          { name: "Compliance", href: "#", icon: Shield, description: "Regulatory compliance" },
        ],
      },
      {
        title: "Enterprise Features",
        items: [
          { name: "Custom Models", href: "#", icon: Zap, description: "Tailored AI models" },
          { name: "On-Premise", href: "#", icon: Building, description: "Secure on-site deployment" },
          { name: "White Label", href: "#", icon: FileText, description: "Brand customization" },
        ],
      },
    ],
    cta: { text: "View All Solutions", href: "#", variant: "secondary" }
  },
  { name: "Pricing", href: "#pricing" },
  {
    name: "Resources",
    mega: [
      {
        title: "Learn & Support",
        items: [
          { name: "Documentation", href: "#", icon: BookOpen, description: "Technical guides" },
          { name: "Case Studies", href: "#", icon: FileText, description: "Success stories" },
          { name: "Blog", href: "#", icon: Zap, description: "Latest insights" },
          { name: "Help Center", href: "#", icon: Shield, description: "Get support" },
        ],
      },
      {
        title: "Community",
        items: [
          { name: "Developer Forum", href: "#", icon: User, description: "Connect with developers" },
          { name: "Webinars", href: "#", icon: Building, description: "Live training sessions" },
          { name: "Partners", href: "#", icon: CreditCard, description: "Integration partners" },
        ],
      },
    ],
    cta: { text: "Join Community", href: "#", variant: "secondary" }
  },
  {
    name: "About",
    mega: [
      {
        title: "Company",
        items: [
          { name: "About Ubora", href: "#", icon: Info, description: "Our mission and vision" },
          { name: "Leadership", href: "#", icon: Users, description: "Meet the team" },
          { name: "Careers", href: "#", icon: Briefcase, description: "Join our journey" }
        ]
      },
      {
        title: "News",
        items: [
          { name: "Press Room", href: "#", icon: Newspaper, description: "Latest announcements" },
          { name: "Events", href: "#", icon: Calendar, description: "Webinars and conferences" }
        ]
      },
      {
        title: "Trust",
        items: [
          { name: "Security", href: "#", icon: ShieldCheck, description: "How we protect data" },
          { name: "Accessibility", href: "#", icon: Eye, description: "Inclusive automation" }
        ]
      }
    ],
    cta: {
      text: "Contact Us",
      href: "#",
      variant: "secondary"
    }
  }
];

export default function QuantumFuturisticHeader() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [systemOnline, setSystemOnline] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {

    if (typeof window !== 'undefined') {

      setWindowWidth(window.innerWidth);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    // Initialize quantum system
    setTimeout(() => setSystemOnline(true), 1000);

    // Scanning animation
    const scanInterval = setInterval(() => {
      setScanProgress(prev => (prev >= 100 ? 0 : prev + 3));
    }, 100);

    return () => clearInterval(scanInterval);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  // Detect active section and scroll state
  useEffect(() => {
    const sections = ["home", "features", "pricing", "testimonials", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Header background change on scroll
      setScrolled(scrollPosition > 50);

      // Active section detection
      if (scrollPosition < 300) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 200 && scrollPosition < offsetTop + offsetHeight - 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMegaMenu(null);
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <motion.header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl border-b border-[#8cd139]/20'
            : 'bg-slate-950/90 backdrop-blur-lg shadow-xl border-b border-[#8cd139]/10'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Quantum Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Digital Rain Effect */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-[#8cd139] to-transparent"
                style={{
                  left: `${(i * 5) % 100}%`,
                  height: '60px'
                }}
                animate={{
                  y: [-60, 100, -60],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          {/* Neural Network Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-5">
            {[...Array(10)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${(i * 10) % 100}%`}
                y1="0%"
                x2={`${((i + 3) * 10) % 100}%`}
                y2="100%"
                stroke="#8cd139"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            ))}
          </svg>

          {/* Scanning Line */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8cd139] to-transparent"
            animate={{
              x: [-100, windowWidth + 100, -100]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative w-full px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Quantum Logo */}
            <motion.div
              className="flex items-center ml-2 sm:ml-4 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center relative">
                {/* Logo Glow Effect */}
                <div className="absolute inset-0 bg-[#8cd139]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-center gap-3">
                  {/* System Status Indicator */}
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${systemOnline ? 'bg-[#8cd139] animate-pulse' : 'bg-red-400'}`} />
                    <span className="text-[#8cd139] font-mono text-xs hidden sm:block">
                      {systemOnline ? 'ONLINE' : 'INIT'}
                    </span>
                  </div>

                  <Image
                    src="/ubora.png"
                    alt="UboraAI Quantum Logo"
                    width={140}
                    height={50}
                    priority
                    className="hover:opacity-90 transition-all duration-300 relative z-10"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(140, 209, 57, 0.3))' }}
                  />
                </div>
              </Link>
            </motion.div>

            {/* Quantum Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuData.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => item.mega && setOpenMegaMenu(index)}
                  onMouseLeave={() => setOpenMegaMenu(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="relative px-4 py-2 text-cyan-200 hover:text-[#8cd139] transition-all duration-300 font-medium text-lg group"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <motion.div
                        className="absolute inset-0 bg-[#8cd139]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        layoutId={`nav-bg-${index}`}
                      />
                    </Link>
                  ) : (
                    <button className="relative flex items-center px-4 py-2 text-cyan-200 hover:text-[#8cd139] transition-all duration-300 font-medium text-lg group">
                      <span className="relative z-10">{item.name}</span>
                      {item.mega && (
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-300 ${openMegaMenu === index ? 'rotate-180 text-[#8cd139]' : ''
                            }`}
                        />
                      )}
                      <motion.div
                        className="absolute inset-0 bg-[#8cd139]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        layoutId={`nav-bg-${index}`}
                      />
                    </button>
                  )}

                  {/* Quantum Mega Menu */}
                  <AnimatePresence>
                    {openMegaMenu === index && item.mega && (
                      <motion.div
                        ref={megaMenuRef}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-5xl bg-slate-900/95 backdrop-blur-xl shadow-2xl rounded-2xl p-8 mt-4 border border-[#8cd139]/30 overflow-hidden"
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {/* Quantum Grid Background */}
                        <div className="absolute inset-0 opacity-10">
                          <svg className="w-full h-full">
                            <defs>
                              <pattern id="quantum-mega-grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                                <circle cx="15" cy="15" r="1" fill="#8cd139" />
                                <path d="M0,15 L30,15 M15,0 L15,30" stroke="#8cd139" strokeWidth="0.5" opacity="0.3" />
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#quantum-mega-grid)" />
                          </svg>
                        </div>

                        {/* Scanning Effect */}
                        <motion.div
                          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8cd139] to-transparent"
                          animate={{
                            x: [-100, 600, -100]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />

                        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                          {item.mega.map((column, colIndex) => (
                            <motion.div
                              key={colIndex}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: colIndex * 0.1, duration: 0.5 }}
                            >
                              <h3 className="font-bold text-[#8cd139] mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                                <Binary size={12} />
                                {column.title}
                              </h3>
                              <ul className="space-y-3">
                                {column.items.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link
                                      href={subItem.href}
                                      className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-[#8cd139]/20"
                                    >
                                      <div className="mt-1 p-2 bg-[#8cd139]/10 rounded-lg group-hover:bg-[#8cd139]/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#8cd139]/25">
                                        <subItem.icon size={16} className="text-[#8cd139]" />
                                      </div>
                                      <div>
                                        <div className="font-medium text-white group-hover:text-[#8cd139] transition-colors duration-300">
                                          {subItem.name}
                                        </div>
                                        <div className="text-sm text-slate-400 mt-1 group-hover:text-slate-300 transition-colors duration-300">
                                          {subItem.description}
                                        </div>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </div>

                        {/* Quantum CTA */}
                        {item.cta && (
                          <motion.div
                            className="mt-8 pt-6 border-t border-[#8cd139]/20 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                          >
                            <Link
                              href={item.cta.href}
                              className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 relative overflow-hidden group ${item.cta.variant === 'primary'
                                  ? 'bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105'
                                  : 'bg-[#8cd139]/20 text-[#8cd139] border border-[#8cd139]/50 hover:bg-[#8cd139]/30'
                                }`}
                            >
                              {item.cta.variant === 'primary' && (
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              )}
                              <span className="relative flex items-center gap-3">
                                <Sparkles size={16} />
                                {item.cta.text}
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                              </span>
                            </Link>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Quantum Search & Actions */}
            <div className="hidden lg:flex items-center space-x-4 mr-2 sm:mr-4">
              {/* Quantum Search */}
              <div className="relative">
                <AnimatePresence>
                  {searchOpen ? (
                    <motion.div
                      className="relative"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 280, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <input
                        type="text"
                        placeholder="Neural search..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-800/60 backdrop-blur-sm border border-[#8cd139]/30 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8cd139] focus:border-[#8cd139] text-white placeholder-slate-400 font-mono"
                        autoFocus
                        onBlur={() => setSearchOpen(false)}
                      />
                      <Search size={16} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8cd139]" />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <div className="w-2 h-2 bg-[#8cd139] rounded-full animate-pulse" />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.button
                      onClick={() => setSearchOpen(true)}
                      className="p-3 text-cyan-200 hover:text-[#8cd139] transition-all duration-300 hover:bg-slate-800/50 rounded-full group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Search size={20} />
                      <motion.div
                        className="absolute inset-0 bg-[#8cd139]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        layoutId="search-bg"
                      />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Neural Auth Buttons */}
              <Link
                href="/signin"
                className="relative text-cyan-200 hover:text-[#8cd139] font-medium transition-all duration-300 text-sm px-4 py-2 rounded-full hover:bg-slate-800/50 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <User size={16} />
                  Neural Sign in
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#8cd139]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="signin-bg"
                />
              </Link>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/signup"
                  className="relative bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5855eb] hover:to-[#7c3aed] text-white px-6 py-3 rounded-full font-bold transition-all duration-300 text-sm shadow-lg hover:shadow-purple-500/25 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    <Bot size={16} />
                    Try Free
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Quantum Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-3 text-cyan-200 hover:text-[#8cd139] transition-all duration-300 mr-2 sm:mr-4 rounded-full hover:bg-slate-800/50 relative group"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div
                className="absolute inset-0 bg-[#8cd139]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="mobile-menu-bg"
              />
            </motion.button>
          </div>
        </div>

        {/* Quantum Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-[#8cd139]/20 shadow-2xl overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Mobile Background Effects */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full">
                  <defs>
                    <pattern id="mobile-quantum-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="0.5" fill="#8cd139" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mobile-quantum-grid)" />
                </svg>
              </div>

              <div className="relative px-4 py-6 space-y-4 max-h-96 overflow-y-auto">
                {/* Mobile Quantum Menu */}
                {menuData.map((item, index) => (
                  <motion.details
                    key={index}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <summary className="flex justify-between items-center px-4 py-3 text-cyan-200 font-medium cursor-pointer hover:text-[#8cd139] rounded-xl hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-[#8cd139]/20">
                      <span className="flex items-center gap-2">
                        <Orbit size={16} />
                        {item.name}
                      </span>
                      {item.mega && <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform duration-300" />}
                    </summary>
                    {item.mega && (
                      <motion.div
                        className="mt-3 space-y-4 pl-4 border-l-2 border-[#8cd139]/30"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.mega.map((column, colIndex) => (
                          <div key={colIndex}>
                            <h4 className="font-bold text-[#8cd139] mb-3 text-sm flex items-center gap-2">
                              <Binary size={12} />
                              {column.title}
                            </h4>
                            <ul className="space-y-2">
                              {column.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center space-x-3 px-3 py-3 text-slate-300 hover:text-[#8cd139] rounded-lg hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-[#8cd139]/20 group"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <div className="p-1 bg-[#8cd139]/10 rounded-md group-hover:bg-[#8cd139]/20 transition-colors duration-300">
                                      <subItem.icon size={14} className="text-[#8cd139]" />
                                    </div>
                                    <span>{subItem.name}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        {item.cta && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                          >
                            <Link
                              href={item.cta.href}
                              className={`block text-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ${item.cta.variant === 'primary'
                                  ? 'bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white hover:shadow-lg hover:shadow-purple-500/25'
                                  : 'bg-[#8cd139]/20 text-[#8cd139] border border-[#8cd139]/50 hover:bg-[#8cd139]/30'
                                }`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.cta.text}
                            </Link>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </motion.details>
                ))}

                {/* Mobile Quantum Search */}
                <motion.div
                  className="pt-4 border-t border-[#8cd139]/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Neural search..."
                      className="w-full px-12 py-4 bg-slate-800/60 backdrop-blur-sm border border-[#8cd139]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8cd139] focus:border-[#8cd139] text-white placeholder-slate-400 font-mono"
                    />
                    <Search size={16} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8cd139]" />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-2 h-2 bg-[#8cd139] rounded-full animate-pulse" />
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Quantum Auth */}
                <motion.div
                  className="pt-4 border-t border-[#8cd139]/20 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <Link
                    href="/signin"
                    className="flex items-center justify-center gap-2 w-full text-center px-4 py-4 text-cyan-200 hover:text-[#8cd139] font-medium transition-all duration-300 rounded-xl hover:bg-slate-800/50 border border-[#8cd139]/20 hover:border-[#8cd139]/50"
                    onClick={() => setMobileOpen(false)}
                  >
                    <User size={16} />
                    Neural Sign in
                  </Link>
                  <Link
                    href="/signup"
                    className="flex items-center justify-center gap-2 w-full text-center bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5855eb] hover:to-[#7c3aed] text-white px-4 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Bot size={16} />
                    Try Quantum Free
                  </Link>
                </motion.div>

                {/* System Status Display */}
                <motion.div
                  className="pt-4 border-t border-[#8cd139]/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-[#8cd139]/20">
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-[#8cd139]">QUANTUM_STATUS</span>
                      <span className="text-white">{scanProgress.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#8cd139] to-cyan-400"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs">
                      <div className="flex items-center gap-2">
                        <Activity size={10} className="text-[#8cd139] animate-pulse" />
                        <span className="text-slate-400">Neural Core: Online</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers size={10} className="text-cyan-400" />
                        <span className="text-slate-400">Quantum Sync: Active</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quantum Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#8cd139] to-transparent"
          style={{ width: `${scanProgress}%` }}
          animate={{
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.header>

      {/* Quantum Spacer */}
      <div className="h-16 lg:h-20 relative">
        {/* Additional quantum effects for seamless transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 to-transparent" />
      </div>

      {/* Additional CSS for quantum effects */}
      <style jsx>{`
        @keyframes quantum-glow {
          0%, 100% { 
            box-shadow: 0 0 5px rgba(140, 209, 57, 0.3);
          }
          50% { 
            box-shadow: 0 0 20px rgba(140, 209, 57, 0.8), 0 0 40px rgba(140, 209, 57, 0.4);
          }
        }
        
        .quantum-glow {
          animation: quantum-glow 3s infinite;
        }
        
        @keyframes neural-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        .neural-pulse {
          animation: neural-pulse 2s infinite;
        }

        @keyframes data-stream {
          0% { transform: translateY(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        
        .data-stream {
          animation: data-stream 3s infinite;
        }

        /* Custom scrollbar for mobile menu */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 2px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(140, 209, 57, 0.5);
          border-radius: 2px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(140, 209, 57, 0.8);
        }
      `}</style>
    </>
  );
}