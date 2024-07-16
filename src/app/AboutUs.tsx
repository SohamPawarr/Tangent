// pages/AboutPage.tsx
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

export default function AboutPage() {
  const [activeLink, setActiveLink] = useState("Home");
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
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

        {/* Navigation */}
        <nav className="bg-orange-600 py-4 px-6 md:px-12 lg:px-24">
          <ul className="flex items-center justify-center space-x-12 text-white">
            {navigationLinks.map((link) => (
              <li key={typeof link === "string" ? link : link.name}>
                {typeof link === "string" ? (
                  <button
                    onClick={() => setActiveLink(link)}
                    className={`hover:text-blue-200 transition-colors ${
                      activeLink === link
                        ? "font-medium border-b-2 border-white"
                        : ""
                    }`}
                  >
                    {link}
                  </button>
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center hover:text-blue-200 transition-colors">
                      {link.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {link.submenu.map((item) => (
                        <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          About Tangent Valves
        </h1>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg">
              <Marquee pauseOnHover className="[--duration:20s]">
                <img
                  src="/ball-valve-150-class.png"
                  alt="Ball Valve 150 Class"
                  className="rounded-lg shadow-lg w-32 h-32 object-contain"
                />
                <img
                  src="/butterfly-valve-150-class.png"
                  alt="Butterfly Valve 150 Class"
                  className="rounded-lg shadow-lg w-32 h-32 object-contain"
                />
                <img
                  src="/flanged_end_gate_valve.jpg"
                  alt="Flanged End Gate Valve"
                  className="rounded-lg shadow-lg w-32 h-32 object-contain"
                />
                <img
                  src="/globe-valve-600-class.png"
                  alt="Globe Valve 600 Class"
                  className="rounded-lg shadow-lg w-32 h-32 object-contain"
                />
                <img
                  src="/forged-gate-valve.jpg"
                  alt="Forged Gate Valve"
                  className="rounded-lg shadow-lg w-32 h-32 object-contain"
                />
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Tangent Valves is a leading manufacturer and supplier of
              high-quality industrial valves. With over 13 years of experience,
              we provide innovative solutions for various industries worldwide.
            </p>
            <p className="text-lg mb-4">
              Our commitment to excellence and customer satisfaction sets us
              apart. Explore our range of products and discover why Tangent
              Valves is your reliable partner.
            </p>
            <p className="text-lg">
              We pride ourselves on our cutting-edge technology and exceptional
              service. Our valves are designed to meet the highest standards of
              quality and durability.
            </p>
            <p className="text-lg">
              In addition to our standard product line, we offer customized
              solutions to meet specific requirements. Our dedicated team is
              here to support you from initial consultation through to
              installation and maintenance.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
