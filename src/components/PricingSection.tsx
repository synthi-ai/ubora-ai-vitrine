'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Zap, Shield, Users, Crown, ArrowRight, Calculator, Clock, Globe } from 'lucide-react';
import gsap from 'gsap';

const PricingComponent = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Enhanced pricing plans configuration
  const plans = {
    free: {
      title: "Free Trial",
      description: "Try UboraAI with no commitment and experience our powerful document processing",
      monthlyPrice: 0,
      annualPrice: 0,
      savings: 0,
      badge: "14 Days Free",
      popular: false,
      icon: Zap,
      color: "gray",
      gradient: "from-gray-500 to-slate-600",
      features: [
        "100 documents/month",
        "Basic OCR processing",
        "Email support",
        "Standard templates",
        "Community forum access",
        "Basic analytics"
      ],
      limits: {
        documents: "100/month",
        users: "1 user",
        storage: "500 MB"
      }
    },
    starter: {
      title: "Starter",
      description: "Perfect for small teams getting started with document automation",
      monthlyPrice: 29,
      annualPrice: 290,
      savings: 58,
      badge: null,
      popular: false,
      icon: Users,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Everything in Free Trial",
        "1,000 documents/month",
        "Advanced OCR processing",
        "Priority email support",
        "Custom templates",
        "API access",
        "Advanced analytics"
      ],
      limits: {
        documents: "1,000/month",
        users: "3 users",
        storage: "2 GB"
      }
    },
    professional: {
      title: "Professional",
      description: "Advanced features for growing businesses and enhanced productivity",
      monthlyPrice: 79,
      annualPrice: 790,
      savings: 158,
      badge: "Most Popular",
      popular: true,
      icon: Shield,
      color: "green",
      gradient: "from-[#8cd139] to-[#6ab526]",
      features: [
        "Everything in Starter",
        "10,000 documents/month",
        "AI-powered extraction",
        "24/7 chat support",
        "Workflow automation",
        "Multi-language support",
        "Advanced integrations",
        "Team collaboration tools"
      ],
      limits: {
        documents: "10,000/month",
        users: "15 users",
        storage: "25 GB"
      }
    },
    enterprise: {
      title: "Enterprise",
      description: "Unlimited scale with enterprise-grade security and dedicated support",
      monthlyPrice: 199,
      annualPrice: 1990,
      savings: 398,
      badge: "Best Value",
      popular: false,
      icon: Crown,
      color: "purple",
      gradient: "from-purple-500 to-violet-600",
      features: [
        "Everything in Professional",
        "Unlimited documents",
        "Custom AI models",
        "Dedicated account manager",
        "On-premise deployment",
        "Enterprise security (SSO)",
        "SLA guarantee (99.9%)",
        "Custom integrations",
        "White-label options"
      ],
      limits: {
        documents: "Unlimited",
        users: "Unlimited",
        storage: "Unlimited"
      }
    }
  };

  useEffect(() => {
    if (isInView && sectionRef.current) {
      // GSAP animations for entrance
      const tl = gsap.timeline();
      
      tl.fromTo('.pricing-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo('.pricing-toggle',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo('.pricing-card',
        { y: 60, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.4)"
        },
        "-=0.3"
      );
    }
  }, [isInView]);

  const getPrice = (plan: any) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
  };

  const getSavingsText = (plan: any) => {
    if (billingPeriod !== 'annual' || !plan.savings) return null;
    return `Save $${plan.savings}`;
  };

  const getMonthlyEquivalent = (plan: any) => {
    if (billingPeriod === 'annual' && plan.annualPrice) {
      return (plan.annualPrice / 12).toFixed(0);
    }
    return null;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden"
      id="pricing"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="pricing-header text-center mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8cd139]/20 to-[#6ab526]/20 px-4 py-2 rounded-full text-sm font-medium text-[#2d5016] mb-6"
            variants={cardVariants}
          >
            <Calculator size={16} className="text-[#8cd139]" />
            Flexible Pricing Plans
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={cardVariants}
          >
            Choose the perfect plan for{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#8cd139] to-[#6ab526] bg-clip-text text-transparent">
                your business
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,2 100,8 T200,8" stroke="#8cd139" strokeWidth="3" fill="none" opacity="0.6"/>
              </svg>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            Scale your document processing capabilities with transparent pricing. 
            No hidden fees, cancel anytime, and upgrade as you grow.
          </motion.p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div 
          className="pricing-toggle flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="relative bg-white rounded-full p-1 shadow-lg border border-gray-200">
            <div className="flex items-center">
              <button
                className={`relative px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
                  billingPeriod === 'monthly' 
                    ? 'text-gray-900 bg-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                <Clock size={16} className="inline-block mr-2" />
                Monthly
              </button>
              <button
                className={`relative px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
                  billingPeriod === 'annual' 
                    ? 'text-white bg-gradient-to-r from-[#8cd139] to-[#6ab526] shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setBillingPeriod('annual')}
              >
                <Globe size={16} className="inline-block mr-2" />
                Annual
                <span className="ml-2 px-2 py-1 text-xs bg-white/20 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Object.entries(plans).map(([key, plan], index) => (
            <motion.div
              key={key}
              className={`pricing-card relative ${
                plan.popular 
                  ? 'lg:scale-105 lg:-mt-4 lg:mb-4' 
                  : ''
              }`}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              onMouseEnter={() => setSelectedPlan(key)}
            >
              <div className={`relative h-full bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-[#8cd139] shadow-2xl' 
                  : selectedPlan === key
                    ? 'border-gray-300 shadow-xl'
                    : 'border-gray-200 hover:border-gray-300'
              }`}>
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${plan.gradient} shadow-lg`}>
                      <Star size={14} />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-4`}>
                      <plan.icon size={32} className="text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-gray-900">
                        ${getPrice(plan)}
                      </span>
                      <span className="text-gray-600 font-medium">
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    
                    {billingPeriod === 'annual' && getMonthlyEquivalent(plan) && (
                      <p className="text-sm text-gray-500 mt-2">
                        ${getMonthlyEquivalent(plan)}/month billed annually
                      </p>
                    )}
                    
                    {getSavingsText(plan) && (
                      <div className="mt-3">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                          {getSavingsText(plan)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Usage Limits */}
                  <div className="mb-8 p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Usage Limits</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Documents</span>
                        <span className="font-medium text-gray-900">{plan.limits.documents}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Team members</span>
                        <span className="font-medium text-gray-900">{plan.limits.users}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Storage</span>
                        <span className="font-medium text-gray-900">{plan.limits.storage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5`}>
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 group ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-xl`
                        : 'bg-white border-2 border-gray-300 text-gray-900 hover:border-gray-400 hover:shadow-md'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                    <ArrowRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {plan.title === 'Enterprise' && (
                    <p className="text-center text-sm text-gray-500 mt-4">
                      Custom pricing available • Contact sales
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Shield size={24} className="text-[#8cd139]" />
              <span className="text-gray-600 font-medium">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock size={24} className="text-[#8cd139]" />
              <span className="text-gray-600 font-medium">Cancel anytime</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users size={24} className="text-[#8cd139]" />
              <span className="text-gray-600 font-medium">24/7 customer support</span>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-gray-600 mb-6">
              Questions about pricing? Our team is here to help.
            </p>
            <motion.button 
              className="bg-white border-2 border-[#8cd139] text-[#8cd139] px-8 py-3 rounded-full font-semibold hover:bg-[#8cd139] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingComponent;