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
const spanValue2: string = "2";
const spanValue3: string = "3";
const spanValue8: string = "8";

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
            <span className="text-sm">sales@smpcontrol.com</span>
          </div>
        </div>
      </header>

      <nav className="bg-[#FB8C00] py-4 px-6 md:px-12 lg:px-24">
        <ul className="flex items-center justify-center space-x-12 text-white">
          <li>
            <Link
              href="/"
              className="flex items-center hover:text-orange-200 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex items-center hover:text-orange-200 transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-orange-200 transition-colors">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                    href="/butterfly"
                    className="flex items-center hover:text-orange-200 transition-colors"
                  >
                    ButterFly Valve
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/ball"
                    className="flex items-center hover:text-orange-200 transition-colors"
                  >
                    Ball Valve
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/Gate"
                    className="flex items-center hover:text-orange-200 transition-colors"
                  >
                    Gate Valve
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/Globe"
                    className="flex items-center hover:text-orange-200 transition-colors"
                  >
                    Globe Valve
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/Check"
                    className="flex items-center hover:text-orange-200 transition-colors"
                  >
                    Check Valve
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/Plug"
                    className="flex items-center hover:text-orange-200 transition-colors"
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
              className="flex items-center hover:text-orange-200 transition-colors"
            >
              Quality
            </Link>
          </li>
          <li>
            <Link
              href="/client"
              className="flex items-center hover:text-orange-200 transition-colors"
            >
              Clientele
            </Link>
          </li>
          {/* <li>
            <Link
              href="/infrastructure"
              className="flex items-center hover:text-orange-200 transition-colors"
            >
              Infrastructure
            </Link>
          </li>
          <li>
            <Link
              href="/career"
              className="flex items-center hover:text-orange-200 transition-colors"
            >
              Career
            </Link>
          </li> */}
          <li>
            <Link
              href="/contact"
              className="flex items-center hover:text-orange-200 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-orange-800">
          Centric & Bi-Directional Design, Wafer & Lug
        </h2>
        <div className="flex justify-center mb-8">
          <img
            src="\Butterfly valve\centric\k31.jpg"
            alt="Valve 1"
            className=" mr-4"
          />
        </div>
        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          Model K31:Wafer type & Model K32:Lug type{" "}
        </h3>
        <div>
          <p className="font-semibold">
            <u>Applications</u>
          </p>
          <p className="ml-4">
            Ship building, Chemical industry, Power plants, Tank drains, Water
            works, Sugar mill, Infra, Dead-end, Liquid, Gases, Bulk handling,
            Fire protection, Cooling systems, Food and Beverages etc.
          </p>
          <p className="font-semibold">
            <u>Suitable for on-off and control services</u>
          </p>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          Range and Features
        </h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">TYPE</th>
                <th className="border p-2">DESIGN</th>
                <th className="border p-2">PRESSURE</th>
                <th className="border p-2">SEAT</th>
                <th className="border p-2">FLANGE SUIT TO</th>
                <th className="border p-2">2" TO 32"</th>
                <th className="border p-2">36"</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Wafer",
                  "Centric-Bi directional",
                  "PN6, PN10, PN16",
                  "EPDM, EPDM-FOOD GRADE, BONDED/LINING, BUNA-N, VITON",
                  "ANSI 150#, PN10, JIS & KS-5K/10K, BS10",
                  "Yes",
                  "Yes",
                ],
                [
                  "Lug",
                  "Centric-Bi directional",
                  "PN6, PN10, PN16",
                  "EPDM, EPDM-FOOD GRADE, BONDED/LINING, BUNA-N, VITON",
                  "ANSI 150#",
                  "Yes",
                  "",
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
          Design, Manufacturing and Testing Standards – Technology at a Glance{" "}
        </h3>
        <div className="overflow-x-auto mb-4">
          <p>
            <strong>
              Tangent Wafer and Lug Centric Bi-directional butterfly valves
            </strong>{" "}
            are engineered with minimal moving parts, ensuring a long service
            life with low maintenance requirements. A key advantage of Tangent
            products is their international compatibility.
          </p>
          <br></br>
          <p>
            The superior single-piece through-shaft design, incorporated in the
            one-piece body, provides a reliable and durable solution for
            challenging conditions. These valves are lightweight and represent
            an economical option for general-purpose applications. The lugged
            valve offers an alternative solution where flanged valves may face
            spatial and cost constraints.
          </p>
          <br></br>
          <p>
            The replaceable seat design effectively isolates the line media from
            the body and stem. This design features an integrated molded O-ring
            that eliminates the need for gaskets between the flanges and the
            valve, serving as a flange gasket to enhance the valve's capability.
            The seat is convenient and cost-effective for field replacement.
          </p>
          <br></br>
          <p>
            Sealing is achieved through preloaded contact between the disc and
            seat. The shaft seal is suitable for pressure-vacuum service,
            self-adjusting, non-corrosive, and robust enough to absorb thrust,
            extending the valve's cycle life.
          </p>
          <br></br>
          <p>
            The disc hub-edge profile is spherically machined and manually
            rounded with polishing to ensure full concentric seating without
            flow obstruction, resulting in maximum seat life, minimal torque,
            and bubble-tight shut-off. The disc-screw connection to the disc is
            positive and strong, allowing for quick and easy disassembly.
          </p>
        </div>
        <div className="overflow-x-auto mb-4">
          <ul className="list-disc pl-5">
            <li>
              <strong>Design Standards</strong>: Conforms to EN 593 or API 609,
              with additional applicable standards available upon request.
            </li>
            <li>
              <strong>Testing Standards</strong>: Complies with API 598 or BS EN
              12266-I, ensuring bubble-tight shut-off capabilities.
            </li>
            <li>
              <strong>Certification</strong>: EN10204 Type 3.1 certificate is
              standard; manufacturing adheres to ISO 9001:2015 quality system.
            </li>
            <li>
              <strong>Casting Inspection</strong>: Conducted according to
              MSS-SP-55 standards, with other applicable standards available
              upon request.
            </li>
            <li>
              <strong>Trims Available</strong>: A range of casting materials
              offered, including CI, DI, NICI, NIDI, WCB, CF8, CF8M, CF3M, GR.
              4A-5A, and NAB, along with seat materials such as EPDM, BUNA-N,
              and VITON. Various coatings, bonding, and linings can be tailored
              to customer requirements.
            </li>
            <li>
              <strong>Disc Design Options</strong>: Available without disc
              screws based on customer specifications.
            </li>
            <li>
              <strong>Testing Procedures</strong>: 100% factory testing
              (hydrostatic and pneumatic) and inspection of valves in accordance
              with standards.
            </li>
            <li>
              <strong>Operational Options</strong>: Available with lever, gear,
              pneumatic, or electric operation based on customer needs.
            </li>
          </ul>
        </div>
        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          TECHNICAL DATA:{" "}
        </h3>
        <p>
          <u>
            Model K31 - Size: 2” (50 mm) to 36” (900 mm) / Model K32 - Size: 2”
            (50 mm) to 32” (800 mm)
          </u>
        </p>
        <div className="flex justify-center mb-8">
          <img
            src="\Butterfly valve\centric\k_31_32.png"
            alt="Valve 1"
            className=" mr-4"
          />
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">VALVE SIZE</th>
                <th className="border p-2">SHAFT DIA</th>
                <th
                  className="border p-2"
                  colSpan={Number(spanValue8)}
                  style={{ textAlign: "center" }}
                >
                  DIMENSIONS - WAFER & LUGGED
                </th>
                <th className="border p-2">LUGGED</th>
                <th
                  className="border p-2"
                  colSpan={Number(spanValue3)}
                  style={{ textAlign: "center" }}
                >
                  MOUNTAIN FLANGE
                </th>
                <th className="border p-2" colSpan={Number(spanValue2)}>
                  APPX. WEIGHT IN KGS.
                </th>
              </tr>
              <tr className="bg-orange-700 text-white">
                <th className="border p-2">A</th>
                <th className="border p-2">B</th>
                <th className="border p-2">C</th>
                <th className="border p-2">D</th>
                <th className="border p-2">E</th>
                <th className="border p-2">F</th>
                <th className="border p-2">G</th>
                <th className="border p-2">Q</th>
                <th className="border p-2">OD-DIA.</th>
                <th className="border p-2">PCD</th>
                <th className="border p-2">NO. OF HOLES</th>
                <th className="border p-2">HOLE DIA</th>
                <th className="border p-2">WAFER</th>
                <th className="border p-2">LUGGED</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  50, 14.3, 52, 106, 139, 41, 102, 32, 71, 33, 153, 70, 4, 10,
                  3.0, 3.5,
                ],
                [
                  65, 14.3, 65, 116, 151, 44, 102, 32, 76, 48, 175, 70, 4, 10,
                  4.2, 4.6,
                ],
                [
                  80, 14.3, 78, 133, 160, 44, 102, 32, 89, 65, 191, 70, 4, 10,
                  5.1, 5.5,
                ],
                [
                  100, 15.9, 103, 162, 179, 51, 102, 32, 101, 90, 222, 70, 4,
                  10, 6.0, 8.2,
                ],
                [
                  125, 19.0, 129, 188, 190, 54, 102, 32, 120, 117, 254, 70, 4,
                  10, 7.5, 10.2,
                ],
                [
                  150, 19.0, 148, 217, 203, 54, 102, 32, 133, 138, 279, 70, 4,
                  10, 9.1, 12.9,
                ],
                [
                  200, 22.2, 199, 271, 241, 64, 152, 32, 170, 189, 337, 102, 4,
                  14, 16.5, 22.0,
                ],
                [
                  250, 28.6, 250, 331, 274, 64, 152, 51, 211, 241, 403, 102, 4,
                  14, 22.2, 31.0,
                ],
                [
                  300, 28.6, 301, 377, 312, 76, 152, 51, 238, 291, 473, 125, 4,
                  14, 34.1, 48.0,
                ],
                [
                  350, 34.9, 339, 427, 305, 76, 152, 76, 249, 331, 524, 125, 4,
                  14, 42.0, 64.0,
                ],
                [
                  400, 41.3, 390, 485, 330, 102, 152, 76, 280, 377, 585, 125, 4,
                  14, 61.0, 107.0,
                ],
                [
                  450, 47.6, 441, 543, 371, 108, 203, 108, 312, 428, 629, 165,
                  4, 21, 88.3, 118.0,
                ],
                [
                  500, 53.9, 492, 596, 403, 127, 203, 108, 351, 475, 686, 165,
                  4, 21, 111.9, 166.0,
                ],
                [
                  600, 50.8, 591, 718, 496, 151, 203, 108, 430, 575, 813, 165,
                  4, 21, 203.3, 261.0,
                ],
                [
                  700, 70, 669, 785, 565, 170, 300, 108, 480, 647, 924, 254, 8,
                  18, 250, 275.0,
                ],
                [
                  750, 63.5, 743, 882, 584, 167, 300, 108, 534, 729, 971, 254,
                  8, 18, 277, 310.0,
                ],
                [
                  800, 80, 773, 891, 646, 190, 300, 108, 546, 750, 1054, 254, 8,
                  18, 370.0, 407.0,
                ],
                [
                  900,
                  76.2,
                  895,
                  1050,
                  705,
                  200,
                  300,
                  133,
                  636,
                  876,
                  "-",
                  254,
                  8,
                  18,
                  539,
                  "-",
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

        <h3 className="text-xl font-bold mt-12 mb-4 text-orange-800">
          Features and Benefits :
        </h3>

        <div className="mt-4">
          <ul className="list-disc list-inside">
            <li>
              The actuator/gearbox mounting flange adheres to ISO 5211
              standards.
            </li>
            <li>
              The lugged body features drilled and tapped holes (metric or
              imperial) according to ANSI 150# specifications.
            </li>
            <li>
              The design allows for easy and quick replacement of the
              replaceable seat.
            </li>
            <li>The replaceable seat also functions as a flange gasket.</li>
            <li>
              Compatible with various operating mechanisms, including lever,
              gear, pneumatic, and electric options.
            </li>
            <li>
              All dimensions are in millimeters and may be subject to change.
            </li>
            <li>The valve shape is provided for reference purposes only.</li>
            <li>
              "Q" represents the disc chordal dimension at the valve face to
              ensure disc clearance into the pipe or equipment.
            </li>
            <li>
              The weight listed refers to the bare shaft valve only and varies
              based on the material used.
            </li>
            <li>
              Rubber bonding options include Buna-N, EPDM, and FKM, available in
              addition to the replaceable rubber seat.
            </li>
          </ul>
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
