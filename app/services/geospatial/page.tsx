import Image from "next/image";
import Link from "next/link";
import {
  MapIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  CubeIcon,
  ChartBarIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";

const CLOUD = "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload";

export default function Geospatial() {
  const services = [
    {
      title: "Land & Engineering Surveys",
      desc: "High-accuracy topographic, control, and boundary surveys to support design, construction, and land development projects.",
      icon: MapIcon,
      img: `${CLOUD}/geospatial/total-station.jpg`,
    },
    {
      title: "GNSS & Control Networks",
      desc: "Establishment of precise geodetic and local control networks using advanced GNSS technologies.",
      icon: GlobeAltIcon,
      img: `${CLOUD}/geospatial/gnss-survey.jpg`,
    },
    {
      title: "Drone Mapping & Photogrammetry",
      desc: "High-resolution aerial mapping, orthophotos, and 3D models for surveying, inspection, and planning.",
      icon: CameraIcon,
      img: `${CLOUD}/geospatial/drone-photogrammetry.jpg`,
    },
    {
      title: "GIS & Spatial Analysis",
      desc: "Spatial data management, mapping, and analysis to support decision-making and asset management.",
      icon: ChartBarIcon,
      img: `${CLOUD}/geospatial/gis-analysis.jpg`,
    },
    {
      title: "3D Mapping & Modeling",
      desc: "Digital terrain models, surface modeling, and visualization for engineering and environmental projects.",
      icon: CubeIcon,
      img: `${CLOUD}/geospatial/3d-terrain.jpg`,
    },
    {
      title: "Survey Planning & Reporting",
      desc: "Professional survey documentation, technical reports, and as-built drawings.",
      icon: PaperAirplaneIcon,
      img: `${CLOUD}/geospatial/survey-reporting.jpg`,
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* HERO */}
      <section className="relative h-[90vh] min-h-[600px] px-6 md:px-24 flex items-center text-white overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dlzjjxtsd/image/upload/IMG_0186_rulqk2.jpg"
          alt="Professional drone aerial mapping for geospatial services"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/60" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Geospatial & Surveying Services
          </h1>
          <p className="text-xl md:text-3xl mb-10 max-w-3xl">
            Precise positioning, mapping, and spatial intelligence solutions for infrastructure, engineering, and environmental projects.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C62127] px-12 py-5 rounded-full text-xl font-semibold hover:bg-[#a8181e] transition"
          >
            Request a Survey
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 md:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-64">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-10">
                  <Icon className="w-14 h-14 text-[#4A7E51] mb-6" />
                  <h3 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
   


      {/* INDUSTRIES */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
            Industries We Serve
          </h2>
          <div className="grid grid-cols md:grid-cols-4 gap-8">
            {[
              "Civil & Structural Engineering",
              "Construction & Infrastructure",
              "Real Estate Development",
              "Hydrographic & Marine Projects",
              "Utilities & Asset Mapping",
              "Environmental Studies",
              "Transportation & Roads",
              "Government & Public Works",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-2xl text-center font-medium text-gray-800 hover:bg-[#4A7E51] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 md:px-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
            Our Proven Survey Workflow
          </h2>
          <ol className="space-y-10">
            {[
              "Project consultation and scope definition",
              "Site reconnaissance and survey planning",
              "Field data acquisition using modern instruments",
              "Data processing, analysis, and rigorous quality assurance",
              "Delivery of professional maps, 3D models, and technical reports",
            ].map((step, i) => (
              <li key={i} className="flex items-start">
                <span className="shrink-0 w-12 h-12 bg-[#4A7E51] text-white rounded-full flex items-center justify-center text-xl font-bold mr-8">
                  {i + 1}
                </span>
                <p className="text-xl text-gray-700 pt-1 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-24 bg-linear-to-br from-[#4A7E51] to-[#326B38] text-white text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8">
          Ready for Precision Spatial Data?
        </h2>
        <p className="max-w-4xl mx-auto text-2xl mb-12 leading-relaxed">
          Partner with our expert geospatial team for accurate surveys, advanced mapping, and actionable insights that drive project success.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#C62127] hover:bg-[#a8181e] px-14 py-6 rounded-full text-2xl font-bold shadow-2xl transition transform hover:scale-105"
        >
          Contact Our Experts Today
        </Link>
      </section>
    </div>
  );
}