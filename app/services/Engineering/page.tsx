"use client";
import Link from "next/link";
import Image from "next/image";
import { 
  BuildingOfficeIcon, 
  WrenchScrewdriverIcon, 
  ClipboardDocumentCheckIcon, 
  MapIcon, 
  CalculatorIcon, 
  DocumentTextIcon 
} from "@heroicons/react/24/outline"; 

export default function Engineering() {
  const services = [
    {
      title: "Civil Engineering Design",
      desc: "Design of roads, drainage systems, culverts, and basic infrastructure.",
      icon: BuildingOfficeIcon,
    },
    {
      title: "Structural Engineering",
      desc: "Structural analysis and design for residential and commercial buildings.",
      icon: WrenchScrewdriverIcon,
    },
    {
      title: "Construction Supervision",
      desc: "On-site engineering supervision to ensure quality and compliance.",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: "Infrastructure Planning",
      desc: "Technical planning for estates, industrial layouts, and public works.",
      icon: MapIcon,
    },
    {
      title: "Quantity & Cost Estimation",
      desc: "Accurate bills of quantities and project cost estimates.",
      icon: CalculatorIcon,
    },
    {
      title: "Technical Reports & Drawings",
      desc: "Preparation of engineering drawings, calculations, and reports.",
      icon: DocumentTextIcon,
    },
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* HERO HEADER WITH BACKGROUND IMAGE */}
      <section className="relative py-32 px-6 md:px-24 bg-cover bg-center bg-no-repeat text-center text-white"
        style={{ backgroundImage: "url('https://damassets.autodesk.net/content/dam/autodesk/draftr/23696/civil-engineering-and-civil-site-design-1172x660.jpg')" }}>
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Engineering & Infrastructure Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Professional engineering solutions for infrastructure development, construction projects, and technical planning.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">
            Engineering Solutions You Can Trust
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Our engineering services provide practical, efficient, and compliant solutions for civil infrastructure and construction projects. We work closely with developers, contractors, and government agencies to deliver designs and technical support that meet industry standards and project requirements.
          </p>
        </div>
      </section>

      {/* SERVICES WITH IMAGES & ICONS */}
      <section className="py-20 px-6 md:px-24 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
          Our Engineering Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, i) => {
            const ServiceIcon = service.icon;
            const imageUrls = [
              "https://damassets.autodesk.net/content/dam/autodesk/draftr/23696/civil-engineering-and-civil-site-design-1172x660.jpg", // Civil
              "https://s3da-design.com/wp-content/uploads/2020/01/Beams.jpg", // Structural
              "https://thumbs.dreamstime.com/b/supervisor-wearing-hardhat-high-visibility-vest-overseeing-construction-operations-building-site-engineering-architecture-381784559.jpg", // Supervision
              "https://thumbs.dreamstime.com/b/architectural-site-plan-showing-mixed-use-development-multiple-multi-story-buildings-structures-arranged-around-green-390525708.jpg", // Planning
              "https://www.sketchup3dconstruction.com/const/images/quantity-surveying.jpg", // Quantity
              "https://damassets.autodesk.net/content/dam/autodesk/www/apac/jp/solutions/blueprint-maker/what-is-a-blueprint-image-858x522.jpg", // Drawings
            ];
            return (
              <div
                key={i}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={imageUrls[i]}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <ServiceIcon className="w-12 h-12 text-[#4A7E51] mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 px-6 md:px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
          Industries We Serve
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Real Estate Development",
            "Road & Transportation",
            "Water & Drainage Projects",
            "Industrial Facilities",
            "Public Infrastructure",
            "Commercial Buildings",
            "Residential Estates",
            "Utility Installations",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md text-center font-semibold text-gray-800 hover:shadow-lg transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 md:px-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-black">
            Our Engineering Process
          </h2>
          <ol className="space-y-6">
            {[
              "Project consultation and requirement analysis",
              "Site inspection and technical data review",
              "Engineering design and calculations",
              "Client review and regulatory compliance",
              "Implementation support and supervision",
            ].map((step, i) => (
              <li key={i} className="flex items-start">
                <span className="shrink-0 w-10 h-10 bg-[#4A7E51] text-white rounded-full flex items-center justify-center font-bold mr-6">
                  {i + 1}
                </span>
                <p className="text-lg text-gray-700 pt-2">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 md:px-24 bg-linear-to-r from-[#4A7E51] to-[#3A6B40] text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Build with Confidence?
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-100">
          Contact our experienced engineering team today for reliable designs, precise calculations, and expert project execution.
        </p>
        <Link
          href="/contact"
          className="mt-12 inline-block bg-[#C62127] text-white px-12 py-5 rounded-xl text-lg font-bold hover:bg-[#A51B1E] hover:scale-105 transition transform shadow-xl"
        >
          Talk to an Engineer
        </Link>
      </section>
    </div>
  );
}