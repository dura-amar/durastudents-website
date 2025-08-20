"use client"; // <-- This makes the file a Client Component

import { useState, useEffect } from "react";

const images = [
  "/images/hero/hero_1.jpg",
  "/images/hero/hero_2.jpg",
  "/images/hero/hero_3.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Hero ${i}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 px-6 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Preserving Dura Language & Culture
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Together we can revitalize our heritage through education, technology,
          and community.
        </p>
        <div className="mt-6">
          <a
            href="#programs"
            className="bg-white text-green-700 px-6 py-3 rounded-full font-medium shadow hover:bg-gray-100 transition"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}
