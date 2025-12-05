"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaDrawPolygon, FaMapMarkedAlt, FaMapPin } from "react-icons/fa";

export default function Boundary() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="text-white">

      {/* HERO SECTION */}
      <section
        className="h-[70vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dlzjjxtsd/image/upload/survey-mapping-1_v50rb5.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1
            data-aos="fade-up"
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Boundary Survey
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Accurate identification, measurement, and marking of property boundaries for ownership clarity and land development.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-950">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center mb-12"
        >
          What We Offer
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
            <FaMapMarkedAlt className="text-5xl mb-4 text-blue-400" />
            <h3 className="text-2xl font-semibold mb-2">Property Mapping</h3>
            <p className="text-gray-300">
              Precise mapping of land boundaries, corners, and legal property lines.
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
            <FaDrawPolygon className="text-5xl mb-4 text-green-400" />
            <h3 className="text-2xl font-semibold mb-2">Boundary Marking</h3>
            <p className="text-gray-300">
              Physical marking of boundaries using pegs and permanent monuments.
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
            <FaMapPin className="text-5xl mb-4 text-purple-400" />
            <h3 className="text-2xl font-semibold mb-2">Dispute Resolution</h3>
            <p className="text-gray-300">
              Trusted boundary verification for resolving land conflicts and ownership discrepancies.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section
        data-aos="fade-up"
        className="py-20 bg-[#4A7E51] text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Need a Boundary Survey?</h2>
        <p className="text-lg mb-6">
          Get accurate, legal, and reliable property boundary measurements today.
        </p>

        <a
          href="/contact"
          className="bg-white text-[#C62127] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
 