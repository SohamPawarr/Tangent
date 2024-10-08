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
             <h1 className="text-black text-3xl font-bold">SMP Controls Systems Private Limited</h1>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-orange-500" />
            <span className="text-sm">  </span>
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
      {/* Model K1 Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-orange-800">
          Model K1: One piece, Fire safe-antistatic design, Reduced bore, Flange
          end (150#, 300#)
        </h2>

        <p className="mb-4">
          One Piece design features eliminates any possible and potential leak
          paths. Insert holds the internal assembly in position. This creates a
          positive metal to metal sealing between body and insert which
          eliminates the leakage through flange. Ideally suitable for use in oil
          and gas production, refining and chemical applications. Body material
          and wetted trim components confirms to NACE standard MR 0175. Fire
          safe and Anti static design where Hazardous areas with handling of
          flammable fuels, gases or chemicals are in use.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          Technical Data :
        </h3>

        <ul className="list-disc pl-5 mb-6">
          <li>Size Range: DN 50(2") - 200(8")</li>
          <li>Pressure rating : ASME Class 150 to 300</li>
          <li>Temperature range : Upto 260 deg. C</li>
          <li>Seat : PTFE / Carbon Reinforced PTFE</li>
          <li>End Connections : Flanged ASME B16.5</li>
          <li>With & Without ISO PAD</li>
        </ul>

        <div className="flex justify-center mb-8">
          <img
            src="/Ball Valve/K1-1.jpg"
            alt="Valve 1"
            className="w-1/4 mr-4"
          />
          <img src="/Ball Valve/K1.png" alt="Valve 2" className="w-1/4" />
        </div>

        <h3 className="text-xl font-bold mt-12 mb-4 text-orange-800">
          Valve Specifications:
        </h3>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">VALVE SIZE</th>
                <th className="border p-2">ØA</th>
                <th className="border p-2">ØB</th>
                <th className="border p-2">C</th>
                <th className="border p-2">D</th>
                <th className="border p-2">STEM CONNECTION</th>
                <th className="border p-2">TOP FLANGE</th>
              </tr>
              <tr className="bg-orange-700 text-white">
                <th className="border p-2">DN</th>
                <th className="border p-2">Bore</th>
                <th className="border p-2">150#</th>
                <th className="border p-2">300#</th>
                <th className="border p-2">C to T</th>
                <th className="border p-2">150#</th>
                <th className="border p-2">300#</th>
                <th className="border p-2">E</th>
                <th className="border p-2">F</th>
                <th className="border p-2">K</th>
                <th className="border p-2">H X G</th>
                <th className="border p-2">Keyway</th>
                <th className="border p-2">No. of Holes</th>
                <th className="border p-2">Hole Dia</th>
                <th className="border p-2">PCD</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  50,
                  38,
                  150,
                  165,
                  47,
                  178,
                  216,
                  89,
                  277,
                  112,
                  "19 X 12.7",
                  "N/A",
                  4,
                  "M8",
                  70,
                ],
                [
                  80,
                  63,
                  190,
                  210,
                  85,
                  203,
                  282,
                  103,
                  427,
                  158,
                  "22 X 15.9",
                  "N/A",
                  4,
                  "M10",
                  102,
                ],
                [
                  100,
                  76,
                  230,
                  255,
                  97,
                  229,
                  305,
                  114,
                  427,
                  170,
                  "22 X 15.9",
                  "N/A",
                  4,
                  "M10",
                  102,
                ],
                [
                  150,
                  102,
                  280,
                  320,
                  124,
                  267,
                  403,
                  133,
                  625,
                  220,
                  "Ø32",
                  "10 X 10",
                  4,
                  "M12",
                  125,
                ],
                [
                  200,
                  150,
                  345,
                  380,
                  159,
                  292,
                  419,
                  161,
                  966,
                  255,
                  "Ø32",
                  "10 X 10",
                  4,
                  "M12",
                  125,
                ],
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

        <p className="text-sm mt-2 text-right">All dimensions are in mm.</p>

        <h4 className="font-bold mt-6 mb-2">Notes :</h4>
        <ul className="list-disc pl-5">
          <li>
            E = Handle dimension when the handle is in the extended position.
          </li>
          <li>H = Diameter of the stem connection.</li>
          <li>g = Dimension across the stem flats.</li>
          <li>Dimensions are nominal to ± 1mm.</li>
        </ul>
        {/* Standard Trims */}
        <h3 className="text-xl font-bold mt-12 mb-4 text-orange-800">
          Standard Trims :
        </h3>

        <h3 className="text-xl font-bold mt-12 mb-4 text-orange-800">
          Valve Material Specifications:
        </h3>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">CLASS</th>
                <th className="border p-2">BODY MATERIAL</th>
                <th className="border p-2">INSERT MATERIAL</th>
                <th className="border p-2">SEAT</th>
                <th className="border p-2">BALL MATERIAL</th>
                <th className="border p-2">STEM MATERIAL</th>
                <th className="border p-2">BODY SEAL</th>
                <th className="border p-2">WRENCH</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["150", "WCB", "WCB", "PTFE", "CF8", "304 S/S", "PTFE", "MS"],
                ["150", "WCB", "WCB", "PTFE", "CF8M", "316 S/S", "PTFE", "MS"],
                [
                  "150",
                  "CF8M",
                  "CF8M",
                  "PTFE",
                  "CF8M",
                  "316 S/S",
                  "PTFE",
                  "SS",
                ],
                [
                  "300",
                  "WCB",
                  "WCB",
                  "Carbon R'PTFE",
                  "CF8M",
                  "316 S/S",
                  "PTFE",
                  "MS",
                ],
                [
                  "300",
                  "CF8M",
                  "CF8M",
                  "Carbon R'PTFE",
                  "CF8M",
                  "316 S/S",
                  "PTFE",
                  "SS",
                ],
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

        {/* General Notes */}
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
                href="https://www.linkedin.com/company/smp-control-systems-private-limited/"
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
              {/* <p className="flex items-center mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                   
              </p>
              <p className="flex items-center mb-2">
                <Phone className="h-5 w-5 mr-2" />
                 
              </p> */}
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
