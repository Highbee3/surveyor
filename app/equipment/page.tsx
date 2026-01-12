"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCamera,
  FaMap,
  FaSatellite,
  FaRulerCombined,
  FaDownload,
} from "react-icons/fa";

export default function Equipment() {
  const equipment = [
    {
      name: "DJI Phantom 4 RTK",
      role: "Aerial data capture (RTK precision)",
      specs: ["20 MP RGB", "RTK GNSS", "30 min flight"],
      icon: <FaSatellite size={28} />,
    },
    {
      name: "GNSS Base Station",
      role: "High-accuracy control points",
      specs: ["RTK corrections", "Multi-band GNSS"],
      icon: <FaRulerCombined size={28} />,
    },
    {
      name: "Trimble Total Station",
      role: "Ground surveying & staking",
      specs: ["0.5mm + 1ppm", "Robotic tracking"],
      icon: <FaMap size={28} />,
    },
    {
      name: "Mirrorless Camera",
      role: "High-res ground photography",
      specs: ["42 MP", "Full-frame", "RAW capture"],
      icon: <FaCamera size={28} />,
    },
    {
      name: "Workstation (MacBook / Desktop)",
      role: "Processing & deliverables",
      specs: ["16GB+ RAM", "GPU accel.", "QGIS / Pix4D"],
      icon: <FaLaptopCode size={28} />,
    },
  ];

  const planSteps = [
    {
      title: "1. Project Setup",
      desc: "Scope, coordinate systems, control plan, and risk assessment.",
    },
    {
      title: "2. Field Data Collection",
      desc: "RTK-enabled drone flights, GNSS control survey, and ground photos.",
    },
    {
      title: "3. Processing & QA",
      desc: "Point cloud generation, orthomosaic, DEM, QA checks and corrections.",
    },
    {
      title: "4. Deliverables & Handover",
      desc: "Maps, contours, 3D models, report, and raw data packaged for client.",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-black/90 via-[#050505] to-black text-gray-100 px-6 py-16 mt-10">
      {/* HERO */}
      <section className="max-w-6xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Survey Plan & Equipment
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-gray-400"
        >
          The hardware, software and step-by-step survey plan we use to deliver
          engineering-grade mapping: from control setup to final deliverables.
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/survey-plan.pdf"
            className="inline-flex items-center gap-2 bg-[#C62127] px-5 py-3 rounded-full font-semibold shadow-lg hover:brightness-105 transition"
          >
            <FaDownload /> Download Plan (PDF)
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 rounded-full text-sm text-gray-200 hover:bg-white/5 transition"
          >
            Request Custom Plan
          </a>
        </div>
      </section>

      {/* LAYOUT: left=equipment grid, right=plan timeline */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Equipment grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Field & Office Equipment</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {equipment.map((eq) => (
              <motion.div
                key={eq.name}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="p-5 bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                    {eq.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{eq.name}</h3>
                    <p className="text-sm text-gray-300">{eq.role}</p>

                    <ul className="mt-3 text-xs text-gray-400 space-y-1">
                      {eq.specs.map((s) => (
                        <li key={s} className="flex items-center gap-2">
                          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Survey plan / timeline */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Survey Plan (Step-by-step)</h2>

          <div className="space-y-6">
            {planSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-5 bg-white/6 backdrop-blur-lg border border-white/10 rounded-2xl shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white">
                      {i + 1}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-gray-300 mt-1">{step.desc}</p>

                    {/* Optional subpoints for the first step */}
                    {i === 0 && (
                      <ul className="mt-3 text-sm text-gray-400 space-y-1">
                        <li>Define control network & datum</li>
                        <li>Assign flight zones & safety buffers</li>
                        <li>Stakeout / permissions / client approvals</li>
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map preview / deliverable sample */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 p-4 bg-black/50 border border-white/6 rounded-2xl"
          >
            <h4 className="font-semibold mb-3">Sample Deliverables</h4>
            <div className="w-full h-44 rounded-md overflow-hidden bg-linear-to-br from-[#08101a] to-[#021018] flex items-center justify-center text-sm text-gray-400">
              Map preview • orthomosaic • DEM • contours • point cloud
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-4 bg-white/6 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl"
        >
          <div className="text-blue-400">
            <FaDownload />
          </div>
          <div className="text-left">
            <div className="font-semibold">Download full Survey Plan (PDF)</div>
            <div className="text-xs text-gray-300">Includes checklist, equipment list & flight plan</div>
          </div>
          <a
            href="/survey-plan.pdf"
            className="ml-6 inline-block bg-[#C62127] px-4 py-2 rounded-full font-medium hover:brightness-105 transition"
          >
            Download
          </a>
        </motion.div>
      </section>
    </main>
  );
}
