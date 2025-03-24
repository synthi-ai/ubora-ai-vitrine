'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthCard from '@/components/AuthCard';
import AuthButton from '@/components/AuthButton';

export default function ResetPasswordRequestPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Envoyer la demande de réinitialisation
    router.push('/auth/reset-password/verify');
  };

  return (
    <AuthCard title="Veuillez entrer votre adresse mail pour réinitialiser votre mot de passe">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
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
        
        <AuthButton text="Envoyer" />
      </form>
    </AuthCard>
  );
}