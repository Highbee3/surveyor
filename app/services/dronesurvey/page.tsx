 "use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  FaSatelliteDish, 
  FaMapMarkedAlt, 
  FaCloudUploadAlt 
} from "react-icons/fa";


export default function DroneSurvey() {
  return (
    <div className="text-white">
      {/* HERO SECTION */}
      <section className="h-[70vh] bg-[url('/drone-bg.jpg')] bg-cover bg-center relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60">
         <Image
          src="https://res.cloudinary.com/dlzjjxtsd/image/upload/drone-surveying-land-surveyor-gnss-drone_prundy.png"
          alt="Drone Surveying"
          fill
          className="object-cover opacity-60"
        />

        </div>
       
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Drone Survey Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            High-precision aerial mapping, inspections, and data capture powered by advanced drone technology.
          </motion.p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700"
          >
            <FaSatelliteDish className="text-5xl mb-4 text-blue-400" />
            <h3 className="text-2xl font-semibold mb-2">Aerial Photography</h3>
            <p className="text-gray-400">
              Crystal-clear aerial shots for real estate, construction, events, and marketing.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700"
          >
            <FaMapMarkedAlt className="text-5xl mb-4 text-green-400" />
            <h3 className="text-2xl font-semibold mb-2">Mapping & Surveying</h3>
            <p className="text-gray-400">
              High-accuracy 2D/3D mapping for land survey, agriculture, and development planning.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700"
          >
            <FaCloudUploadAlt className="text-5xl mb-4 text-purple-400" />
            <h3 className="text-2xl font-semibold mb-2">Data Analysis</h3>
            <p className="text-gray-400">
              Receive detailed aerial data insights processed using professional GIS tools.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#4A7E51] text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start a Project?</h2>
        <p className="text-lg mb-6">Contact us for professional and reliable drone surveying services.</p>
        <a
          href="/contact"
          className="bg-white text-[#C62127] px-8 py-3 rounded-full font-semibold hover:bg-gray-200"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
