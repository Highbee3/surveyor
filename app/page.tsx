"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */} 
      <section
        className="
        h-[90vh] 
        bg-[url('https://res.cloudinary.com/dlzjjxtsd/image/upload/IMG-20250713-WA0079_djm1bv.jpg')]
        bg-cover bg-center 
        relative
      "
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-16 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Koass Geomatics <br />Consults Limited
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl max-w-xl"
          >
            We offer accurate land surveys, engineering measurements, drone
            mapping, and geospatial solutions for construction, planning and
            development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 flex space-x-4"
          >
          

            <Link
              href="/services/LandSurvey"
              className="border border-[#C62127] px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Surveying Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Land Surveying",
              desc: "Boundary, subdivision, property demarcation and development planning.",
            },
            {
              title: "Drone Mapping (Aerial Survey)",
              desc: "High resolution drone images, 3D mapping, photogrammetry & orthomosaics.",
            },
            {
              title: "Topographic Survey",
              desc: "Detailed terrain data for engineering design and architectural planning.",
            },
            {
              title: "Geodetic Survey",
              desc: "Precise coordinate measurement using GNSS, control points and leveling.",
            },
            {
              title: "Engineering Survey",
              desc: "Setting out buildings, roads, bridges, drainage and construction layouts.",
            },
            {
              title: "GIS & Mapping",
              desc: "Spatial analysis, mapping solutions, data collection and digitization.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 shadow-lg rounded-xl hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              We are a certified surveying and geospatial company specializing
              in land measurement, mapping, and engineering support services.
              With modern GNSS equipment, drones, and experienced engineers, we
              deliver highly accurate results for both private and government
              projects.
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Our commitment is precision, safety, and professional excellence
              across every project.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-block bg-[#C62127] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg relative w-full h-[350px]">
            <Image
              src="https://res.cloudinary.com/dlzjjxtsd/image/upload/IMG_5980_z7jhpc.jpg"
              alt="Surveyor"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
<section className="py-20 px-6 md:px-16 bg-gray-50">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Recent Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {[
      {
        title: "Road Construction Set-Out",
        image: "https://res.cloudinary.com/dlzjjxtsd/image/upload/IMG-20250713-WA0088_dgdhhy.jpg",
      },
      {
        title: "Drone Mapping for Estate Development",
        image: "https://res.cloudinary.com/dlzjjxtsd/image/upload/IMG_5980_z7jhpc.jpg",
      },
      {
        title: "Topographic Survey for Site Planning",
        image: "https://res.cloudinary.com/dlzjjxtsd/image/upload/IMG-20260107-WA0022_fkgdie.jpg",
      },
    ].map((project, i) => (
      <div
        key={i}
        className="bg-white shadow-lg rounded-xl overflow-hidden"
      >
        <div className="relative h-80">
          <Image
            src={project.image}
            alt={project.title}
           fill
            className=" bg-gray-200"
          />
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="text-gray-600 text-sm mt-2">
            High-precision fieldwork done with modern surveying technologies.
          </p>
        </div>
      </div>
    ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="bg-[#C62127] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A51B1E] transition"
          >
            View Full Projects
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-16 bg-[#4A7E51] text-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Precision</h3>
            <p className="text-gray-300">
              We use GNSS, drones, and total stations for maximum accuracy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-300">
              Over 10 years of delivering professional surveying solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-300">
              Efficient workflow ensures quick project turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 md:px-16 bg-[#C62127] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Start Your Project?
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Contact us today for accurate and reliable surveying solutions tailored
          to your needs.
        </p>

        <Link
          href="/quote"
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Get a Free Quote
        </Link>
      </section>
    </div>
  );
}
