
"use client";

import { useState } from 'react';
import {
  Button,

} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import ShimmerButton from '@/components/magicui/shimmer-button';

const navigationLinks = [
  "Home",
  "About Us",
  { name: "Products", submenu: ["Butterfly Valve", "Ball Valve", "Gate Valve", "Globe Valve", "Check Valve", "Plug Valve"] },
  "Quality",
  "Clientele",
  "Infrastructure",
  "Career",
  "Contact",
];

const productCategories = [
  { name: "Butterfly Valve", description: "Ideal for on-off and throttling services." },
  { name: "Ball Valve", description: "Excellent for high pressure and temperature applications." },
  { name: "Gate Valve", description: "Perfect for fully open or fully closed service." },
  { name: "Globe Valve", description: "Designed for regulating flow in a pipeline." },
  { name: "Check Valve", description: "Prevents backflow in piping systems." },
  { name: "Plug Valve", description: "Suitable for slurry, viscous, and general applications." },
];
function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg md:text-xl mb-8">Get in touch with us for more information about our products and services.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="Your Name" className="mb-4" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your Email" className="mb-4" />
          </div>
          <div className="col-span-2">
            <Label htmlFor="message">Message</Label>
            <Input id="message" type="text" placeholder="Your Message" className="mb-4" />
          </div>
        </div>
        <Button className="">Send Message</Button>
      </div>
    </section>
  );
}
export default function KanseiValvesUI() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-gray-100 py-3 px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/pawarlogo.svg" alt="Kansei Valves Logo" className="h-10 mr-2" />
          
          <h1 className="text-black text-3xl font-bold">
            Tangent</h1>
           


        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-orange-500" />
            <span className="text-sm">+91-22-25826629</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-orange-500" />
            <span className="text-sm">sales@kanseivalves.com</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-orange-600 py-4 px-6  md:px-12 lg:px-24">
        <ul className="flex items-center  justify-center space-x-12 text-white">
          {navigationLinks.map((link) => (
            <li key={typeof link === 'string' ? link : link.name}>
              {typeof link === 'string' ? (
                <button
                  onClick={() => setActiveLink(link)}
                  className={`hover:text-blue-200 transition-colors ${activeLink === link ? "font-medium border-b-2 border-white" : ""
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
          <img src="/hero-image-placeholder.jpg" alt="Industrial Valves" className="w-full h-[500px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-8 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to SMP Controls</h2>
            <p className="text-lg md:text-xl mb-6 max-w-lg">Your trusted partner for high-quality industrial valves and exceptional service</p>
            <ShimmerButton>Explore Our Products</ShimmerButton>
          </div>
        </div>

        {/* Product Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Product Range</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Card key={category.name} className="transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={`/product-${category.name.toLowerCase().replace(' ', '-')}.jpg`} alt={category.name} className="w-full h-48 object-cover mb-4 rounded" />
                  <p className="text-gray-600">{category.description}</p>
                  <Button className="mt-4 w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">About Kansei Valves</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <img src="/about-us-image.jpg" alt="About Kansei Valves" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Kansei Valves is a leading manufacturer and supplier of high-quality industrial valves. With over 20 years of experience, we provide innovative solutions for various industries including oil & gas, petrochemical, power generation, and water treatment.
              </p>
              <p className="text-lg mb-4">
                Our commitment to quality, reliability, and customer satisfaction has made us a trusted partner for businesses worldwide.
              </p>
              <Button className=" text-white font-bold py-3 px-6 rounded-full transition-colors">
                Learn More About Us
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16 bg-gray-100 py-12 px-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose SMP Controls?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className=" text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p>Rigorous testing and adherence to international standards ensure top-notch product quality.</p>
            </div>
            <div className="text-center">
              <div className=" text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p>Continuous research and development to provide cutting-edge valve solutions.</p>
            </div>
            <div className="text-center">
              <div className=" text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p>Dedicated team of professionals to provide technical support and customer service.</p>
            </div>
          </div>
        </section>
      </main>
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SMP Controls</h3>
            <p className="text-sm mb-4">
              Leading manufacturer of high-quality industrial valves for various applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-orange-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-orange-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-orange-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Quality</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
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
                sales@kanseivalves.com
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with our latest products and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Enter your email" className="flex-grow py-2 px-4 rounded-l-md text-gray-800" />
              <Button className="bg-orange-500 hover:bg-orange-600 py-2 px-4 rounded-r-md transition-colors">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2023 Kansei Valves. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
