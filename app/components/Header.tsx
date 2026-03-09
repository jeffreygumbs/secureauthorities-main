"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Leadership", path: "/leadership" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Website App Development", path: "/services#web" },
    { name: "Mobile App Development", path: "/services#mobile" },
    { name: "Desktop App Development", path: "/services#desktop" },
    { name: "Cyber Security", path: "/services#security" },
  ];

  const products = [
    { name: "Dono", description: "The All-in-One Super App", path: "/products#dono" },
    { name: "Shadow", description: "Advanced Threat Detection", path: "/products#shadow" },
  ];

  const support = [
    { name: "Documentation", path: "/support/docs" },
    { name: "Help Center", path: "/support/help" },
    { name: "Community", path: "/support/community" },
    { name: "Status", path: "/support/status" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-4">
        <div className="backdrop-blur-xl bg-white/70 border border-black/10 rounded-3xl sm:rounded-full shadow-lg px-6 py-3">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50">
              <Image src="/SALogo.svg" alt="Secure Authorities" width={150} height={32} className="h-6 sm:h-8 w-auto" priority />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Company Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-black/80 hover:text-black transition-colors outline-hidden cursor-pointer">
                  Company
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-black/5 p-2">
                  {company.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        href={item.path}
                        className="block px-3 py-2 hover:bg-black/5 transition-colors text-sm text-black/80 hover:text-black rounded-lg"
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-black/80 hover:text-black transition-colors outline-hidden">
                  Services
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-black/5 p-2">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <Link
                        href={service.path}
                        className="block px-3 py-2 hover:bg-black/5 transition-colors text-sm text-black/80 hover:text-black rounded-lg"
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-black/80 hover:text-black transition-colors outline-hidden">
                  Products
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-black/5 p-2">
                  {products.map((product) => (
                    <DropdownMenuItem key={product.name} asChild>
                      <Link
                        href={product.path}
                        className="block px-3 py-2.5 hover:bg-black/5 transition-colors rounded-lg"
                      >
                        <div className="text-sm text-black">{product.name}</div>
                        <div className="text-xs text-black/50 mt-0.5">
                          {product.description}
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Auth Buttons */}
              <div className="flex items-center gap-3">
                <Link
                  href="/signin"
                  className="px-4 py-1.5 text-black/80 hover:text-black transition-colors text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-1.5 bg-[#1e4f8a] text-white rounded-full hover:bg-[#4b8ebe] transition-all text-sm font-medium"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white/90 backdrop-blur-2xl z-40 md:hidden pt-24 px-8 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-10 pb-16">
              <div className="flex flex-col gap-4">
                <div className="text-xs uppercase tracking-widest text-black/40 font-bold border-b border-black/5 pb-2">Company</div>
                <div className="grid grid-cols-2 gap-4">
                  {company.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="text-base text-black/80 font-medium hover:text-[#1e4f8a] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="text-xs uppercase tracking-widest text-black/40 font-bold border-b border-black/5 pb-2">Services</div>
                <div className="flex flex-col gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.path}
                      className="text-lg text-black/80 font-medium hover:text-[#1e4f8a] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="text-xs uppercase tracking-widest text-black/40 font-bold border-b border-black/5 pb-2">Products</div>
                <div className="flex flex-col gap-6">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.path}
                      className="flex flex-col group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-lg text-black/80 font-bold group-hover:text-[#1e4f8a] transition-colors">{product.name}</span>
                      <span className="text-sm text-black/40">{product.description}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="text-xs uppercase tracking-widest text-black/40 font-bold border-b border-black/5 pb-2">Support</div>
                <div className="grid grid-cols-2 gap-4">
                  {support.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="text-base text-black/80 font-medium hover:text-[#1e4f8a] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-black/5">
                <Link
                  href="/signup"
                  className="px-6 py-4 bg-linear-to-r from-[#1e4f8a] to-[#4b8ebe] text-white rounded-2xl text-center font-bold shadow-xl hover:shadow-2xl transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started Free
                </Link>
                <Link
                  href="/signin"
                  className="px-6 py-4 bg-[#f5f5f7] text-black rounded-2xl text-center font-bold hover:bg-[#ebebe7] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In to Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}