import Link from "next/link";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-20">
      <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-3 gap-12">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Highbee Surveying</h3>
          <p className="text-gray-300 leading-relaxed">
            Professional land surveying, drone mapping, and geospatial solutions
            delivered with precision and reliability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-white transition">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-white transition">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:text-white transition">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-white transition">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li> <MdLocationPin /> Lagos, Nigeria</li>
            <li><FaPhone /> +234 810 000 0000</li>
            <li><IoIosMail /> info@highbeesurveying.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-xl">
            <Link href="#" className="hover:text-yellow-400 transition"><FaFacebook /></Link>
            <Link href="#" className="hover:text-yellow-400 transition"><FaSquareInstagram /></Link>
            <Link href="#" className="hover:text-yellow-400 transition"> <AiFillTikTok /></Link>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Highbee Surveying. All rights reserved.
      </div>
    </footer>
  );
}
