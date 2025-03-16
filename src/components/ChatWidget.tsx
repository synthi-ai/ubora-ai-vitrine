"use client"

import { useState } from 'react';

export default function ChatWidget() {
const [isOpen, setIsOpen] = useState(false);

return (
    <div className="fixed bottom-6 right-6 z-50">
    {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden">
        <div className="bg-green-500 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-medium">Chat Support</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
            </button>
        </div>
        <div className="p-4 h-80 bg-gray-50 overflow-y-auto">
            <div className="bg-gray-200 rounded-lg p-3 mb-3 max-w-xs">
                Bonjour! Comment puis-je vous aider aujourd'hui?
            </div>
        </div>
        <div className="p-3 border-t">
            <div className="flex">
                <input 
                type="text" 
                placeholder="Tapez votre message..." 
                className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            </div>
        </div>
        </div>
    ) : (
        <button 
            onClick={() => setIsOpen(true)} 
            className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button>
    )}
    </div>
);
}