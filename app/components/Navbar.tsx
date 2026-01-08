"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-[#4A7E51] text-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-20 px-4 md:px-8">
        {/* Logo */}
          <Link href="/">
        <div className="h-16 w-80 flex ">
          <Image
            src="https://res.cloudinary.com/dlzjjxtsd/image/upload/Screenshot_26_uz8qyw.png"
            alt="SurveyPro Logo"
            width={400}
            height={400}
            className="h-full w-auto"
          />

          {/* <span className=" w-full text-center">
                <h4>KOASS</h4>
                <p className=" text-sm w-full">Geomatics Consults Limited</p>
          </span> */}
        </div>
            </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium items-center">
          <li className="group relative">
            <Link href="/" className="relative">
              Home
              <span className="underline-hover"></span>
            </Link>
          </li>

          <li className="group relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center relative"
            >
              Services
              <FiChevronDown className="ml-1" />
              <span className="underline-hover"></span>
            </button>

            {dropdownOpen && (
              <ul className="absolute top-10 left-0 bg-white text-black shadow-md p-3 rounded-md w-56 space-y-2 animate-dropdown">
                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link href="/services/LandSurvey">Land Survey</Link>
                </li>
                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link href="/services/dronesurvey">Drone Survey</Link>
                </li>
                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link href="/services/topographic-survey">Topographic Survey</Link>
                </li>
                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link href="/services/boundary">Boundary Mapping</Link>
                </li>
                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link href="/services/hydrographics">Hydrographic Surveying</Link>
                </li>
                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link href="/services/Engineering">Engineering Surveying</Link>
                </li>
                <li className="p-2 hover:bg-gray-200 rounded">
                  <Link href="/services/geospatial">Geospatial Solutions</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="group relative">
            <Link href="/projects" className="relative">
              Projects
              <span className="underline-hover"></span>
            </Link>
          </li>

          <li className="group relative">
            <Link href="/equipment" className="relative">
              Equipment
              <span className="underline-hover"></span>
            </Link>
          </li>

          <li className="group relative">
            <Link href="/contact" className="relative">
              Contact
              <span className="underline-hover"></span>
            </Link>
          </li>
        </ul>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-[#4A7E51] p-4 space-y-4 animate-mobileMenu">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center w-full justify-between"
            >
              Services <FiChevronDown className="ml-2" />
            </button>

            {dropdownOpen && (
              <ul className="ml-4 mt-2 space-y-2 bg-green-700 p-3 rounded animate-dropdown">
                <li>
                  <Link href="/services/LandSurvey">Land Survey</Link>
                </li>
                <li>
                  <Link href="/services/dronesurvey">Drone Survey</Link>
                </li>
                <li>
                  <Link href="/services/topographic-survey">Topographic Survey</Link>
                </li>
                <li>
                  <Link href="/services/boundary">Boundary Mapping</Link>
                </li>
                <li>
                  <Link href="/services/hydrographics">Hydrographic Surveying</Link>
                </li>
                <li>
                  <Link href="/services/engineering">Engineering Surveying</Link>
                </li>
                <li>
                  <Link href="/services/geospatial">Geospatial Solutions</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/equipment">Equipment</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}

      {/* Hover underline animation */}
      <style>{`
        .underline-hover {
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 100%;
          height: 2px;
          background: yellow;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .group:hover .underline-hover {
          transform: scaleX(1);
        }

        @keyframes dropdown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-dropdown { animation: dropdown 0.3s ease-out forwards; }

        @keyframes mobileMenu {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-mobileMenu { animation: mobileMenu 0.35s ease-out forwards; }
      `}</style>
    </nav>
  );
}
