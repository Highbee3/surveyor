"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaMap, FaRulerCombined, FaDrawPolygon } from "react-icons/fa";

export default function Topographic() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="text-white">
      {/* HERO SECTION */}
      <section className="h-[70vh] relative bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&w=1600&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1
            data-aos="fade-up"
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Topographic Survey
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Precision ground-level mapping for architecture, engineering, construction, and land development.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-950">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-12">
          What We Provide
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          
          {/* Card 1 */}
          <div
            data-aos="zoom-in"
            className="
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              p-8 rounded-2xl shadow-xl 
              hover:scale-105 transition-transform
            "
          >
            <FaMap className="text-5xl mb-4 text-blue-400" />
            <h3 className="text-2xl font-semibold mb-2">Site Mapping</h3>
            <p className="text-gray-300">
              High-detail maps of terrain, slopes, structures, and natural features.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              p-8 rounded-2xl shadow-xl 
              hover:scale-105 transition-transform
            "
          >
            <FaRulerCombined className="text-5xl mb-4 text-green-400" />
            <h3 className="text-2xl font-semibold mb-2">Level Measurement</h3>
            <p className="text-gray-300">
              Accurate elevation, contour, and benchmark measurements for civil engineering.
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              p-8 rounded-2xl shadow-xl 
              hover:scale-105 transition-transform
            "
          >
            <FaDrawPolygon className="text-5xl mb-4 text-purple-400" />
            <h3 className="text-2xl font-semibold mb-2">Boundary & Terrain Analysis</h3>
            <p className="text-gray-300">
              Full terrain modeling including slopes, breaklines, and structural outlines.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section
        data-aos="fade-up"
        className="py-20 bg-blue-600 text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Need a Topographic Survey?</h2>
        <p className="text-lg mb-6">Our team delivers precise, engineering-grade mapping.</p>

        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
