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
const spanValue5: string = "5";
const spanValue10: string = "10";
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
          Centric & Bi-Directional, Double Flanged
        </h2>

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
                <th className="border p-2">SIZE (MM)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-orange-100">
                <td className="border p-2">Double Flanged</td>
                <td className="border p-2">Centric-Bi directional</td>
                <td className="border p-2">PN6, PN10, PN16</td>
                <td className="border p-2">EPDM, BUNA-N, VITON</td>
                <td className="border p-2">
                  ANSI / ASME B16.1, BS4504, JIS B2210, DIN 2501
                </td>
                <td className="border p-2">50 to 600</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          Design, Manufacturing and Testing Standards – Technology at a Glance{" "}
        </h3>
        <div className="overflow-x-auto mb-4">
          <p>
            Tangent Double Flanged Centric Design Bi-directional Butterfly
            Valves are crafted to fit a variety of flange drillings. Each valve
            size flange is designed with the maximum outside diameter and
            thickness for the specified flange standards.
            <br />
            <strong>
              “One significant advantage of Tangent products is their
              international compatibility.”
            </strong>
          </p>
          <br></br>
          <p>
            The valve face-to-face dimensions comply with BS 5155 Short, ISO
            5752 Table 4, EN-593, and AWWA C-504.
          </p>
          <br></br>
          <p>
            The replaceable seat design allows for easy field replacement and
            addresses internal valve body protection as the seat encapsulates
            the wetted area. The molded seat fits snugly into the body, offering
            superior corrosion protection. The seat covers the valve body’s
            interior and extends onto the grooved flange faces, providing flange
            sealing and eliminating the need for gaskets. A peripheral band on
            the seat fits into a bed-groove pocket in the body, ensuring the
            seat remains securely in place when the disc is closing and moving
            from the seating surface.
          </p>
          <br></br>
          <p>
            Upper and lower shaft bearings prevent shaft deflection and provide
            optimal guidance, enhancing valve longevity. Primary shaft sealing
            is achieved through pre-loaded contact between the seat's flat
            surface, completely isolating the shaft and body from the flow
            stream.
          </p>
          <br></br>
          <p>
            The disc hub-edge profile is spherically machined and manually
            polished to ensure full concentric seating without obstructing flow,
            maximizing seat life, minimizing torque, and ensuring a bubble-tight
            shut-off. The disc-screw connection is robust, shake-proof, and
            allows for quick and easy disassembly.
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
          TECHNICAL DATA: (Model K39){" "}
        </h3>
        <p>
          <u>Size: 2” (50 mm) to 24” (600 mm)</u>
        </p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <img
            src="\Butterfly valve\centric\k39_new.png"
            alt="Description for img 1"
            className="w-1/3 object-cover rounded"
          />
          <img
            src="\Butterfly valve\centric\Model K39.png"
            alt="Description for img 2"
            className="w-1/5 object-cover rounded"
          />
        </div>
        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          End Connection Accomodation :
        </h3>
        <p>
          ANSI B16.1(150#), DIN PN10/PN16, ANSI B16.47(150#) Series A, ISO 7005
          PN10/PN16, BS 10 TABLE D/E/F, JIS PN10
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">VALVE SIZE</th>
                <th className="border p-2">SHAFT DIA</th>
                <th className="border p-2">A</th>
                <th className="border p-2">B</th>
                <th className="border p-2">C</th>
                <th className="border p-2">D</th>
                <th className="border p-2">E</th>
                <th className="border p-2">F</th>
                <th className="border p-2">G</th>
                <th className="border p-2">Q</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-orange-700 text-white">
                <td className="border p-2" colSpan={Number(spanValue10)}>
                  EN 593
                </td>
              </tr>
              {[
                [80, 14.3, 78, 200, 159, 114, 32, 19, 100, 0],
                [100, 15.9, 103, 230, 178, 127, 100, 32, 24, 0],
                [150, 19.1, 148, 306, 203, 140, 100, 32, 26, 49],
                [200, 22.2, 199, 369, 242, 152, 150, 32, 29, 129],
                [250, 28.6, 250, 430, 273, 165, 150, 51, 30, 188],
                [300, 28.6, 300, 491, 311, 178, 150, 52, 32, 243],
                [350, 34.9, 338, 550, 305, 190, 150, 76, 35, 281],
                [400, 41.3, 390, 611, 336, 216, 150, 69, 37, 325],
                [450, 47.6, 441, 676, 369, 222, 210, 108, 40, 382],
                [500, 47.6, 492, 701, 404, 229, 210, 108, 43, 436],
                [600, 57.2, 598, 816, 496, 267, 210, 100, 48, 531],
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
              <tr className="bg-orange-700 text-white">
                <td className="border p-2" colSpan={Number(spanValue10)}>
                  AWWA C504
                </td>
              </tr>
              {[
                [200, 28.6, 199, 369, 242, 152, 150, 32, 29, 129],
                [250, 28.6, 250, 430, 273, 203, 150, 51, 30, 146],
                [300, 31.8, 300, 491, 311, 203, 150, 52, 32, 222],
                [350, 34.9, 338, 550, 305, 203, 150, 76, 35, 273],
                [400, 41.3, 390, 611, 336, 203, 150, 69, 37, 334],
                [450, 47.6, 441, 676, 371, 203, 210, 108, 40, 392],
                [500, 54, 492, 701, 404, 203, 210, 108, 43, 448],
                [600, 63.5, 598, 815, 496, 203, 210, 100, 48, 559],
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
          Mounting Flange & Weight
        </h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">VALVE SIZE</th>
                <th className="border p-2">PCD</th>
                <th className="border p-2">NO. OF HOLES</th>
                <th className="border p-2">HOLE DIA</th>
                <th className="border p-2">APPX. WEIGHT IN KGS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-orange-700 text-white">
                <td className="border p-2" colSpan={Number(spanValue5)}>
                  EN 593
                </td>
              </tr>
              {[
                [80, 70, 4, 11, 14],
                [100, 70, 4, 10, 20],
                [150, 70, 4, 10, 28],
                [200, 125, 4, 14, 46],
                [250, 125, 4, 14, 67],
                [300, 125, 4, 14, 85],
                [350, 125, 4, 14, 118],
                [400, 125, 4, 14, 158],
                [450, 165, 4, 21, 192],
                [500, 165, 4, 21, 224],
                [600, 165, 4, 21, 375],
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
              <tr className="bg-orange-700 text-white">
                <td className="border p-2" colSpan={Number(spanValue5)}>
                  AWWA C504
                </td>
              </tr>
              {[
                [200, 125, 4, 14, 48],
                [250, 125, 4, 14, 66],
                [300, 125, 4, 14, 84],
                [350, 125, 4, 14, 118],
                [400, 125, 4, 14, 159],
                [450, 165, 4, 21, 192],
                [500, 165, 4, 21, 222],
                [600, 165, 4, 21, 375],
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
