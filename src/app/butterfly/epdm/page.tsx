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
          EPDM & EPDM + PTFE seated Centric design{" "}
        </h2>
        <div className="flex items-center justify-center ml-4">
          <img
            src="\Butterfly valve\epdm\Model K61 (2).jpg"
            alt="Description for img 1"
            className="w-50 h-auto object-cover rounded mr-4"
          />
          <img
            src="\Butterfly valve\epdm\Model K61.jpg"
            alt="Description for img 2"
            className="w-40 h-auto object-cover rounded"
          />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-orange-800">
          Model K61-W: Wafer type & Model K62-L: Lug type
        </h2>
        <div className="flex items-start">
          <div className="flex-1">
            <p className="font-semibold">
              <u>Applications</u>
            </p>
            <p className="ml-4">
              Ideal for applications in food and beverages, slurries, pneumatic
              conveying, dry bulk conveying, chemicals, paper stock, and mineral
              processing. This valve type excels where a tight seal and maximum
              flow capacity are essential.
            </p>
            <p className="font-semibold">
              <u>Suitable for on-off and control services</u>
            </p>
          </div>
          <div className="ml-4">
            <img
              src="\Butterfly valve\pfa\Model K51.png"
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
                <th className="border p-2">2" TO 20"</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-orange-100">
                <td className="border p-2">Wafer</td>
                <td className="border p-2">Centric Bi-directional</td>
                <td className="border p-2">PN10, PN16</td>
                <td className="border p-2">EPDM, PTFE + EPDM</td>
                <td className="border p-2">ANSI 150#, PN10, PN16, BS Table</td>
                <td className="border p-2">Yes</td>
              </tr>
              <tr>
                <td className="border p-2">Lug</td>
                <td className="border p-2">Centric Bi-directional</td>
                <td className="border p-2">PN10, PN16</td>
                <td className="border p-2">EPDM, PTFE + EPDM</td>
                <td className="border p-2">ANSI 150#, PN10, PN16, BS Table</td>
                <td className="border p-2">Yes</td>
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
                  Tangent EPDM and PTFE Centric Bi-directional Butterfly valves
                  are designed to ensure bubble-tight shut-off in both
                  directions and maximize flow area.
                  <br />
                  <strong>
                    A major advantage of Tangent products is their international
                    compatibility.
                  </strong>
                  <br />
                  <br />
                  The exclusive design features a two-piece body with a
                  one-piece wafer-thin disc stem, minimizing flow obstruction.
                  Body locating holes facilitate easy placement and perfect
                  centering of the valve between flanges.
                  <br />
                  <br />
                  A rounded and buffed disc edge provides full concentric
                  sealing with lower torque, extending seat life.
                  <br />
                  <br />
                  Tangent's primary stem sealing is achieved by preinstalled
                  contact between the seat surface and rounded disc hub area,
                  surpassing the valve's pressure rating and preventing leakage
                  through the stem to the atmosphere.
                  <br />
                  <br />
                  An integrated 'O' ring on the seat surface ensures flange
                  sealing, eliminating the need for additional gaskets.
                  <br />
                  <br />
                  The seat is fully field-replaceable and isolated from line
                  media, ensuring superior valve performance and extended
                  service life. The seat design ensures drop-tight sealing in
                  both directions across a wide pressure range.
                  <br />
                  <br />
                  The split body design facilitates easy maintenance. This
                  product is not recommended for dead-end services.
                  <br />
                  <br />
                  This type of valve can be installed in vertical, horizontal,
                  or intermediate pipeline orientations.
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
              <u>Model K51 W - Size: 2” (50 mm) to 12” (300 mm)</u>
            </p>
            <img
              src="\Butterfly valve\pfa\k51.jpg"
              alt="Description for img 2"
              className=" object-cover rounded"
            />
          </div>
          <div className="text-center">
            <p className="font-semibold">
              <u>Model K52 L - Size: 2” (50 mm) to 12” (300 mm)</u>
            </p>
            <img
              src="\Butterfly valve\pfa\k52.jpg"
              alt="Description for img 2"
              className=" object-cover rounded"
            />
          </div>
          <div className="text-center">
            <p className="font-semibold">
              <u>Model K53 F - Size: 14” (350 mm) to 16” (400 mm)</u>
            </p>
            <img
              src="\Butterfly valve\pfa\k53.jpg"
              alt="Description for img 2"
              className=" object-cover rounded"
            />
          </div>
        </div>
        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          Dimensions(Wafer & Lugged)
        </h3>
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
              <tr className="bg-orange-100">
                <td className="border p-2">50</td>
                <td className="border p-2">14.28</td>
                <td className="border p-2">52</td>
                <td className="border p-2">105</td>
                <td className="border p-2">141</td>
                <td className="border p-2">41</td>
                <td className="border p-2">102</td>
                <td className="border p-2">32</td>
                <td className="border p-2">70</td>
                <td className="border p-2">32</td>
              </tr>
              <tr>
                <td className="border p-2">65</td>
                <td className="border p-2">14.28</td>
                <td className="border p-2">65</td>
                <td className="border p-2">117</td>
                <td className="border p-2">151</td>
                <td className="border p-2">44</td>
                <td className="border p-2">102</td>
                <td className="border p-2">32</td>
                <td className="border p-2">76</td>
                <td className="border p-2">48</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">80</td>
                <td className="border p-2">14.28</td>
                <td className="border p-2">78</td>
                <td className="border p-2">130</td>
                <td className="border p-2">160</td>
                <td className="border p-2">44</td>
                <td className="border p-2">102</td>
                <td className="border p-2">32</td>
                <td className="border p-2">88</td>
                <td className="border p-2">65</td>
              </tr>
              <tr>
                <td className="border p-2">100</td>
                <td className="border p-2">15.9</td>
                <td className="border p-2">103</td>
                <td className="border p-2">162</td>
                <td className="border p-2">177</td>
                <td className="border p-2">51</td>
                <td className="border p-2">102</td>
                <td className="border p-2">32</td>
                <td className="border p-2">102</td>
                <td className="border p-2">90</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">125</td>
                <td className="border p-2">19.05</td>
                <td className="border p-2">129</td>
                <td className="border p-2">187</td>
                <td className="border p-2">190</td>
                <td className="border p-2">54</td>
                <td className="border p-2">120</td>
                <td className="border p-2">32</td>
                <td className="border p-2">119</td>
                <td className="border p-2">118</td>
              </tr>
              <tr>
                <td className="border p-2">150</td>
                <td className="border p-2">19.05</td>
                <td className="border p-2">148</td>
                <td className="border p-2">216</td>
                <td className="border p-2">204</td>
                <td className="border p-2">54</td>
                <td className="border p-2">120</td>
                <td className="border p-2">32</td>
                <td className="border p-2">133</td>
                <td className="border p-2">138</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">200</td>
                <td className="border p-2">22.25</td>
                <td className="border p-2">198</td>
                <td className="border p-2">271</td>
                <td className="border p-2">242</td>
                <td className="border p-2">64</td>
                <td className="border p-2">152</td>
                <td className="border p-2">32</td>
                <td className="border p-2">170</td>
                <td className="border p-2">188</td>
              </tr>
              <tr>
                <td className="border p-2">250</td>
                <td className="border p-2">28.58</td>
                <td className="border p-2">249</td>
                <td className="border p-2">330</td>
                <td className="border p-2">271</td>
                <td className="border p-2">64</td>
                <td className="border p-2">152</td>
                <td className="border p-2">51</td>
                <td className="border p-2">210</td>
                <td className="border p-2">241</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">300</td>
                <td className="border p-2">28.58</td>
                <td className="border p-2">300</td>
                <td className="border p-2">375</td>
                <td className="border p-2">313</td>
                <td className="border p-2">76</td>
                <td className="border p-2">152</td>
                <td className="border p-2">51</td>
                <td className="border p-2">238</td>
                <td className="border p-2">291</td>
              </tr>
              <tr>
                <td className="border p-2">350</td>
                <td className="border p-2">28.58</td>
                <td className="border p-2">339</td>
                <td className="border p-2">429</td>
                <td className="border p-2">304</td>
                <td className="border p-2">76</td>
                <td className="border p-2">152</td>
                <td className="border p-2">76</td>
                <td className="border p-2">248</td>
                <td className="border p-2">331</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">400</td>
                <td className="border p-2">41.28</td>
                <td className="border p-2">390</td>
                <td className="border p-2">489</td>
                <td className="border p-2">337</td>
                <td className="border p-2">102</td>
                <td className="border p-2">152</td>
                <td className="border p-2">69</td>
                <td className="border p-2">279</td>
                <td className="border p-2">377</td>
              </tr>
              <tr>
                <td className="border p-2">450</td>
                <td className="border p-2">47.64</td>
                <td className="border p-2">441</td>
                <td className="border p-2">546</td>
                <td className="border p-2">369</td>
                <td className="border p-2">108</td>
                <td className="border p-2">203</td>
                <td className="border p-2">108</td>
                <td className="border p-2">314</td>
                <td className="border p-2">428</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">500</td>
                <td className="border p-2">54</td>
                <td className="border p-2">491</td>
                <td className="border p-2">603</td>
                <td className="border p-2">402</td>
                <td className="border p-2">127</td>
                <td className="border p-2">203</td>
                <td className="border p-2">108</td>
                <td className="border p-2">349</td>
                <td className="border p-2">475</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-orange-800 text-white">
                <th className="border p-2">Valve Size</th>
                <th className="border p-2">PCD</th>
                <th className="border p-2">No. of Holes</th>
                <th className="border p-2">Hole Dia</th>
                <th className="border p-2">Wafer (kg)</th>
                <th className="border p-2">Lugged (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-orange-100">
                <td className="border p-2">50</td>
                <td className="border p-2">83</td>
                <td className="border p-2">4</td>
                <td className="border p-2">11</td>
                <td className="border p-2">2.8</td>
                <td className="border p-2">3.1</td>
              </tr>
              <tr>
                <td className="border p-2">65</td>
                <td className="border p-2">83</td>
                <td className="border p-2">4</td>
                <td className="border p-2">11</td>
                <td className="border p-2">3.5</td>
                <td className="border p-2">4.5</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">80</td>
                <td className="border p-2">83</td>
                <td className="border p-2">4</td>
                <td className="border p-2">11</td>
                <td className="border p-2">4.3</td>
                <td className="border p-2">4.6</td>
              </tr>
              <tr>
                <td className="border p-2">100</td>
                <td className="border p-2">83</td>
                <td className="border p-2">4</td>
                <td className="border p-2">11</td>
                <td className="border p-2">5.2</td>
                <td className="border p-2">7.5</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">125</td>
                <td className="border p-2">83</td>
                <td className="border p-2">4</td>
                <td className="border p-2">11</td>
                <td className="border p-2">7</td>
                <td className="border p-2">10.1</td>
              </tr>
              <tr>
                <td className="border p-2">150</td>
                <td className="border p-2">83</td>
                <td className="border p-2">4</td>
                <td className="border p-2">11</td>
                <td className="border p-2">8</td>
                <td className="border p-2">11</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">200</td>
                <td className="border p-2">125</td>
                <td className="border p-2">4</td>
                <td className="border p-2">14</td>
                <td className="border p-2">46</td>
                <td className="border p-2">3.5</td>
              </tr>
              <tr>
                <td className="border p-2">250</td>
                <td className="border p-2">127</td>
                <td className="border p-2">4</td>
                <td className="border p-2">14</td>
                <td className="border p-2">20</td>
                <td className="border p-2">29.2</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">300</td>
                <td className="border p-2">127</td>
                <td className="border p-2">4</td>
                <td className="border p-2">14</td>
                <td className="border p-2">35.3</td>
                <td className="border p-2">49.1</td>
              </tr>
              <tr>
                <td className="border p-2">350</td>
                <td className="border p-2">127</td>
                <td className="border p-2">4</td>
                <td className="border p-2">14</td>
                <td className="border p-2">48</td>
                <td className="border p-2">65</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">400</td>
                <td className="border p-2">127</td>
                <td className="border p-2">4</td>
                <td className="border p-2">14</td>
                <td className="border p-2">81.9</td>
                <td className="border p-2">107.5</td>
              </tr>
              <tr>
                <td className="border p-2">450</td>
                <td className="border p-2">165</td>
                <td className="border p-2">4</td>
                <td className="border p-2">21</td>
                <td className="border p-2">101.1</td>
                <td className="border p-2">118.2</td>
              </tr>
              <tr className="bg-orange-100">
                <td className="border p-2">500</td>
                <td className="border p-2">165</td>
                <td className="border p-2">4</td>
                <td className="border p-2">21</td>
                <td className="border p-2">142.5</td>
                <td className="border p-2">167</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>All dimensions are in mm.</p>
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
