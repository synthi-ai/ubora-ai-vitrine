import React, { ReactNode } from 'react';
import Logo from './Logo';

interface AuthCardProps {
  title: string;
  children: ReactNode;
}

export default function AuthCard({ title, children }: AuthCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-xl px-16 py-20 w-[500px] max-w-xl">
      <Logo />
      <h2 className="text-center text-gray-600 mb-8">{title}</h2>
      {children}
    </div>
  );
}