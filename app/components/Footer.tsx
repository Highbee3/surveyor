import Link from "next/link";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-[#4A7E51] text-white py-12 mt-20">
      <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-3 gap-12">

        {/* Logo & Company Info */}
        <div className="flex flex-col md:flex-col items-start space-y-4">
          {/* Logo */}
          <div className="h-16 w-auto">
            <Image
              src="https://res.cloudinary.com/dlzjjxtsd/image/upload/Screenshot_26_uz8qyw.png"
              alt="Highbee Logo"
              width={150}
              height={150}
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Company Description */}
          <p className="text-gray-300 leading-relaxed">
            Professional land surveying, drone mapping, and geospatial solutions delivered with precision and reliability.
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
            <li className="flex items-center gap-2"> <MdLocationPin className="text-yellow-400"/> Lagos, Nigeria</li>
            <li className="flex items-center gap-2"><FaPhone className="text-yellow-400"/> +234 810 000 0000</li>
            <li className="flex items-center gap-2"><IoIosMail className="text-yellow-400"/> info@highbeesurveying.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-2xl">
            <Link href="#" className="hover:text-yellow-400 transition"><FaFacebook /></Link>
            <Link href="#" className="hover:text-yellow-400 transition"><FaSquareInstagram /></Link>
            <Link href="#" className="hover:text-yellow-400 transition"><AiFillTikTok /></Link>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Highbee Surveying. All rights reserved.
      </div>
    </footer>
  );
}
