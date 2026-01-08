"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPinIcon,
  ChartBarIcon,
  GlobeAltIcon,
  LifebuoyIcon,
  MapIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";

export default function HydrographicSurveying() {
  // ✅ Services with direct image URLs
  const services = [
    {
      title: "Bathymetric Surveys",
      desc: "Rivers, lakes, reservoirs, and canals",
      icon: ChartBarIcon,
      image:
        "https://static.wixstatic.com/media/5e48e6_43cff92d6d7944bb8a673f7c67389f98~mv2.jpg",
    },
    {
      title: "Dredging & Reclamation",
      desc: "Hydrographic surveys for dredging projects",
      icon: CubeIcon,
      image:
        "https://assets.martide.com/literature/d71a0160-bdf9-448f-974a-9c0505f2e030/trailing-suction-hopper-w870x580.jpg",
    },
    {
      title: "Marine Navigation Channels",
      desc: "Safe channel and harbor surveys",
      icon: MapPinIcon,
      image:
        "https://ceehydrosystems.com/wp-content/uploads/2015/12/CEEDUCER_PRO_Africa_Crop.jpg",
    },
    {
      title: "Coastal & Nearshore",
      desc: "Detailed coastal zone mapping",
      icon: MapIcon,
      image:
        "https://veripos.com/-/media/Images/Hexagon/Hexagon-Core/Veripos/Veripos-images/Products/SPAN/Hexagon_AP_MultibeamBathymetry-800x428.ashx",
    },
    {
      title: "Offshore Support",
      desc: "Surveys for marine structures and platforms",
      icon: GlobeAltIcon,
      image:
        "https://hazelettmarine.com/wp-content/uploads/2025/02/oil-gas-platform-gulf-sea-world-energy-offshore-oil-rig-construction_60401-96.webp",
    },
    {
      title: "Data Processing & Reporting",
      desc: "Advanced modeling and deliverables",
      icon: LifebuoyIcon,
      image:
        "https://www.whiteclouds.com/wp-content/uploads/2023/04/Bathymetric-Map-Marie-Tharp.jpg",
    },
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* HERO HEADER */}
      <section
        className="relative py-32 px-6 md:px-24 bg-cover bg-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/d/db/Fis01334_%2827555144884%29.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hydrographic Surveying Services
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Accurate bathymetric surveys and marine data collection for navigation,
            dredging, coastal engineering, and offshore projects.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Precision Mapping of Underwater Environments
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Hydrographic surveying measures and maps water bodies to determine depths,
            seabed features, and underwater obstacles—essential for safe navigation,
            marine construction, dredging, and environmental protection.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 md:px-24 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Hydrographic Survey Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={service.image ?? "/images/fallback.jpg"}
                    alt={service.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <Icon className="w-12 h-12 text-[#4A7E51] mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* KEY APPLICATIONS */}
      <section className="py-20 px-6 md:px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
          Key Applications
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Port & Harbor Development",
            "Dredging Volume Calculations",
            "Bridge & Jetty Construction",
            "Coastal Erosion Studies",
            "Flood Risk Assessment",
            "Environmental Impact Studies",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-md text-center font-semibold text-gray-800 hover:shadow-xl transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-20 px-6 md:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
            Our Survey Methodology
          </h2>
          <ol className="space-y-8">
            {[
              "Project planning and site assessment",
              "Deployment of echo sounders and GNSS systems",
              "Water depth measurement and seabed data acquisition",
              "Data correction, processing, and quality control",
              "Production of bathymetric maps and reports",
            ].map((step, i) => (
              <li key={i} className="flex items-start">
                <span className="shrink-0 w-12 h-12 bg-[#4A7E51] text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {i + 1}
                </span>
                <p className="text-lg text-gray-700 pt-2">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Typical Survey Deliverables
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
              <ul className="space-y-4 text-left text-gray-700">
                <li className="flex items-center">
                  <span className="mr-3">•</span> Bathymetric charts & depth contours
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span> Digital terrain models (DTM)
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span> Dredging volume calculations
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
              <ul className="space-y-4 text-left text-gray-700">
                <li className="flex items-center">
                  <span className="mr-3">•</span> Comprehensive survey reports
                </li>
                <li className="flex items-center">
                  <span className="mr-3">•</span> CAD & GIS-compatible datasets
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 md:px-24 bg-linear-to-r from-[#4A7E51] to-[#2E5A3A] text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Need Accurate Underwater Mapping?
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-100">
          Trust our certified hydrographic surveyors for precise, reliable data
          that ensures safety and success in your marine projects.
        </p>
        <Link
          href="/contact"
          className="mt-12 inline-block bg-[#C62127] px-12 py-5 rounded-xl text-lg font-bold hover:bg-[#A51B1E] hover:scale-105 transition transform shadow-2xl"
        >
          Request a Hydrographic Survey
        </Link>
      </section>
    </div>
  );
}
