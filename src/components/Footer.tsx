"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUp,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Globe,
  Shield,
  Heart,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openSections, setOpenSections] = useState<string[]>([]);

  // Show back to top button when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Toggle mobile sections
  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const footerSections = [
    {
      title: "Platform",
      id: "platform",
      links: [
        { name: "Document Processing", href: "/platform/document-processing" },
        { name: "OCR Technology", href: "/platform/ocr" },
        { name: "AI Models", href: "/platform/ai-models" },
        { name: "API Documentation", href: "/developers/api" },
        { name: "Integrations", href: "/platform/integrations" },
        { name: "Security", href: "/platform/security" }
      ]
    },
    {
      title: "Solutions",
      id: "solutions",
      links: [
        { name: "Invoice Processing", href: "/solutions/invoice-processing" },
        { name: "Identity Verification", href: "/solutions/identity-verification" },
        { name: "Contract Analysis", href: "/solutions/contract-analysis" },
        { name: "Form Processing", href: "/solutions/form-processing" },
        { name: "Healthcare", href: "/solutions/healthcare" },
        { name: "Financial Services", href: "/solutions/financial" }
      ]
    },
    {
      title: "Resources",
      id: "resources",
      links: [
        { name: "Documentation", href: "/resources/docs" },
        { name: "Case Studies", href: "/resources/case-studies" },
        { name: "Blog", href: "/resources/blog" },
        { name: "Webinars", href: "/resources/webinars" },
        { name: "White Papers", href: "/resources/white-papers" },
        { name: "ROI Calculator", href: "/resources/roi-calculator" }
      ]
    },
    {
      title: "Company",
      id: "company",
      links: [
        { name: "About Us", href: "/company/about" },
        { name: "Careers", href: "/company/careers" },
        { name: "Leadership", href: "/company/leadership" },
        { name: "Partners", href: "/company/partners" },
        { name: "News & Events", href: "/company/news" },
        { name: "Contact", href: "/company/contact" }
      ]
    },
    {
      title: "Support",
      id: "support",
      links: [
        { name: "Help Center", href: "/support/help" },
        { name: "Community Forum", href: "/support/community" },
        { name: "Technical Support", href: "/support/technical" },
        { name: "Training", href: "/support/training" },
        { name: "System Status", href: "/support/status" },
        { name: "Contact Support", href: "/support/contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/uboraai", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/uboraai", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/uboraai", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com/uboraai", label: "YouTube" }
  ];

  const trustBadges = [
    { name: "SOC 2", icon: Shield },
    { name: "ISO 27001", icon: Shield },
    { name: "GDPR", icon: Globe },
    { name: "HIPAA", icon: Shield },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Back to top button */}
      <motion.button
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#8cd139] hover:bg-[#7bc234] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="text-white" />
      </motion.button>

      <div className="relative">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#8cd139] to-[#6ab526] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Accelerate Your Digital Transformation
                </h3>
                <p className="text-white/90 text-lg">
                  Subscribe to receive cutting-edge insights on AI automation, document processing innovations, 
                  and industry best practices delivered directly to your inbox.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto lg:min-w-[400px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <motion.button
                  className="bg-white text-[#8cd139] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Company Info - Left Column */}
              <div className="lg:col-span-4">
                <div className="mb-8">
                  <Link href="/" className="inline-block">
                    <Image
                      src="/ubora.png"
                      alt="UboraAI Logo"
                      width={160}
                      height={60}
                      className="hover:opacity-90 transition-opacity"
                    />
                  </Link>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  UboraAI revolutionizes document workflows through advanced artificial intelligence and machine learning. 
                  Empowering organizations across Africa and globally, we deliver intelligent automation solutions that 
                  transform paper-based processes into streamlined digital operations, driving unprecedented efficiency 
                  and accuracy in document processing.
                </p>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 hover:bg-[#8cd139] rounded-lg flex items-center justify-center transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Footer Links - Right Columns */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                  {footerSections.map((section, index) => (
                    <div key={index}>
                      {/* Mobile: Collapsible sections */}
                      <button
                        className="flex items-center justify-between w-full text-left lg:pointer-events-none"
                        onClick={() => toggleSection(section.id)}
                      >
                        <h4 className="font-semibold text-white text-lg mb-4 lg:mb-6">
                          {section.title}
                        </h4>
                        <ChevronDown 
                          size={20} 
                          className={`lg:hidden transition-transform ${
                            openSections.includes(section.id) ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Links */}
                      <div className={cn(
                        "space-y-3",
                        openSections.includes(section.id) ? "block" : "hidden lg:block"
                      )}>
                        {section.links.map((link, linkIndex) => (
                          <div key={linkIndex}>
                            <Link
                              href={link.href}
                              className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                            >
                              {link.name}
                              {link.href.startsWith('http') && (
                                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                              )}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust & Compliance Section */}
        <div className="bg-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Shield size={20} className="text-[#8cd139]" />
                  <span className="text-gray-300 font-medium">Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={20} className="text-[#8cd139]" />
                  <span className="text-gray-300 font-medium">Global Compliance</span>
                </div>
              </div>
              
              {/* Trust badges */}
              <div className="flex items-center gap-4 opacity-70">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-600 rounded-md">
                    <badge.icon size={14} className="text-gray-400" />
                    <span className="text-xs font-medium text-gray-300">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-black py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {new Date().getFullYear()} UboraAI Technologies Inc. All rights reserved worldwide.</span>
                <span className="hidden lg:inline">•</span>
                <span className="hidden lg:inline flex items-center gap-1">
                  Proudly engineered with <Heart size={14} className="text-red-500" /> in Cameroon
                </span>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <Link href="/legal/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/legal/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/legal/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
                <Link href="/legal/gdpr" className="text-gray-400 hover:text-white transition-colors">
                  GDPR
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;