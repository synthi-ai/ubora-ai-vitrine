'use client';

import React, { useState, useRef, useEffect } from 'react';
import AuthCard from '@/components/AuthCard';
import AuthButton from '@/components/AuthButton';
import { useRouter } from 'next/navigation';

export default function VerifyCodePage() {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus sur le premier champ vide
    const firstEmptyIndex = code.findIndex(digit => digit === '');
    if (firstEmptyIndex !== -1&& inputRefs.current[firstEmptyIndex]) {
      inputRefs.current[firstEmptyIndex]?.focus();
    }
  }, [code]);

  const handleChange = (index: number, value: string) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      // Focus sur le champ suivant si une valeur est entrée
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      // Focus sur le champ précédent si backspace est pressé dans un champ vide
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Vérifier le code
    router.push('/auth/reset-password/new-password');
  };

  return (
    <AuthCard title="Un code de réinitialisation vous a été envoyé par mail. Entrez le pour réinitialiser votre mot de passe.">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center gap-2 mb-8">
          {code.map((digit, index) => (
            <div 
              key={index} 
              className={`w-10 h-10 rounded-full border flex items-center justify-center ${
                index < 3 ? 'border-green-500' : 'border-gray-300'
              }`}
            >
              <input
                  ref={el => {
                    if (el) inputRefs.current[index] = el;
                  }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(index, e.target.value)}
                onKeyDown={e => handleKeyDown(index, e)}
                className="w-6 h-6 text-center bg-transparent outline-none"
                required
              />
            </div>
          ))}
        </div>
        
        <AuthButton text="Envoyer" />
      </form>
    </AuthCard>
  );
}