'use client';

import { useState } from 'react';

export default function PricingComponent() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  // Configuration des plans avec prix mensuels et annuels
  const plans = {
    free: {
      title: "Essai",
      description: "Lorem ipsum dolor sit amet consectur adipis",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "2 Archivistes",
        "2 Projets",
        "OCR",
        "Support",
        "Lorem ipsum"
      ]
    },
    pro: {
      title: "Plan Pro",
      description: "Lorem ipsum dolor sit amet consectur adipis",
      monthlyPrice: 8,
      annualPrice: 72, 
      savings: 24,
      features: [
        "Plan Gratuit",
        "Plusieurs projets",
        "2 comptes admin",
        "4 Archivistes",
        "Lorem Ipsum"
      ]
    },
    business: {
      title: "Plan Business",
      description: "Lorem ipsum dolor sit amet consectur adipis",
      monthlyPrice: 16,
      annualPrice: 160, 
      savings: 32,
      features: [
        "Plan Pro",
        "comptes admin illimités",
        "Lorem ipsum",
        "Lorem",
        "Dolor sit amet"
      ]
    }
  };

  const handleBillingPeriodChange = (period) => {
    setBillingPeriod(period);
  };

  // Fonction pour obtenir le prix actuel en fonction de la période sélectionnée
  const getPrice = (plan) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
  };

  // Calcul des économies annuelles
  const getSavingsText = (plan) => {
    if (billingPeriod !== 'annual' || !plan.savings) return null;
    return `Économisez ${plan.savings}fcfa`;
  };

  return (
    <div id='tarifs' className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Trouvez le plan parfait pour vous.
        </h2>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="relative inline-flex rounded-md shadow-sm">
          <button
            type="button"
            className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-l-md ${
              billingPeriod === 'monthly' 
                ? 'bg-white text-gray-900 shadow-inner' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            onClick={() => handleBillingPeriodChange('monthly')}
          >
            Mensuel
          </button>
          <button
            type="button"
            className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-r-md ${
              billingPeriod === 'annual' 
                ? 'bg-lime-500 text-white shadow-inner' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            onClick={() => handleBillingPeriodChange('annual')}
          >
            Annuel
          </button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
        {/* Essai Plan */}
        <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-medium text-gray-900 text-center">{plans.free.title}</h3>
          <p className="mt-4 text-center text-gray-500">
            {plans.free.description}
          </p>
          <div className="mt-6 text-center">
            <span className="text-4xl font-bold text-gray-900">{getPrice(plans.free)}</span>
            <span className="text-sm font-medium text-gray-500 ml-1">fcfa</span>
            {billingPeriod === 'annual' && <p className="text-xs text-gray-500 mt-1">{getPrice(plans.free) / 12} fcfa par mois</p>}
          </div>

          <ul className="mt-8 space-y-4 flex-1">
            {plans.free.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-lime-500">
                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-base text-gray-700">{feature}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button
              type="button"
              className="w-full bg-white border border-lime-500 rounded-md py-2 text-sm font-medium text-lime-500 transition-all duration-200 hover:bg-lime-50 hover:shadow-md"
            >
              Acheter
            </button>
          </div>
        </div>

        {/* Plan Pro */}
        <div className="relative bg-lime-500 rounded-2xl shadow-lg p-8 flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="absolute inset-x-0 transform translate-y-px">
            <div className="flex justify-center transform -translate-y-1/2">
              <span className="inline-flex rounded-full bg-lime-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                {plans.pro.title}
              </span>
            </div>
          </div>
          <h3 className="text-2xl font-medium text-white text-center mt-4">{plans.pro.title}</h3>
          <p className="mt-4 text-center text-white opacity-75">
            {plans.pro.description}
          </p>
          <div className="mt-6 text-center">
            <span className="text-5xl font-bold text-white">{getPrice(plans.pro)}</span>
            <span className="text-sm font-medium text-white opacity-75 ml-1">fcfa</span>
            {billingPeriod === 'annual' && <p className="text-xs text-white opacity-75 mt-1">{(getPrice(plans.pro) / 12).toFixed(1)} fcfa par mois</p>}
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg">
            {getSavingsText(plans.pro) && (
              <div className="flex justify-center">
                <span className="px-4 py-1 text-xs font-semibold tracking-wider uppercase text-lime-800 bg-lime-100 rounded-full">
                  {getSavingsText(plans.pro)}
                </span>
              </div>
            )}

            <ul className="mt-6 space-y-4">
              {plans.pro.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-lime-500">
                      <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-3 text-base text-gray-700">{feature}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <button
                type="button"
                className="w-full bg-lime-500 rounded-md py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-lime-600 hover:shadow-md"
              >
                Acheter
              </button>
            </div>
          </div>
        </div>

        {/* Plan Business */}
        <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-medium text-gray-900 text-center">{plans.business.title}</h3>
          <p className="mt-4 text-center text-gray-500">
            {plans.business.description}
          </p>
          <div className="mt-6 text-center">
            <span className="text-4xl font-bold text-gray-900">{getPrice(plans.business)}</span>
            <span className="text-sm font-medium text-gray-500 ml-1">fcfa</span>
            {billingPeriod === 'annual' && <p className="text-xs text-gray-500 mt-1">{(getPrice(plans.business) / 12).toFixed(1)} fcfa par mois</p>}
          </div>

          <ul className="mt-8 space-y-4 flex-1">
            {plans.business.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-lime-500">
                    <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-base text-gray-700">{feature}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button
              type="button"
              className="w-full bg-white border border-lime-500 rounded-md py-2 text-sm font-medium text-lime-500 transition-all duration-200 hover:bg-lime-50 hover:shadow-md"
            >
              Acheter
            </button>
          </div>
          {getSavingsText(plans.business) && (
            <div className="mt-3 text-center">
              <span className="text-xs font-semibold text-lime-600">
                {getSavingsText(plans.business)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}