import React from 'react';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex justify-center mb-6">
      <div className="text-3xl font-bold">
        <span className="text-blue-600">U</span>
        <span className="text-blue-500">b</span>
        <span className="text-blue-600">o</span>
        <span className="text-blue-600">r</span>
        <span className="text-blue-600">a</span>
        {' '}
        <span className="text-green-600">A</span>
        <span className="text-green-600">I</span>
      </div>
    </div>
  );
}