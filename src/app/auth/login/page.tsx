'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AuthCard from '@/components/AuthCard';
import AuthButton from '@/components/AuthButton';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion
  };

  return (
    <AuthCard title="Connectez-vous pour accéder au tableau de bord.">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Adresse mail
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre adresse mail"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mot de passe
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <span className="text-gray-500">🔒</span>
              ) : (
                <span className="text-gray-500">👁️</span>
              )}
            </button>
          </div>
        </div>
        
        <div className="text-right mb-6">
          <Link 
            href="/auth/reset-password" 
            className="text-sm text-blue-600 hover:underline"
          >
            Mot de passe oublié?
          </Link>
        </div>
        
        <AuthButton text="Connexion" />
      </form>
    </AuthCard>
  );
}