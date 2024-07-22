"use client";
import TypingAnimation from "@/components/magicui/typing-animation";
import Marquee from "@/components/magicui/marquee";
import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Modal from "@/components/ui/modal";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";
import { WobbleCard } from "@/components/ui/wobble-card";

const navigationLinks = [
  "Home",
  "About Us",
  {
    name: "Products",
    submenu: [
      "Butterfly Valve",
      "Ball Valve",
      "Gate Valve",
      "Globe Valve",
      "Check Valve",
      "Plug Valve",
    ],
  },
  "Quality",
  "Clientele",
  "Infrastructure",
  "Career",
  "Contact",
];

const productCategories = [
  { name: "Butterfly Valve" },
  { name: "Ball Valve" },
  { name: "Gate Valve" },
  { name: "Globe Valve" },
  { name: "Check Valve" },
  { name: "Plug Valve" },
];

export default function SMPValvesUI() {
  const [activeLink, setActiveLink] = useState("Home");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gray-100 py-3 px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/pawarlogo.png"
            alt="Tangent Valves Logo"
            className="h-10 mr-2"
          />
          <h1 className="text-black text-3xl font-bold">Tangent</h1>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-orange-500" />
            <span className="text-sm">+91</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-orange-500" />
            <span className="text-sm">scspl.smp@gmail com</span>
          </div>
        </div>
      </header>

      <nav className="bg-[#FB8C00] py-4 px-6 md:px-12 lg:px-24">
        <ul className="flex items-center justify-center space-x-12 text-white">
          <li>
            <Link
              href="/"
              className="flex items-center hover:text-blue-200 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex items-center hover:text-blue-200 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-blue-200 transition-colors">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                    href="/butterfly"
                    className="flex items-center hover:text-blue-200 transition-colors"
                  >
                    Butterfly Valve
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/ball"
                    className="flex items-center hover:text-blue-200 transition-colors"
                  >
                    Ball Valve
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/Gate"
                    className="flex items-center hover:text-blue-200 transition-colors"
                  >
                    Gate Valve
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/Globe"
                    className="flex items-center hover:text-blue-200 transition-colors"
                  >
                    Globe Valve
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/Check"
                    className="flex items-center hover:text-blue-200 transition-colors"
                  >
                    Check Valve
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/Plug"
                    className="flex items-center hover:text-blue-200 transition-colors"
                  >
                    Plug Valve
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <Link
              href="/quality"
              className="flex items-center hover:text-blue-200 transition-colors"
            >
              Quality
            </Link>
          </li>
          <li>
            <Link
              href="/client"
              className="flex items-center hover:text-blue-200 transition-colors"
            >
              Clientele
            </Link>
          </li>
          {/* <li>
            <Link
              href="/infrastructure"
              className="flex items-center hover:text-blue-200 transition-colors"
            >
              Infrastructure
            </Link>
          </li>
          <li>
            <Link
              href="/career"
              className="flex items-center hover:text-blue-200 transition-colors"
            >
              Career
            </Link>
          </li> */}
          <li>
            <Link
              href="/contact"
              className="flex items-center hover:text-blue-200 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-orange-800">
          Model KMS: Two Piece, Metal Seated (150#, 300#)
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="\Ball Valve\kms-reg.png"
            alt="Valve 2"
            className="w-1/4 mx-3" // Adjust the width as needed
          />
          <img
            src="\Ball Valve\kms-dia.png"
            alt="Valve 1"
            className="w-1/4 mx-3" // Adjust the width as needed
          />
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          Technical Data :
        </h3>

        <ul className="list-disc pl-5 mb-6">
          <li>Size Range: DN 15 (1/2”) – DN 200 (8”)</li>
          <li>Pressure: ASME Class 150 & 300</li>
          <li>Temperature Range: Up to 400 deg. C</li>
          <li>Seat: SS 304 / SS316</li>
          <li>End Connections: Flanged ASME B16.5</li>
          <li>With ISO PAD</li>
        </ul>

        <h3 className="text-xl font-bold mt-12 mb-4 text-orange-800">
          Component Material Specifications:
        </h3>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">SR. NO.</th>
                <th className="border p-2">DESCRIPTION</th>
                <th className="border p-2">MATERIAL</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Body", "CI / WCB / CF8 / CF8M"],
                ["2", "Cap", "CI / WCB / CF8 / CF8M"],
                ["3", "Ball", "CF8 / CF8M"],
                ["4", "Stem", "SS304 / SS316"],
                ["5", "Gland", "SS304 / SS316"],
                ["6", "Seat Ring", "SS304 / SS316"],
                ["7", "Body Seal", "PTFE / GFT / CFT"],
                ["8", "Gland Packing", "PTFE / GFT / CFT"],
                ["9", "Stem Seal", "PTFE / GFT / CFT"],
                ["10", "Gland Nut", "MS / SS304"],
                ["11", "Lever Nut", "MS / SS304"],
                ["12", "Lever", "MS / SS"],
                ["13", "Stud & Nut", "MS / SS304"],
                ["14", "Lever Sleeve", "PVC"],
                ["15", "End Cap", "PVC"],
              ].map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-orange-100" : ""}
                >
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border p-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-12 mb-4 text-orange-800">
          Dimensions 150#
        </h3>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">SIZE</th>
                <th className="border p-2">DIA D</th>
                <th className="border p-2">PCD</th>
                <th className="border p-2">F/F</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["15", "90", "60.5", "108"],
                ["20", "100", "70", "117"],
                ["25", "110", "79.5", "127"],
                ["40", "125", "98.5", "165"],
                ["50", "150", "120.5", "178"],
                ["65", "180", "139.5", "191"],
                ["80", "190", "152.5", "203"],
                ["100", "230", "190.5", "229"],
                ["150", "280", "241.5", "267"],
                ["200", "345", "298.5", "292"],
                ["250", "405", "362", "330"],
                ["300", "485", "432", "356"],
              ].map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-orange-100" : ""}
                >
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border p-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-12 mb-4 text-orange-800">
          Dimensions 300#
        </h3>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">SIZE</th>
                <th className="border p-2">DIA D</th>
                <th className="border p-2">PCD</th>
                <th className="border p-2">F/F</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["15", "95", "66.5", "140"],
                ["20", "115", "82.5", "152"],
                ["25", "125", "89", "165"],
                ["40", "155", "114.5", "190"],
                ["50", "165", "127", "216"],
                ["65", "190", "149", "241"],
                ["80", "210", "168.5", "283"],
                ["100", "255", "200", "305"],
                ["150", "320", "270", "403"],
                ["200", "380", "330", "419"],
                ["250", "445", "387.5", "457"],
                ["300", "520", "451", "502"],
              ].map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-orange-100" : ""}
                >
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border p-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm mb-6 text-right">All dimensions are in mm.</p>
        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          General Notes
        </h3>
        <ul className="list-disc pl-5 mb-6">
          <li>
            Tailored customization and automation to meet specific customer
            requirements.
          </li>
          <li>
            Standard certificate of compliance issued to EN10204 Type 3.1.
          </li>
          <li>
            Maintaining safety stock levels as per customer specifications.
          </li>
          <li>
            Every valve undergoes comprehensive factory testing and inspection
            in accordance with industry standards.
          </li>
          <li>Availability of various trims to suit unique customer needs.</li>
          <li>
            Assisting customers with sourcing additional product requirements.
          </li>
          <li>
            Consultation services with the factory for torque and other
            technical details.
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="bg-orange-400 text-white py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SMP Controls</h3>
            <p className="text-sm mb-4">
              Leading manufacturer of high-quality industrial valves for various
              applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-orange-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E65100] transition-colors">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center hover:text-[#FFD180] transition-colors">
                      Products <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link
                          href="/butterfly"
                          className="flex items-center hover:text-[#FFD180] transition-colors"
                        >
                          ButterFly Valve
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/ball"
                          className="flex items-center hover:text-[#FFD180] transition-colors"
                        >
                          Ball Valve
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/Gate"
                          className="flex items-center hover:text-[#FFD180] transition-colors"
                        >
                          Gate Valve
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/Globe"
                          className="flex items-center hover:text-[#FFD180] transition-colors"
                        >
                          Globe Valve
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/Check"
                          className="flex items-center hover:text-[#FFD180] transition-colors"
                        >
                          Check Valve
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/Plug"
                          className="flex items-center hover:text-[#FFD180] transition-colors"
                        >
                          Plug Valve
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </a>
              </li>
              <li>
                <a
                  href="/quality"
                  className="hover:text-[#E65100] transition-colors"
                >
                  Quality
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#E65100] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="flex items-center mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                123 Industrial Area, Mumbai, India
              </p>
              <p className="flex items-center mb-2">
                <Phone className="h-5 w-5 mr-2" />
                +91-22-25826629
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                sales@smpcontrols.com
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Stay updated with our latest products and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow py-2 px-4 rounded-l-md text-gray-800"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 py-2 px-4 rounded-r-md transition-colors">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2024 SMP Valves. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
