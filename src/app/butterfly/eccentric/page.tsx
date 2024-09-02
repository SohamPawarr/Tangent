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
          Large Size Double Flanged, Eccentric Design
        </h2>
        <h2 className="text-2xl font-bold mb-6 text-orange-800">
          Model K35: Large size Double Flanged Butterfly valve
        </h2>
        <div>
          <p className="font-semibold">
            <u>Applications</u>
          </p>
          <p className="ml-4">
            Power plants, Water works, Municipal water treatment, Cooling
            systems, Industrial applications etc.
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
                <td className="border p-2">Eccentric</td>
                <td className="border p-2">PN6, PN10, PN16, PN20, PN25</td>
                <td className="border p-2">EPDM, BUNA-N, VITON</td>
                <td className="border p-2">
                  PN6, PN10, PN16, PN20, PN25, ANSI, JIS ANSI, BS, DIN, ISO, IS
                </td>
                <td className="border p-2">500 to 2000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          Design, Manufacturing and Testing Standards – Technology at a Glance{" "}
        </h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-orange-100">
                <td className="border p-2">
                  Tangent Double flanged Eccentric Large Butterfly valves are
                  designed to accommodate Flange drilling JIS, ANSI, DIN, BS.
                  They also provide dead-end service capability with downstream
                  piping removed. Each size valve flange is engineered to have
                  the maximum outside diameter and maximum thickness according
                  to the nominated flange standards. K35 type valves offer
                  robust features to ensure reliable performance and long
                  service life.
                  <br />
                  <strong>
                    A significant advantage of Tangent products is their
                    international compatibility.
                  </strong>
                  <br />
                  <br />
                  The valve face to face dimensions conform to EN 558, BS 5155
                  Short, ISO 5752 Table 4, EN-593, and AWWA C-504, AWWA C-207.
                  The mounting cast flange is designed in accordance with ISO
                  5211.
                  <br />
                  <br />
                  The Replaceable Seat design meets the requirements for
                  on-field seat replaceability without special tools,
                  dismantling, or removing the valve from the line. It also
                  provides better shut-off and longer service life. The seat is
                  of a molded construction and fits easily into the body, which
                  reduces seating torque with disc edge contours. The seat is
                  adjustable to optimize the required shut-off tightness to
                  comply with the torque for both unidirectional and directional
                  operations.
                  <br />
                  <br />
                  The Eccentric design offers energy-efficient flow control. The
                  stainless steel disc edge protects against corrosion and
                  eliminates the possibility of restricted sealing. Upper and
                  lower shaft bearings prevent shaft deflection and provide
                  optimal guidance to increase the valve life. High strength and
                  full diameter shafts remain dry and provide positive disc
                  control with minimal flow restriction.
                  <br />
                  <br />
                  Self-lubricated sleeve bearings allow valve installation with
                  the shaft either vertical or horizontal. Thrust bearings are
                  provided with adjustments to ensure good axial positioning of
                  the disc due to forces applied by the seat and shaft seals to
                  the disc. The secondary seal protects the bearing area from
                  the environment and acts as a primary seal in case of primary
                  seal failure. Rubber lining is an additional option for this
                  product.
                </td>
              </tr>
            </tbody>
          </table>
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
          <u>Size: 20” (500 mm) to 80” (2000 mm)</u>
        </p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          <img
            src="\Butterfly valve\eccentric\k_35_new.png"
            alt="Description for img 1"
            className="w-1/3 object-cover rounded"
          />
          <img
            src="\Butterfly valve\eccentric\k35 new.png"
            alt="Description for img 2"
            className="w-1/5 object-cover rounded"
          />
        </div>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">VALVE SIZE</th>
                <th className="border p-2">A</th>
                <th className="border p-2">B</th>
                <th className="border p-2">C</th>
                <th className="border p-2">D</th>
                <th className="border p-2">G</th>
                <th className="border p-2">Q</th>
                <th className="border p-2">F TO F</th>
              </tr>
            </thead>
            <tbody>
              {[
                [500, 500, 670, 505, 70, "50 to 60", 460, 229],
                [600, 600, 780, 565, 85, "50 to 60", 555, 267],
                [700, 700, 895, 623, 86, "50 to 70", 658, 292],
                [750, 750, 965, 598, 105, "60 to 80", 703, 318],
                [800, 800, 1016, 623, 99, "60 to 80", 757, 318],
                [900, 900, 1116, 673, 97, "60 to 90", 859, 330],
                [1000, 1000, 1230, 730, 159, "70 to 100", 934, 410],
                [1100, 1100, 1340, 798, 197, "80 to 120", 1012, 470],
                [1200, 1200, 1455, 848, 185, "80 to 120", 1129, 470],
                [1300, 1300, 1575, 918, 212, "90 to 140", 1216, 530],
                [1400, 1400, 1675, 968, 219, "90 to 140", 1319, 530],
                [1500, 1500, 1785, 1038, 250, "100 to 160", 1405, 600],
                [1600, 1600, 1915, 1088, 243, "100 to 160", 1518, 600],
                [1800, 1800, 2115, 1210, 286, "120 to 180", 1711, 670],
                [2000, 2000, 2325, 1333, 350, "140 to 200", 1884, 760],
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

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">VALVE SIZE</th>
                <th className="border p-2">ACT. FLANGE</th>
                <th className="border p-2">APPX. WEIGHT IN KGS</th>
              </tr>
            </thead>
            <tbody>
              {[
                [500, "F14/F16", 215],
                [600, "F14/F16", 280],
                [700, "F14/F16", 390],
                [750, "F25", 465],
                [800, "F25", 525],
                [900, "F25", 645],
                [1000, "F25/F30", 885],
                [1100, "F25/F30", 1075],
                [1200, "F30/F35", 1300],
                [1300, "F30/F35", 1600],
                [1400, "F30/F35", 1930],
                [1500, "F35/F40", 2300],
                [1600, "F35/F40", 2690],
                [1800, "F35/F40", 3550],
                [2000, "F40/F48", 4595],
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
        <div>
          {" "}
          <ul className="list-disc list-inside">
            <li>
              Actuator/Gearbox mounting flange conforms to ISO 5211 standards,
              with drilling and tapping customized as per customer
              specifications.
            </li>
            <li>Valves are Double Flanged and Uni-directional.</li>
            <li>
              Operates under pressures ranging from PN6 to PN25 and temperatures
              from -30 to +120°C for EPDM, and -18 to +140°C for VITON.
            </li>
            <li>
              Compatible with various actuators including Gear, Pneumatic,
              Electric, and Electro-Hydraulic systems.
            </li>
            <li>
              The K35 Model offers a cost-effective solution ideal for Power
              generation, Municipal water treatment, Desalination plants, and
              other industrial applications.
            </li>
            <li>
              All dimensions are in millimeters and subject to modification.
            </li>
            <li>The valve shape shown is for reference only.</li>
            <li>
              The Q dimension ensures proper disc clearance into the pipeline or
              equipment.
            </li>
            <li>
              Weight mentioned is for the bare shaft valve and varies based on
              the valve material.
            </li>
            <li>Dimensions are optimized for efficient sealing performance.</li>
            <li>
              Wide options available in Material, End connections, and
              Face-to-Face dimensions.
            </li>
            <li>
              Coatings and rubber linings available as per customer
              requirements.
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
