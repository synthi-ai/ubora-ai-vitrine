import React from 'react';

interface AuthButtonProps {
  text: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export default function AuthButton({ 
  text, 
  type = 'submit', 
  onClick 
}: AuthButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full mt-6 uppercase font-medium tracking-wider"
    >
      {text}
    </button>
  );
}