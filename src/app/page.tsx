"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { HoverEffect } from "@/components/ui/card-hover-effect";
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
  {
    name: "Butterfly Valve",
    image: "/butterfly_valve.jpg",
    description: "Ideal for on-off and throttling services.",
  },
  {
    name: "Ball Valve",
    image: "/ball_valve.jpg",
    description: "Excellent for high pressure and temperature applications.",
  },
  {
    name: "Gate Valve",
    image: "/gate_valve.jpg",
    description: "Perfect for fully open or fully closed service.",
  },
  {
    name: "Globe Valve",
    image: "/globe_valve.jpg",
    description: "Designed for regulating flow in a pipeline.",
  },
  {
    name: "Check Valve",
    image: "/check_valve.jpg",
    description: "Prevents backflow in piping systems.",
  },
  {
    name: "Plug Valve",
    image: "/plug_valve.jpg",
    description: "Suitable for slurry, viscous, and general applications.",
  },
];

const Contact = () => (
  <section id="contact" className="py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg md:text-xl mb-8">
        Get in touch with us for more information about our products and
        services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            className="mb-4"
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Your Email"
            className="mb-4"
          />
        </div>
        <div className="col-span-2">
          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            type="text"
            placeholder="Your Message"
            className="mb-4"
          />
        </div>
      </div>
      <Button>Send Message</Button>
    </div>
  </section>
);

export default function KanseiValvesUI() {
  const [activeLink, setActiveLink] = useState("Home");

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

      {/* Navigation */}
      <nav className="bg-orange-600 py-4 px-6  md:px-12 lg:px-24">
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

      {/* Main Content Area */}
      <main className="py-8 px-6 md:px-12 lg:px-24">
        {/* Hero Banner */}
        <div className="relative rounded-lg overflow-hidden mb-16">
          <img
            src="/hero-image-placeholder.jpg"
            alt="Industrial Valves"
            className="w-full h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-8 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to SMP Controls
            </h2>
            <p className="text-lg md:text-xl mb-6 max-w-lg">
              Your trusted partner for high-quality industrial valves and
              exceptional service
            </p>
            <ShimmerButton>Explore Our Products</ShimmerButton>
          </div>
        </div>

        {/* Product Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Product Range
          </h2>
          <HoverEffect
            items={productCategories.map((category) => ({
              title: category.name,
              description: category.description,
              image: category.image,
              link: "", // add link to each category if needed
            }))}
          />
        </section>

        {/* About Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            About Tangent Valves
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <img
                src="/about-us-image.jpg"
                alt="About Tangent Valves"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                At Tangent Valves, we are committed to delivering top-notch
                industrial valves and exceptional service to our clients
                worldwide. Our team of experienced professionals works
                tirelessly to ensure that our products meet the highest
                standards of quality and performance.
              </p>
              <p className="text-lg mb-4">
                With years of industry expertise and a passion for innovation,
                Tangent Valves is your trusted partner for all your industrial
                valve needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} Tangent Valves. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" target="_blank">
              <Facebook className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <Twitter className="h-6 w-6 text-gray-600 hover:text-blue-400 transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <Linkedin className="h-6 w-6 text-gray-600 hover:text-blue-800 transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
