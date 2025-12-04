"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";   // ✅ FIXED — required for <Image />

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const projects = [
    {
      title: "Drone Mapping for Construction",
      description: "High-precision aerial survey and mapping for a major construction site.",
      image:
        "https://images.unsplash.com/photo-1508614999368-9260051291ea?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Boundary Survey – Residential Estate",
      description: "Full boundary demarcation and property verification.",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=60",
    },
    {
      title: "Topographic Survey – Land Development",
      description: "Contour mapping and terrain modeling for land use planning.",
      image:
        "https://images.unsplash.com/photo-1529070538774-7da3cb3265df?auto=format&fit=crop&w=900&q=70",
    },
    {
      title: "GIS Mapping Project",
      description: "Geospatial analysis and map visualization for urban planning.",
      image:
        "https://images.unsplash.com/photo-1514474959185-14543834d41d?auto=format&fit=crop&w=900&q=60",
    },
  ];

  return (
    <div className="text-white">
      {/* HERO SECTION */}
      <section
        className="h-[50vh] relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 data-aos="fade-up" className="text-5xl md:text-7xl font-bold">
            Our Projects
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-300 max-w-2xl mt-4"
          >
            A collection of professional surveying, mapping, and engineering projects we&apos;ve delivered.
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-20 bg-gray-950">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-center mb-12">
          Featured Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="
                bg-white/10 
                backdrop-blur-xl 
                border border-white/20 
                rounded-2xl overflow-hidden 
                shadow-xl 
                hover:scale-105 transition-transform
              "
            >
              <Image
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
                width={400}
                height={224}
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>

                <button className="mt-4 bg-blue-600 px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
