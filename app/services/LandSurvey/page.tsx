"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function LandSurvey() {
  return (
    <div className="w-full mt-21">
      {/* HERO */}
      <section className="relative h-[65vh] bg-gray-900">
        <Image
          src="https://res.cloudinary.com/dlzjjxtsd/image/upload/IMG-20241008-WA0013_udgto8.jpg"
          alt="Professional Land Surveying"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/30"></div>

        <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-24 text-white max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Professional Land Surveying Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-200"
          >
            Accurate boundary definition, cadastral mapping, and legal land
            surveys delivered with modern GNSS, Total Stations, and UAV
            technology.
          </motion.p>

          <Link
            href="/quote"
            className="mt-8 inline-block w-fit bg-[#C62127] px-8 py-4 rounded-lg font-semibold hover:bg-[#A51B1E] transition"
          >
            Get a Survey Quote
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 md:px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Is Land Surveying?
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-4xl">
          Land surveying is the scientific process of measuring, mapping, and
          defining land boundaries and physical features. It forms the legal and
          technical foundation for property ownership, construction, land
          development, and dispute resolution. Our surveys comply with statutory
          regulations and industry best practices.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-14 items-center">
          <div className="relative h-130">
            <Image
              src="https://res.cloudinary.com/dlzjjxtsd/image/upload/IMG-20210219-WA0002_pglnmy.jpg"
              alt="Survey team at work"
              fill
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              High Accuracy. Legal Compliance. Reliable Results.
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We deliver precise land measurements for property acquisition,
              estate development, boundary verification, and statutory
              documentation. Every project is handled by experienced surveyors
              using calibrated instruments and verified control points.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-24 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-14">
          Why Choose Our Surveying Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-gray-500">
          {[
            "Licensed & Experienced Surveyors",
            "Modern Surveying Technology",
            "Fast Turnaround Time",
            "Legally Defensible Survey Reports",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <p className="font-semibold text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TYPES */}
      <section className="py-20 px-6 md:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Types of Land Surveys We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Boundary Survey",
              desc: "Accurate demarcation of property limits for ownership verification.",
            },
            {
              title: "Cadastral Survey",
              desc: "Government-approved land surveys for title registration.",
            },
            {
              title: "Topographic Survey",
              desc: "Detailed mapping of terrain, elevations, and surface features.",
            },
            {
              title: "Subdivision Survey",
              desc: "Plot layout for estate development and land sales.",
            },
            {
              title: "Site Plan Survey",
              desc: "Planning drawings required for building approval.",
            },
            {
              title: "Construction Set-Out",
              desc: "Precise layout of buildings, roads, and infrastructure.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 md:px-24 bg-gray-100">
        <h2 className="text-3xl text-black md:text-4xl font-bold mb-12">
          Our Survey Process
        </h2>

        <ol className="grid md:grid-cols-4 gap-8 list-decimal list-inside text-gray-400">
          <li>Project consultation & data review</li>
          <li>Field data acquisition</li>
          <li>Data processing & analysis</li>
          <li>Delivery of survey plans & reports</li>
        </ol>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-24 bg-[#4A7E51] text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Ready to Start Your Land Survey?
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-100">
          Get accurate, legally compliant land survey data delivered by
          professionals you can trust.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-block bg-[#C62127] px-10 py-4 rounded-lg font-semibold hover:bg-[#A51B1E] transition"
        >
          Contact Our Survey Team
        </Link>
      </section>
    </div>
  );
}
