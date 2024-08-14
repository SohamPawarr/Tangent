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
const spanValue: string = "2";
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
      {/* Categories and Types Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-orange-800">
          Categories and Types
        </h2>

        <div className="space-y-4">
          <Link
            href="ball/k1_ball"
            className="flex items-center hover:text-orange-600 transition-colors"
          >
            <span className="font-semibold">K1 :</span> One Piece, Flanged End
          </Link>

          <Link
            href="ball/k2_ball"
            className="flex items-center hover:text-orange-600 transition-colors"
          >
            <span className="font-semibold">K2 :</span> One/Two Piece, Flanged
            End
          </Link>

          <Link
            href="ball/k3_ball"
            className="flex items-center hover:text-orange-600 transition-colors"
          >
            <span className="font-semibold">K3 :</span> Three Piece With Locking
            Device
            <br />
            <span className="ml-4">Screwed / Socket Weld / Flanged</span>
          </Link>

          <Link
            href="ball/k4_ball"
            className="flex items-center hover:text-orange-600 transition-colors"
          >
            <span className="font-semibold">K4 :</span> One Piece, Screwed End
          </Link>

          <Link
            href="ball/k5_ball"
            className="flex items-center hover:text-orange-600 transition-colors"
          >
            <span className="font-semibold">K5 :</span> Three Piece, Screwed /
            Socket Weld
          </Link>

          <Link
            href="ball/k6_ball"
            className="flex items-center hover:text-orange-600 transition-colors"
          >
            <span className="font-semibold">K6 :</span> Three Piece, Flanged End
          </Link>

          <Link
            href="ball/k7_ball"
            className="flex items-center hover:text-orange-600 transition-colors"
          >
            <span className="font-semibold">K7 :</span> Two Piece, Flanged End
          </Link>

          <Link
            href="ball/kms_ball"
            className="flex items-center hover:text-orange-600 transition-colors"
          >
            <span className="font-semibold">KMS :</span> Two Piece Metal Seat
            Flanged End
          </Link>
        </div>
      </section>
      {/* Range & Features Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-orange-800">
          Range & Features
        </h2>

        <div className="space-y-4">
          <div>
            <p className="font-semibold text-orange-600">
              • Standard ball valves-
            </p>
            <p className="ml-4">
              <u>Reduced bore</u>: Single piece, Three piece
            </p>
            <p className="ml-4">
              <u>Full bore</u> : Single piece, Two piece, Three piece
            </p>
          </div>
          <div>
            <p className="font-semibold text-orange-600">
              • LOTO features ball valves -
            </p>
            <p className="ml-4">
              <u>Full bore</u>: Three piece
            </p>
          </div>
          <div>
            <p className="font-semibold text-orange-600">
              • Metal seated ball valves -
            </p>
            <p className="ml-4">
              <u>Full bore</u> : Two piece
            </p>
          </div>
          <div>
            <p className="font-semibold text-orange-600">
              • Trunnion mounted ball valves -
            </p>
            <p className="ml-4">
              <u>Reduced and Full bore</u> : Two piece
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-4 text-orange-800">
          Ball Valve Range and Features - Soft seated / Metal seated
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-orange-600 text-white">
                <th className="border p-2">TYPE</th>
                <th className="border p-2">END CONNECTION</th>
                <th className="border p-2">PORT</th>
                <th className="border p-2">SEAT</th>
                <th className="border p-2">ASME CLASS</th>
                <th className="border p-2">1/2"</th>
                <th className="border p-2">3/4"</th>
                <th className="border p-2">1"</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2" rowSpan={Number(spanValue)}>
                  Single Piece
                </td>
                <td className="border p-2">Flanged</td>
                <td className="border p-2">Full/Reduced</td>
                <td className="border p-2">Soft</td>
                <td className="border p-2">150/300</td>
                <td className="border p-2">✓</td>
                <td className="border p-2">✓</td>
                <td className="border p-2">✓</td>
              </tr>
              <tr>
                <td className="border p-2">Screwed</td>
                <td className="border p-2">Full</td>
                <td className="border p-2">Soft</td>
                <td className="border p-2">150/300</td>
                <td className="border p-2">✓</td>
                <td className="border p-2">✓</td>
                <td className="border p-2">✓</td>
              </tr>
              <tr>
                <td className="border p-2" rowSpan={Number(spanValue)}>
                  Two Piece
                </td>
                <td className="border p-2">Flanged</td>
                <td className="border p-2">Full</td>
                <td className="border p-2">Soft</td>
                <td className="border p-2">150/300</td>
                <td className="border p-2">✓</td>
                <td className="border p-2">✓</td>
                <td className="border p-2">✓</td>
              </tr>
              <tr>
                <td className="border p-2">Flanged</td>
                <td className="border p-2">Full</td>
                <td className="border p-2">Metal</td>
                <td className="border p-2">150/300</td>
                <td className="border p-2">✓</td>
                <td className="border p-2">✓</td>
                <td className="border p-2">✓</td>
              </tr>
              <tr>
                <td className="border p-2" rowSpan={Number(spanValue)}>
                  Three Piece
                </td>
                <td className="border p-2">Flanged</td>
                <td className="border p-2">Full</td>
                <td className="border p-2">Soft</td>
                <td className="border p-2">150/300</td>
                <td className="border p-2">✓</td>
                <td className="border p-2">✓</td>
                <td className="border p-2">✓</td>
              </tr>
              <tr>
                <td className="border p-2">Screwed/Socket Weld</td>
                <td className="border p-2">Full/Reduced</td>
                <td className="border p-2">Soft</td>
                <td className="border p-2">150/300/600/800</td>
                <td className="border p-2">✓</td>
                <td className="border p-2">✓</td>
                <td className="border p-2">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
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
