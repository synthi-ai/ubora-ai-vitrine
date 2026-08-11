"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/* Data — one slide per industry                                       */
/* ------------------------------------------------------------------ */

const slides = [
  {
    eyebrow: "Gallery of Customer Achievement",
    company: "Central Bank",
    description:
      "Processing thousands of compliance documents daily was overwhelming the Central Bank's operations team. UboraAI automated 97% of document workflows — cutting processing time by 85% and saving over 15,000 work hours annually.",
    cta: "Read the full story",
    ctaHref: "#",
    image: "/photo_2026-06-07 17.36.44.jpeg",
  },
  {
    eyebrow: "Gallery of Customer Achievement",
    company: "AfricaTech",
    description:
      "AfricaTech needed to scale invoice processing across 12 African markets. With UboraAI's multilingual OCR, they achieved a 650% efficiency gain and 99.8% accuracy — transforming their entire finance operation.",
    cta: "Watch the video",
    ctaHref: "#",
    image: "/photo_2026-06-07 17.36.47.jpeg",
  },
  {
    eyebrow: "Gallery of Customer Achievement",
    company: "Maghreb Insurance",
    description:
      "Claims processing in French, English, and Arabic was slowing down Maghreb Insurance's onboarding. UboraAI's intelligent extraction reduced errors by 95% and accelerated processing speed by 500%.",
    cta: "Watch the video",
    ctaHref: "#",
    image: "/photo_2026-06-07 17.36.53.jpeg",
  },
  {
    eyebrow: "Gallery of Customer Achievement",
    company: "Port Authority",
    description:
      "From customs forms to shipping manifests, the Port Authority of Douala faced 100,000+ documents monthly. UboraAI delivered 100% automation and 99.9% compliance — with zero manual sorting.",
    cta: "Watch the video",
    ctaHref: "#",
    image: "/photo_2026-06-07 17.36.58.jpeg",
  },
  {
    eyebrow: "Gallery of Customer Achievement",
    company: "Tropical Foods",
    description:
      "Tropical Foods integrated UboraAI with their existing SAP system in under a week. The result? 100% integration coverage, 99.9% uptime, and a 5-star support experience that exceeded every expectation.",
    cta: "Read the full story",
    ctaHref: "#",
    image: "/photo_2026-06-07 17.37.04.jpeg",
  },
  {
    eyebrow: "Gallery of Customer Achievement",
    company: "MediCare Africa",
    description:
      "Patient records, imaging reports, and insurance claims were buried in paper. MediCare Africa deployed UboraAI to digitize 30,000+ documents monthly — cutting paperwork by 75% and freeing clinicians to focus on care.",
    cta: "Watch the video",
    ctaHref: "#",
    image: "/photo_2026-06-07 17.36.44.jpeg",
  },
  {
    eyebrow: "Gallery of Customer Achievement",
    company: "EduConnect",
    description:
      "Enrollment season meant chaos for EduConnect — thousands of transcripts, forms, and IDs to process. UboraAI's high-accuracy OCR made enrollment 85% faster and eliminated manual data entry entirely.",
    cta: "Get the full story",
    ctaHref: "#",
    image: "/photo_2026-06-07 17.36.47.jpeg",
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function IndustriesTransformationSection() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
  }, []);

  useEffect(() => {
    if (isInView) startAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView, startAutoplay]);

  const navigate = (dir: "prev" | "next") => {
    setActive((prev) =>
      dir === "next"
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length
    );
    startAutoplay();
  };

  const current = slides[active];
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section
      ref={ref}
      id="industries"
      className="relative bg-[#e8f0f4] overflow-hidden"
    >
      <div className="max-w-[1920px] mx-auto">
        {/* ---- Wrapper: flex row on desktop, column-reverse on mobile ---- */}
        <div className="flex flex-col-reverse lg:flex-row items-center min-h-[620px]">
          {/* ============================================= */}
          {/* LEFT — Text content slider (≈43%)             */}
          {/* ============================================= */}
          <div className="w-full lg:w-[43%] px-6 sm:px-10 lg:pl-[clamp(40px,12vw,224px)] lg:pr-6 py-12 lg:py-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Eyebrow */}
                <p className="text-sm font-semibold text-[#8cd139] mb-6 tracking-wide uppercase">
                  {current.eyebrow}
                </p>

                {/* Company name — BIG */}
                <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[96px] font-extrabold text-gray-900 leading-[1] mb-6">
                  {current.company}
                </h2>

                {/* Description */}
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6 max-w-lg">
                  {current.description}
                </p>

                {/* CTA link */}
                <a
                  href={current.ctaHref}
                  className="inline-flex items-center gap-2 text-gray-900 font-medium group/link hover:text-[#8cd139] transition-colors"
                >
                  <span className="underline underline-offset-4 decoration-gray-400 group-hover/link:decoration-[#8cd139]">
                    {current.cta}
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform group-hover/link:translate-x-1"
                  >
                    <path
                      d="M19.6 11L16.34 7.7a1 1 0 011.42-1.41l4.9 4.96a1 1 0 01-.01 1.45l-4.9 5.03a1 1 0 01-1.42-1.41L19.6 13H2a1 1 0 110-2h17.6z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </motion.div>
            </AnimatePresence>

            {/* ---- Navigation: arrows + counter ---- */}
            <div className="flex items-center gap-6 mt-12 lg:mt-16">
              {/* Prev arrow */}
              <button
                onClick={() => navigate("prev")}
                className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="Previous"
              >
                <span className="block w-3 h-3 border-t-2 border-l-2 border-gray-900 rotate-[-45deg]" />
              </button>

              {/* Counter: 01 ─── 07 */}
              <div className="flex items-center gap-3 text-sm font-bold text-gray-900 select-none">
                <span>{pad(active + 1)}</span>
                <span className="block w-16 sm:w-24 h-px bg-gray-400" />
                <span className="text-gray-400">{pad(slides.length)}</span>
              </div>

              {/* Next arrow */}
              <button
                onClick={() => navigate("next")}
                className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="Next"
              >
                <span className="block w-3 h-3 border-t-2 border-r-2 border-gray-900 rotate-[45deg]" />
              </button>
            </div>
          </div>

          {/* ============================================= */}
          {/* RIGHT — Image carousel (≈57%)                 */}
          {/* ============================================= */}
          <div className="w-full lg:w-[57%] relative h-[300px] sm:h-[400px] lg:h-[620px]">
            {/* Show active + next peek */}
            {slides.map((slide, index) => {
              const isActive = index === active;
              const isNext = index === (active + 1) % slides.length;
              const isVisible = isActive || isNext;

              if (!isVisible) return null;

              return (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    opacity: isActive ? 1 : 0.4,
                    zIndex: isActive ? 2 : 1,
                    transform: isNext
                      ? "translateX(60%) scale(0.92)"
                      : "translateX(0) scale(1)",
                    transition:
                      "opacity 500ms ease, transform 500ms ease",
                  }}
                >
                  {/* Image */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.company}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 57vw"
                      priority={index === 0}
                    />

                    {/* Dark gradient overlay */}
                    <div
                      className="absolute inset-0 transition-all duration-500"
                      style={{
                        background: isActive
                          ? "rgba(23, 33, 37, 0.2)"
                          : "rgba(23, 33, 37, 0.75)",
                      }}
                    />

                    {/* Company logo / name overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <span
                        className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl tracking-wider select-none transition-opacity duration-500"
                        style={{ opacity: isActive ? 1 : 0.5 }}
                      >
                        {slide.company}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
