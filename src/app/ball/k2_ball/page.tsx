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
const spanValue3: string = "3";
const spanValue2: string = "2";

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
            <span className="text-sm">sales@smpcontrol.com</span>
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
          Model K2: One/Two Piece, Fire Safe-Antistatic design, Full bore Flange
          end (150#,300#)
        </h2>

        <p className="mb-4">
          One Piece body from DN 15 to DN 40 and Two-piece design from DN 50 to
          DN 200 valve size. Ideally suitable for use in oil and gas production,
          refining and chemical applications. Body material and wetted trim
          components confirms to NACE standard MR 0175. Fire safe and
          Anti-static design where Hazardous areas with handling of flammable
          fuels, gases or chemicals are in use.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          Technical Data :
        </h3>

        <ul className="list-disc pl-5 mb-6">
          <li>
            Size Range: DN 15 – DN 40 (One piece), DN 50 – DN 200 (Two piece)
          </li>
          <li>Pressure rating : ASME Class 150 to 300</li>
          <li>Temperature range: Up to 260 deg. C</li>
          <li>Seat : PTFE / Carbon Reinforced PTFE</li>
          <li>End Connections : Flanged ASME B16.5</li>
          <li>With & Without ISO PAD</li>
        </ul>

        <div className="flex justify-center mb-8">
          <img src="/Ball Valve/K2.jpg" alt="Valve 1" className="w-1/4 mr-4" />
          <img src="/Ball Valve/k2-2.png" alt="Valve 2" className="w-1/4" />
        </div>
        {/* Detailed Dimensions Table */}
        <h3 className="text-xl font-bold mt-12 mb-4 text-orange-800">
          Valve Dimensions:
        </h3>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th colSpan={Number(spanValue2)} className="border p-2">
                  VALVE SIZE
                </th>
                <th colSpan={Number(spanValue2)} className="border p-2">
                  ØB
                </th>
                <th className="border p-2">C</th>
                <th colSpan={Number(spanValue2)} className="border p-2">
                  D
                </th>
                <th colSpan={Number(spanValue2)} className="border p-2">
                  E
                </th>
                <th className="border p-2">F</th>
                <th className="border p-2">K</th>
                <th colSpan={Number(spanValue2)} className="border p-2">
                  STEM CONNECTION
                </th>
                <th colSpan={Number(spanValue3)} className="border p-2">
                  TOP FLANGE
                </th>
              </tr>
              <tr className="bg-orange-700 text-white">
                <th className="border p-2">DN</th>
                <th className="border p-2">ØA Bore</th>
                <th className="border p-2">150#</th>
                <th className="border p-2">300#</th>
                <th className="border p-2">C to T</th>
                <th className="border p-2">150#</th>
                <th className="border p-2">300#</th>
                <th className="border p-2">150#</th>
                <th className="border p-2">300#</th>
                <th className="border p-2"></th>
                <th className="border p-2"></th>
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
                  15,
                  14,
                  89,
                  95,
                  26,
                  108,
                  140,
                  56,
                  56,
                  137,
                  101,
                  "9.5 X 6.3",
                  "N/A",
                  4,
                  7,
                  60,
                ],
                [
                  20,
                  19,
                  98,
                  117,
                  32,
                  117,
                  152,
                  57,
                  57,
                  155,
                  107,
                  "14.3 X 9.5",
                  "N/A",
                  4,
                  7,
                  70,
                ],
                [
                  25,
                  25,
                  108,
                  124,
                  37,
                  127,
                  165,
                  60,
                  60,
                  155,
                  110,
                  "14.3 X 9.5",
                  "N/A",
                  4,
                  7,
                  70,
                ],
                [
                  40,
                  38,
                  127,
                  156,
                  47,
                  165,
                  190,
                  87,
                  87,
                  277,
                  110,
                  "19 X 12.7",
                  "N/A",
                  4,
                  "M8",
                  70,
                ],
                [
                  50,
                  50,
                  152,
                  165,
                  66,
                  178,
                  216,
                  75,
                  93,
                  227,
                  121,
                  "19 X 12.7",
                  "N/A",
                  4,
                  "M8",
                  70,
                ],
                [
                  65,
                  63,
                  178,
                  190,
                  85,
                  190,
                  241,
                  89,
                  107,
                  427,
                  160,
                  "22 X 15.9",
                  "N/A",
                  4,
                  "M10",
                  102,
                ],
                [
                  80,
                  76,
                  190,
                  210,
                  97,
                  203,
                  283,
                  95,
                  116,
                  427,
                  170,
                  "22 X 15.9",
                  "N/A",
                  4,
                  "M10",
                  102,
                ],
                [
                  100,
                  102,
                  230,
                  254,
                  129,
                  229,
                  305,
                  99,
                  135,
                  625,
                  220,
                  "Ø32",
                  "10 X 10",
                  4,
                  "M12",
                  125,
                ],
                [
                  150,
                  151,
                  317,
                  332,
                  159,
                  394,
                  403,
                  181,
                  186,
                  966,
                  255,
                  "Ø32",
                  "10 X 10",
                  4,
                  "M12",
                  125,
                ],
                [
                  200,
                  201,
                  408,
                  381,
                  199,
                  457,
                  502,
                  229,
                  "N/A",
                  "N/A",
                  "N/A",
                  "Ø35",
                  "10 X 8",
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

        <p className="text-sm mb-6 text-right">All dimensions are in mm.</p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">Notes</h3>
        <ul className="list-disc pl-5 mb-6">
          <li>
            F = Handle dimension when the handle is in the extended position.
          </li>
          <li>H = Diameter of the stem connection.</li>
          <li>G = Dimension across the stem flats.</li>
          <li>Dimensions are nominal to ± 1mm.</li>
        </ul>
        {/* Detailed Dimensions Table */}
        <h3 className="text-xl font-bold mt-12 mb-4 text-orange-800">
          Valve Dimensions:
        </h3>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">Class</th>
                <th className="border p-2">Body Material</th>
                <th className="border p-2">Insert Material</th>
                <th className="border p-2">Seat</th>
                <th className="border p-2">Ball Material</th>
                <th className="border p-2">Stem Material</th>
                <th className="border p-2">Body Seal</th>
                <th className="border p-2">Wrench</th>
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
