"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function LandSurvey() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="relative h-[60vh] bg-gray-900">
        <Image
          src="https://res.cloudinary.com/dlzjjxtsd/image/upload/land-surveying-for-dummies_lo82xi.jpg"
          alt="Land Surveying"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-20 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Land Surveying Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 text-lg md:text-xl max-w-xl"
          >
            Accurate boundary mapping, property demarcation, and legal surveys
            using modern GNSS and Total Station technology.
          </motion.p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6">What Is Land Surveying?</h2>

        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Land surveying is the process of determining the precise boundaries,
          coordinates, and features of a piece of land. Land surveys are
          essential for property ownership, development, construction, and legal
          documentation. Our team uses modern surveying equipment and
          professional expertise to deliver accurate and reliable measurements.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div>
            <Image
              src="https://res.cloudinary.com/dlzjjxtsd/image/upload/1st_Horizon_D1-9444-1024x683_s0ftz4.jpg"
              alt="Survey Team"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">
              Professional & Accurate Measurements
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We provide high-accuracy land surveys using GNSS receivers, Total
              Stations, and digital leveling equipment. Whether it&apos;s for land
              purchase, development planning, boundary disputes, or legal
              documentation, we ensure your data is precise and dependable.
            </p>

            <Link
              href="/quote"
              className="mt-6 inline-block bg-[#C62127] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A51B1E] transition"
            >
              Request a Land Survey
            </Link>
          </div>
        </div>
      </section>

      {/* TYPES OF LAND SURVEYS */}
      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Types of Land Surveys We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Boundary Survey",
              desc: "Precise determination of property boundaries for ownership and documentation.",
            },
            {
              title: "Cadastral Survey",
              desc: "Government-recognized land demarcation for legal registration.",
            },
            {
              title: "Site Plan Survey",
              desc: "Required drawings and measurements for building approval.",
            },
            {
              title: "Subdivision Survey",
              desc: "Dividing land into plots for estate development or resale.",
            },
            {
              title: "Topographic Survey",
              desc: "Detailed mapping of terrain, features, and elevation.",
            },
            {
              title: "Construction Layout",
              desc: "Setting out buildings, drainage, roads, and engineering features.",
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

      {/* EQUIPMENT SECTION */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6">Modern Equipment We Use</h2>

        <p className="text-gray-700 leading-relaxed max-w-3xl mb-10">
          To guarantee high-precision results, we use certified equipment trusted
          by surveyors worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">GNSS Receivers</h3>
            <p className="text-gray-600">
              High-accuracy GPS units for control points and fast positioning.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Total Stations</h3>
            <p className="text-gray-600">
              Precision angle and distance measurement for all survey types.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Drones (UAV)</h3>
            <p className="text-gray-600">
              Aerial mapping tools for orthomosaic images and topographic models.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 md:px-20 bg-[#4A7E51] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Need a Land Survey for Your Property?
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Contact us today to get accurate and reliable land survey data for your
          project, property purchase, or development approval.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block bg-[#C62127] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#A51B1E] transition"
        >
          Contact Us Now
        </Link>
      </section>
    </div>
  );
}
