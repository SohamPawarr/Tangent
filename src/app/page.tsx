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
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { Textarea } from "@/components/ui/textarea";

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

function Contact() {
  const handleSendEmail = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=scspl.smp@gmail.com.com&su=Contact%20Us&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}&tf=1`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9e8d6]">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#8b3e2f]">Contact Us</h2>
        <p className="text-[#8b3e2f]">Get in touch with us for more information about our products and services.</p>
      </div>
      <div className="w-full max-w-3xl mt-8 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" className="border border-[#8b3e2f]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Your Email" className="border border-[#8b3e2f]" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Your Message" className="border border-[#8b3e2f] min-h-[100px]" />
        </div>
        <Button
          className="bg-[#d2691e] text-white hover:bg-[#a0522d]"
          onClick={handleSendEmail}
        >
          Send Us
        </Button>
      </div>
    </div>
  )
}

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

      {/* Main Content Area */}
      <main className="py-8 px-6 md:px-12 lg:px-24">
        {/* Hero Banner */}
        <div className="relative rounded-lg overflow-hidden mb-16">
          <img
            src="\hero-image-placeholder.jpg"
            alt="Industrial Valves"
            className="w-full h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-8 md:p-16">
            <TypingAnimation
              className="text-4xl md:text-5xl font-bold"
              text="Welcome to SMP Controls"
            />
            <GradualSpacing
              className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-white dark:text-white md:text-3xl md:leading-[5rem]"
              text="Your trusted partner for high-quality industrial valves and
              exceptional service"
            />
          </div>
        </div>
        {/* Product Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Product Range
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Card
                key={category.name}
                className="transition-transform hover:scale-105 bg-orange-200"
              >
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  {" "}
                  {/* Centering content */}
                  {/* Placeholder imgs */}
                  {category.name === "Butterfly Valve" && (
                    <img
                      src="Butterfly valve/butterfly_valve.jpg"
                      alt={category.name}
                      className="w-full h-full object-cover rounded"
                    />
                  )}
                  {category.name === "Ball Valve" && (
                    <img
                      src="/ball_valve.jpg"
                      alt={category.name}
                      className="w-full h-full object-cover rounded"
                    />
                  )}
                  {category.name === "Gate Valve" && (
                    <img
                      src="/gate_valve.jpg"
                      alt={category.name}
                      className="w-full h-full object-cover rounded"
                    />
                  )}
                  {category.name === "Globe Valve" && (
                    <img
                      src="/globe_valve.jpg"
                      alt={category.name}
                      className="w-full h-full object-cover rounded"
                    />
                  )}
                  {category.name === "Check Valve" && (
                    <img
                      src="/check_valve.jpg"
                      alt={category.name}
                      className="w-full h-full object-cover rounded"
                    />
                  )}
                  {category.name === "Plug Valve" && (
                    <img
                      src="/plug_valve.jpg"
                      alt={category.name}
                      className="w-full h-full object-cover rounded"
                    />
                  )}
                  {/* Learn More Links */}
                  {category.name === "Butterfly Valve" && (
                    <Link
                      href="/butterfly"
                      className="mt-4 w-full flex justify-center"
                    >
                      <ShimmerButton>Learn more</ShimmerButton>
                    </Link>
                  )}
                  {category.name === "Ball Valve" && (
                    <Link
                      href="/ball"
                      className="mt-4 w-full flex justify-center"
                    >
                      <ShimmerButton>Learn more</ShimmerButton>
                    </Link>
                  )}
                  {category.name === "Gate Valve" && (
                    <Link
                      href="/Gate"
                      className="mt-4 w-full flex justify-center"
                    >
                      <ShimmerButton>Learn more</ShimmerButton>
                    </Link>
                  )}
                  {category.name === "Globe Valve" && (
                    <Link
                      href="/Globe"
                      className="mt-4 w-full flex justify-center"
                    >
                      <ShimmerButton>Learn more</ShimmerButton>
                    </Link>
                  )}
                  {category.name === "Check Valve" && (
                    <Link
                      href="/Check"
                      className="mt-4 w-full flex justify-center"
                    >
                      <ShimmerButton>Learn more</ShimmerButton>
                    </Link>
                  )}
                  {category.name === "Plug Valve" && (
                    <Link
                      href="/Plug"
                      className="mt-4 w-full flex justify-center"
                    >
                      <ShimmerButton>Learn more</ShimmerButton>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            About SMP Valves
          </h2>
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
                    src="Butterfly valve/butterfly-valve-150-class.png"
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
                high-quality industrial valves. With over 13 years of
                experience, we provide innovative solutions for various
                industries worldwide.
              </p>
              <p className="text-lg mb-4">
                Our commitment to excellence and customer satisfaction sets us
                apart. Explore our range of products and discover why Tangent
                Valves is your reliable partner.
              </p>
            </div>
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section className="bg-orange-400 text-white py-12 px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose SMP Controls?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p>
                Rigorous testing and adherence to international standards ensure
                top-notch product quality.
              </p>
            </div>
            <div className="text-center">
              <div className="text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>
                Continuous research and development to provide cutting-edge
                valve solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p>
                Dedicated team of professionals to provide technical support and
                customer service.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Contact />
      <br></br>
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
              {/* {/* <p className="flex items-center mb-2">
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
