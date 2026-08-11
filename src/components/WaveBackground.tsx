"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * Single global wave overlay — placed ONCE in the page layout.
 *
 * Performance:
 *   - CSS @keyframes for the infinite horizontal drift (GPU-composited, zero JS)
 *   - ONE gsap.set() call on scroll for vertical parallax (passive listener)
 *
 * Visibility:
 *   - position: fixed, z-index: 1, pointer-events: none
 *   - Sections must NOT have z-index above 1, OR the waves show through
 *     semi-transparent / gradient section edges
 */
export default function WaveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // GSAP scroll-linked vertical parallax — single passive listener
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

      // Waves drift upward as user scrolls down (parallax feel)
      gsap.set(el, { y: progress * -200 });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial position

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {/* Wave 1 — tallest, slowest (25 s loop) */}
      <div className="absolute bottom-0 left-0 w-[200vw] h-[55vh] animate-wave-drift-slow will-change-transform">
        <svg
          className="block w-full h-full"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C320,280 640,40 960,160 C1280,280 1600,40 1920,160 C2240,280 2560,40 2880,160 L2880,320 L0,320 Z"
            fill="rgba(140,209,57,0.22)"
          />
        </svg>
      </div>

      {/* Wave 2 — medium height, mid speed (18 s loop) */}
      <div className="absolute bottom-0 left-0 w-[200vw] h-[40vh] animate-wave-drift-mid will-change-transform">
        <svg
          className="block w-full h-full"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
        >
          <path
            d="M0,200 C240,80 480,300 720,200 C960,100 1200,320 1440,200 C1680,80 1920,300 2160,200 C2400,100 2640,320 2880,200 L2880,320 L0,320 Z"
            fill="rgba(140,209,57,0.14)"
          />
        </svg>
      </div>

      {/* Wave 3 — shortest, fastest (12 s loop) */}
      <div className="absolute bottom-0 left-0 w-[200vw] h-[25vh] animate-wave-drift-fast will-change-transform">
        <svg
          className="block w-full h-full"
          viewBox="0 0 2880 320"
          preserveAspectRatio="none"
        >
          <path
            d="M0,240 C360,160 720,310 1080,240 C1440,170 1800,310 2160,240 C2520,170 2880,310 2880,240 L2880,320 L0,320 Z"
            fill="rgba(140,209,57,0.10)"
          />
        </svg>
      </div>
    </div>
  );
}
