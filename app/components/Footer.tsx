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
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://res.cloudinary.com/dlzjjxtsd/image/upload/KOASS_n3-removebg-preview_gsbcy2.png"
              alt="KOASS Geomatics"
              width={150}
              height={150}
              className="rounded-full border-2"
              priority
            />

            <div className="hidden sm:block">
              <div className="text-lg sm:text-xl font-bold tracking-tight">
                KOASS
              </div>
              <div className="text-[11px] sm:text-xs text-green-100/80 font-medium">
                Geomatics Consults Limited
              </div>
            </div>
          </Link>
          {/* Company Description */}
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
              <Link href="/services/LandSurvey">Services</Link>
            </li>
            <li className="hover:text-white transition">
              <Link href="/projects">Projects</Link>
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
            <li className="flex items-center gap-2">
              {" "}
              <MdLocationPin className="text-yellow-400" /> Ogun, Nigeria
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-yellow-400" /> +234 813 874 5624
            </li>
            <li className="flex items-center gap-2">
              <IoIosMail className="text-yellow-400" />{" "}
              koassgeomaticsconsultsltd@gmail.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-2xl">
            <Link href="#" className="hover:text-yellow-400 transition">
              <FaFacebook />
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition">
              <FaSquareInstagram />
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition">
              <AiFillTikTok />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-white text-sm">
        © {new Date().getFullYear()} Koass Geomatics Consults Limited . All
        rights reserved.
      </div>
    </footer>
  );
}
