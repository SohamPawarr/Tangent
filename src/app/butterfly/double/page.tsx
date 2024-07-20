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
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-orange-800">
          High Performance Double Offset{" "}
        </h2>
        <h2 className="text-2xl font-bold mb-6 text-orange-800">
          Model KHP-W: Wafer type , Model KHP-L: Lug type & Model KHP-F: Flange
          type{" "}
        </h2>
        <div className="flex items-start">
          <div className="flex-1">
            <p className="font-semibold">
              <u>Applications</u>
            </p>
            <p className="ml-4">
              Pharma, Military, Sour gas, Food Processing, Vacuum and Oxygen
              services, Steam services, Dead-end services, Fire, Chemical
              industry e.g. Chlorine-Ammonia etc., Reverse Osmosis, Slurry
              services, Modulating or Special fluids where Flow control is
              Important.
            </p>
            <p className="font-semibold">
              <u>Suitable for on-off and control services</u>
            </p>
          </div>
          <div className="ml-4">
            <img
              src="\Butterfly valve\double\KHPbanner.png"
              alt="Description for img 1"
              className="w-40 h-auto object-cover rounded"
            />
          </div>
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
                <th className="border p-2">2" TO 24"</th>
                <th className="border p-2">28" TO 36"</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-orange-100">
                <td className="border p-2">Wafer</td>
                <td className="border p-2">Eccentric-Double offset</td>
                <td className="border p-2">ANSI Class 150-300</td>
                <td className="border p-2">
                  RTFE, PTFE, UHMWPE, Metal, Fire Safe
                </td>
                <td className="border p-2">ANSI 150#,300#</td>
                <td className="border p-2">Yes</td>
                <td className="border p-2">Yes</td>
              </tr>
              <tr>
                <td className="border p-2">Lug</td>
                <td className="border p-2">Eccentric-Double offset</td>
                <td className="border p-2">ANSI Class 150-300</td>
                <td className="border p-2">
                  RTFE, PTFE, UHMWPE, Metal, Fire Safe
                </td>
                <td className="border p-2">ANSI 150#,300#</td>
                <td className="border p-2">Yes</td>
                <td className="border p-2">Yes</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">Flange</td>
                <td className="border p-2">Eccentric-Double offset</td>
                <td className="border p-2">ANSI Class 150-300</td>
                <td className="border p-2">
                  RTFE, PTFE, UHMWPE, Metal, Fire Safe
                </td>
                <td className="border p-2">ANSI 150#,300#</td>
                <td className="border p-2">Yes</td>
                <td className="border p-2"></td>
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
                  Tangent Wafer, Lug, and Flanged Double offset butterfly valves
                  are engineered to ensure minimal seat wear, zero-leakage
                  shutoff across the entire pressure range, and
                  Uni-Bidirectional operation, providing extended service life
                  with minimal maintenance.
                  <br />
                  <strong>
                    A major advantage of Tangent products is their international
                    compatibility.
                  </strong>
                  <br />
                  <br />
                  The superior two-piece stem design and double offset disc/stem
                  design enable high cycling and eliminate seat deformation when
                  the disc is in the open position. Initially, the offset disc
                  creates a cam action that pulls the disc away from the seat
                  during opening. This action ensures maximum seat service life
                  with reduced operating torques. The first offset positions the
                  stems downstream of the seat center line, providing a
                  360-degree unobstructed sealing surface. The second offset
                  places the stems off-center from the seat's vertical axis. As
                  the valve closes, the camming action converts disc rotary
                  motion into linear motion, effectively pressing the disc onto
                  the seat.
                  <br />
                  <br />
                  Mounting pads are integrally casted, facilitating direct
                  mounting of gearbox and actuators on valves. The torque
                  requirements of Tangent's High-performance double offset
                  valves are significantly lower.
                  <br />
                  <br />
                  The seat is completely isolated from contact with the line
                  media, enhancing valve performance and extending service life.
                  Serrations on the seat retainer ring and body secure the seat
                  assembly in place regardless of disc position. The valve seals
                  to zero-leakage in both directions, and the seat adjusts
                  automatically to absorb wear and temperature changes. Seat
                  replacement is easy without disturbing the disc or stem.
                  <br />
                  <br />
                  The seat design ensures drop-tight sealing in both directions
                  and is bi-directional across low to high-pressure ranges. The
                  seat incorporates stainless steel wire winding with a U-shape
                  envelope for extended seat life. The wire provides flexibility
                  in both directions of flow.
                  <br />
                  <br />
                  Fire-safe design options are available for Tangent's
                  High-performance double offset valves in wafer, lug, and
                  flange configurations. The fire-safe design combines superior
                  performance and extended service life. During normal service,
                  both soft and metal seats ensure zero-leakage in full-rated
                  pressure and temperature conditions. In a fire scenario, the
                  soft seat may partially or fully degrade due to heat, allowing
                  the metal seat to maintain constant sealing. The fire-safe
                  packing arrangement uses three rings of graphite for superior
                  high-temperature sealing.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Specifications:</h2>
          <ul className="list-disc list-inside">
            <li>
              Design standards as per EN 593 or API 609 (Category B) as
              standard, with other standards available on request.
            </li>
            <li>Testing standards comply with API 598 and FCI 70-2.</li>
            <li>
              Certification includes EN10204 Type 3.1 and manufacturing under
              ISO 9001:2015 Quality Management System.
            </li>
            <li>
              Casting inspection follows MSS-SP-55 as standard, with other
              applicable standards available.
            </li>
            <li>
              Valve trims available with combinations of casting materials like
              WCB, CF8, CF8M, CF3M, GR. 4A-5A, NAB, Aluminum Alloys, etc., and
              seat materials including RTEF, PTFE, UHMWPE, METAL, FIRE SAFE.
            </li>
            <li>
              All valves are 100% factory tested (Hydro, Pneumatic) and
              inspected per standard protocols.
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          TECHNICAL DATA:{" "}
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <p className="font-semibold">
              <u>Model KHP W - Size: 2” (50 mm) to 36” (900 mm)</u>
            </p>
            <img
              src="\Butterfly valve\double\KHP-w.png"
              alt="Description for img 2"
              className=" object-cover rounded"
            />
          </div>
          <div className="text-center">
            <p className="font-semibold">
              <u>Model KHP L - Size: 2” (50 mm) to 36” (900 mm)</u>
            </p>
            <img
              src="\Butterfly valve\double\KHP_l.png"
              alt="Description for img 2"
              className=" object-cover rounded"
            />
          </div>
          <div className="text-center">
            <p className="font-semibold">
              <u>Model KHP F - Size: 2” (50 mm) to 36” (900 mm)</u>
            </p>
            <img
              src="\Butterfly valve\double\KHP-f.png"
              alt="Description for img 2"
              className=" object-cover rounded"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mt-12 mb-4 text-orange-800">
          Features and Benefits :
        </h3>
        <div className="overflow-x-auto mb-4">
          <ul className="list-disc list-inside">
            <li>
              Actuator/gearbox mounting flange is standardized according to ISO
              5211.
            </li>
            <li>
              Lugged body options are available with drilled and tapped (metric
              or imperial) configurations per ANSI 150# and 300# standards.
            </li>
            <li>
              Features a two-piece shaft design to enhance disc efficiency and
              increase the Cv value.
            </li>
            <li>
              Compatible with lever, gear, pneumatic, and electric actuators.
            </li>
            <li>Valve shape is indicative only.</li>
            <li>
              Q represents the disc chordal dimension at the valve face,
              ensuring disc clearance into the pipe or equipment.
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
