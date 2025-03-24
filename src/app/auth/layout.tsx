// app/auth/layout.tsx
import React from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex items-center bg-gradient-to-br from-blue-500 to-blue-100">
      {/* Notez le retrait de "justify-center" pour permettre l'alignement à gauche */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4">
          <div className="w-96 h-96 bg-cyan-300 rotate-45 rounded-3xl"></div>
        </div>
        <div className="absolute top-1/4 right-1/4">
          <div className="w-80 h-80 bg-cyan-500 rotate-45 rounded-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 transform translate-y-1/4 -translate-x-1/4">
          <div className="w-96 h-96 bg-blue-500 rotate-45 rounded-3xl"></div>
        </div>
      </div>
      
      {/* Container du card maintenant positionné à gauche avec pl-12 (padding-left) */}
      <div className="relative z-10 w-full max-w-md pl-12 ml-12">
        {children}
      </div>
    </div>
  );
}