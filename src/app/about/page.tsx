// pages/AboutPage.tsx
"use client";
import TypingAnimation from "@/components/magicui/typing-animation";
import Marquee from "@/components/magicui/marquee";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WordPullUp from "@/components/magicui/word-pull-up";
import { FlipWords } from "@/components/ui/flip-words";
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
import { WobbleCard } from "@/components/ui/wobble-card";
import Link from "next/link";

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

const words = [
  "trustworthy",
  "reliable",
  "innovative",
  "efficient",
  "sustainable",
  "advanced",
  "precise",
  "robust",
  "durable",
  "safe",
  "professional",
  "cutting-edge",
  "exceptional",
  "versatile",
  "high-quality",
  "better",
  "cute",
  "beautiful",
  "modern",
];

export default function AboutPage() {
  const [activeLink, setActiveLink] = useState<string>("Home");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
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

        {/* Navigation */}
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
                      ButterFly Valve
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
                    {/* <Link
                    href="/butterfly"
                    className="flex items-center hover:text-blue-200 transition-colors"
                  >
                    Plug Valve
                  </Link> */}
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
      </div>

      <div className="container mx-auto p-8">
        <div className="flex items-center space-x-4 mb-8">
          <WordPullUp
            className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-4xl md:leading-[5rem]"
            words="About Us - "
          />
          <FlipWords
            className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-4xl md:leading-[5rem]"
            words={words}
          />
        </div>

        {/* Card 1 */}
        <div className="flex items-center space-x-4">
          <WobbleCard className="bg-white dark:bg-background shadow-lg flex-1">
            <CardHeader>
              <CardTitle>Our Promise and Commitments</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-lg">
                <li>
                  We promise to meet customer requirements by using our
                  collective wide network, resources, and experiences.
                </li>
                <li>
                  We promise to deliver the best products and services to
                  customers with full integrity and dedication.
                </li>
                <li>
                  We promise to educate our suppliers and employees to ensure
                  customer-required quality.
                </li>
              </ul>
            </CardContent>
          </WobbleCard>
          <img
            src="\trust_image.png"
            alt="Our Promise"
            className="w-60 h-65 object-cover rounded" // Increased size
          />
        </div>
        <br></br>
        {/* Card 2 */}
        <div className="flex items-center space-x-4">
          <WobbleCard className="bg-white dark:bg-background shadow-lg flex-1">
            <CardHeader>
              <CardTitle>Our Quality Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-lg">
                <li>
                  Maintain a high standard of quality and consistency as per
                  customer requirements.
                </li>
                <li>
                  Comply with codes, standards, customer specifications,
                  statutory and regulatory requirements as applicable to our
                  products.
                </li>
                <li>
                  Continually improve the effectiveness of quality systems to
                  add value to our products.
                </li>
              </ul>
            </CardContent>
          </WobbleCard>
          <img
            src="/industry.png"
            alt="Quality Policy"
            className="w-60 h-65 object-cover rounded" // Increased size
          />
        </div>
        <br></br>
        {/* Card 3 */}
        <div className="flex items-center space-x-4">
          <WobbleCard className="bg-white dark:bg-background shadow-lg flex-1">
            <CardHeader>
              <CardTitle>Core Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-lg">
                <li>
                  Customer first integrity, safety, quality, cost, delivery, and
                  service (ISQCDS).
                </li>
                <li>
                  Accountability, innovation, performance, and teamwork (AIPT).
                </li>
                <li>Society and environment.</li>
                <li>Employee talent and performance.</li>
              </ul>
            </CardContent>
          </WobbleCard>
          <img
            src="/core_values.jpg"
            alt="Core Values"
            className="w-60 h-65 object-cover rounded" // Increased size
          />
        </div>
        <br></br>
        <footer className="bg-orange-400 text-white py-12 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SMP Controls</h3>
              <p className="text-sm mb-4">
                Leading manufacturer of high-quality industrial valves for
                various applications.
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
                  <a
                    href="/"
                    className="hover:text-orange-400 transition-colors"
                  >
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
                  <a
                    href="#"
                    className="hover:text-[#E65100] transition-colors"
                  >
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
    </>
  );
}
