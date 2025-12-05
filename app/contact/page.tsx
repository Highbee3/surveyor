"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-black to-gray-900 text-white px-6 py-20">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center mb-10"
      >
        Contact Us
      </motion.h1>

      {/* Wrapper */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT CONTACT INFO CARD */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-blue-400 text-xl mt-1" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-300">+234 808 000 0000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-red-400 text-xl mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-300">example@email.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-400 text-xl mt-1" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-300">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM CARD */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <div className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-300">Name</label>
              <input
                type="text"
                className="w-full p-3 bg-black/30 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-black/30 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Message</label>
              <textarea
                rows={4}
                className="w-full p-3 bg-black/30 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>

      </div>
    </div>
  );
}
