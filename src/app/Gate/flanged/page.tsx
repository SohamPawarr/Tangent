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
            src="/pawarlogo.svg"
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
                    href="/Butterfly"
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
          Model K71: GATE VALVE, Flanged End (150# , 300#)
        </h2>
        <div className="flex justify-center">
          <div className="ml-4 flex">
            <img
              src="\Gate valve\flanged\k_71_new.png"
              alt="Gate valve technical diagram"
              className="w-50 h-auto object-cover rounded"
            />
            <img
              src="\Gate valve\flanged\Model K71.jpg"
              alt="Actual gate valve photo"
              className="ml-4 w-40 h-auto object-cover rounded"
            />
          </div>
        </div>
        <br></br>
        <table className="border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Design Std.</th>
              <th className="border border-gray-300 px-4 py-2">
                End Connection
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Testing & Std.
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Size, 150# & 300#
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">
                As Per BS 1414
              </td>
              <td className="border border-gray-300 px-4 py-2">Flanged End</td>
              <td className="border border-gray-300 px-4 py-2">
                As per API 598 / ISO 5208
              </td>
              <td className="border border-gray-300 px-4 py-2">
                15 mm to 300 mm (1/2" to 12")
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          BILL OF MATERIAL
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
              <tr className="bg-orange-100">
                <td className="border p-2">1</td>
                <td className="border p-2">Body</td>
                <td className="border p-2">WCB / CF8 / CF8M</td>
              </tr>
              <tr>
                <td className="border p-2">2</td>
                <td className="border p-2">Bonnet</td>
                <td className="border p-2">WCB / CF8 / CF8M</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">3</td>
                <td className="border p-2">Wedge</td>
                <td className="border p-2">WCB (13% CR) / CF8 / CF8M</td>
              </tr>
              <tr>
                <td className="border p-2">4</td>
                <td className="border p-2">Seat Ring</td>
                <td className="border p-2">SS410 (13% CR) / CF8 / CF8M</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">5</td>
                <td className="border p-2">Stem</td>
                <td className="border p-2">SS410 / SS304 / SS316</td>
              </tr>
              <tr>
                <td className="border p-2">6</td>
                <td className="border p-2">Gland</td>
                <td className="border p-2">SS410 / SS304 / SS316</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">7</td>
                <td className="border p-2">Yoke Sleeve</td>
                <td className="border p-2">SS410 / SS304 / SS316</td>
              </tr>
              <tr>
                <td className="border p-2">8</td>
                <td className="border p-2">Back Seat Bush</td>
                <td className="border p-2">CS / CF8 / CF8M</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">9</td>
                <td className="border p-2">Gasket</td>
                <td className="border p-2">EN8</td>
              </tr>
              <tr>
                <td className="border p-2">10</td>
                <td className="border p-2">Gland Packing</td>
                <td className="border p-2">MS / SS</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">11</td>
                <td className="border p-2">Bonet Stud</td>
                <td className="border p-2">MALLEABLE IRON</td>
              </tr>
              <tr>
                <td className="border p-2">12</td>
                <td className="border p-2">Bolt</td>
                <td className="border p-2">MS</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">13</td>
                <td className="border p-2">Hand wheel</td>
                <td className="border p-2">SPW SS304 GRAPHITE FILLED</td>
              </tr>
              <tr>
                <td className="border p-2">14</td>
                <td className="border p-2">Hand wheel Nut</td>
                <td className="border p-2">GRAPHITE</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
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
              <tr className="bg-orange-100">
                <td className="border p-2">15</td>
                <td className="border p-2">90</td>
                <td className="border p-2">60.5</td>
                <td className="border p-2">108</td>
              </tr>
              <tr>
                <td className="border p-2">20</td>
                <td className="border p-2">100</td>
                <td className="border p-2">70</td>
                <td className="border p-2">117</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">25</td>
                <td className="border p-2">110</td>
                <td className="border p-2">79.5</td>
                <td className="border p-2">127</td>
              </tr>
              <tr>
                <td className="border p-2">40</td>
                <td className="border p-2">125</td>
                <td className="border p-2">98.5</td>
                <td className="border p-2">165</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">50</td>
                <td className="border p-2">150</td>
                <td className="border p-2">120.5</td>
                <td className="border p-2">178</td>
              </tr>
              <tr>
                <td className="border p-2">65</td>
                <td className="border p-2">180</td>
                <td className="border p-2">139.5</td>
                <td className="border p-2">191</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">80</td>
                <td className="border p-2">190</td>
                <td className="border p-2">152.5</td>
                <td className="border p-2">203</td>
              </tr>
              <tr>
                <td className="border p-2">100</td>
                <td className="border p-2">230</td>
                <td className="border p-2">190.5</td>
                <td className="border p-2">229</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">150</td>
                <td className="border p-2">280</td>
                <td className="border p-2">241.5</td>
                <td className="border p-2">267</td>
              </tr>
              <tr>
                <td className="border p-2">200</td>
                <td className="border p-2">345</td>
                <td className="border p-2">298.5</td>
                <td className="border p-2">292</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">250</td>
                <td className="border p-2">405</td>
                <td className="border p-2">362</td>
                <td className="border p-2">330</td>
              </tr>
              <tr>
                <td className="border p-2">300</td>
                <td className="border p-2">485</td>
                <td className="border p-2">432</td>
                <td className="border p-2">356</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
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
              <tr className="bg-orange-100">
                <td className="border p-2">15</td>
                <td className="border p-2">95</td>
                <td className="border p-2">66.5</td>
                <td className="border p-2">140</td>
              </tr>
              <tr>
                <td className="border p-2">20</td>
                <td className="border p-2">115</td>
                <td className="border p-2">82.5</td>
                <td className="border p-2">152</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">25</td>
                <td className="border p-2">125</td>
                <td className="border p-2">89</td>
                <td className="border p-2">165</td>
              </tr>
              <tr>
                <td className="border p-2">40</td>
                <td className="border p-2">155</td>
                <td className="border p-2">114.5</td>
                <td className="border p-2">190</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">50</td>
                <td className="border p-2">165</td>
                <td className="border p-2">127</td>
                <td className="border p-2">216</td>
              </tr>
              <tr>
                <td className="border p-2">65</td>
                <td className="border p-2">190</td>
                <td className="border p-2">149</td>
                <td className="border p-2">241</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">80</td>
                <td className="border p-2">210</td>
                <td className="border p-2">168.5</td>
                <td className="border p-2">283</td>
              </tr>
              <tr>
                <td className="border p-2">100</td>
                <td className="border p-2">255</td>
                <td className="border p-2">200</td>
                <td className="border p-2">305</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">150</td>
                <td className="border p-2">320</td>
                <td className="border p-2">270</td>
                <td className="border p-2">403</td>
              </tr>
              <tr>
                <td className="border p-2">200</td>
                <td className="border p-2">380</td>
                <td className="border p-2">330</td>
                <td className="border p-2">419</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">250</td>
                <td className="border p-2">445</td>
                <td className="border p-2">387.5</td>
                <td className="border p-2">457</td>
              </tr>
              <tr>
                <td className="border p-2">300</td>
                <td className="border p-2">520</td>
                <td className="border p-2">451</td>
                <td className="border p-2">502</td>
              </tr>
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
