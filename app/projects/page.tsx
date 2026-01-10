"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const projects = [
    {
      title: "Route Surveying",
      description:
        "Precision alignment for roads, railways, pipelines, and infrastructure - charting the optimal path with accuracy and efficiency.",
      image:
        "https://res.cloudinary.com/dlzjjxtsd/image/upload/IMG-20251217-WA0016_rmkgc2.jpg",
      slug: "/services/geospatial",
    },
    {
      title: "Subdivision (Layout) Survey",
      description: "Expert division of land into parcels - creating clear, legally compliant layouts for residential, commercial, and development projects.",
      image:
        "https://res.cloudinary.com/dlzjjxtsd/image/upload/IMG-20210219-WA0002_pglnmy.jpg",
      slug: "/services/boundary",
    },
    {
      title: "Engineering Survey",
      description:
        "Detailed topographic and layout data - supporting engineers in design, construction staking, and as-built verification for successful projects.",
      image:
        "https://res.cloudinary.com/dlzjjxtsd/image/upload/IMG-20241008-WA0013_udgto8.jpg",
      slug: "/services/topographic-survey",
    },
    {
      title: "Geospatial Solutions",
      description:
        "Advanced GIS, drone mapping, and data integration - transforming spatial information into actionable insights for planning and decision-making.",
      image:
        "https://res.cloudinary.com/dlzjjxtsd/image/upload/IMG_0186_rulqk2.jpg",
      slug: "/services/geospatial",
    },
  ];

  return (
    <div className="text-white mt-15">
      {/* HERO SECTION */}
      <section
        className="h-[50vh] relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dlzjjxtsd/image/upload/zcm66k19aixqgkuduqhk.jpg')",
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
            A collection of professional surveying, mapping, and engineering
            projects we&apos;ve delivered.
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
                className="h-85 w-full object-cover"
                width={400}
                height={224}
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>

                <Link
                  href={project.slug}
                  className="inline-block mt-4 bg-[#C62127] px-5 py-2 rounded-full font-medium hover:bg-[#A51B1E] transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
