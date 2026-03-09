"use client";

import { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { i18n } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";
import { type Locale } from "../../i18n-config";

export default function Header({ lang }: { lang: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const dict = use(getDictionary(lang as Locale));

  const languageNames: Record<string, string> = {
    en: "English",
    es: "Español",
    fr: "Français",
    nl: "Nederlands",
    hi: "हिन्दी",
    zh: "中文",
  };

  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const company = [
    { name: dict.navigation.about, path: `/${lang}/about` },
    { name: dict.navigation.leadership, path: `/${lang}/leadership` },
    { name: dict.navigation.careers, path: `/${lang}/careers` },
    { name: dict.navigation.contact, path: `/${lang}/contact` },
  ];

  const services = [
    { name: dict.home.services.items.web.title, path: `/${lang}/services#web` },
    { name: dict.home.services.items.mobile.title, path: `/${lang}/services#mobile` },
    { name: dict.home.services.items.desktop.title, path: `/${lang}/services#desktop` },
    { name: dict.home.services.items.security.title, path: `/${lang}/services#security` },
  ];

  const products = [
    { name: dict.home.dono.title, description: dict.home.dono.label, path: `/${lang}/products#dono` },
    { name: dict.home.shadow.title, description: dict.home.shadow.label, path: `/${lang}/products#shadow` },
  ];

  const support = [
    { name: dict.support.docs.title, path: `/${lang}/support/docs` },
    { name: dict.support.help.title, path: `/${lang}/support/help` },
    { name: dict.support.community.title, path: `/${lang}/support/community` },
    { name: dict.support.status.title, path: `/${lang}/support/status` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-4">
        <div className="backdrop-blur-xl bg-white/70 border border-black/10 rounded-3xl sm:rounded-full shadow-lg px-6 py-3">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href={`/${lang}`} className="flex items-center z-50">
              <Image src="/SALogo.svg" alt="Secure Authorities" width={150} height={32} className="h-6 sm:h-8 w-auto" priority />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Company Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-black/80 hover:text-black transition-colors outline-hidden cursor-pointer">
                  {dict.navigation.company}
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
                  {dict.navigation.services}
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
                  {dict.navigation.products}
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
                {/* Language Switcher */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="p-2 hover:bg-black/5 rounded-full transition-colors outline-hidden cursor-pointer">
                    <Globe className="w-4 h-4 text-black/60" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-black/5 p-2">
                    {i18n.locales.map((locale) => (
                      <DropdownMenuItem key={locale} asChild>
                        <Link
                          href={redirectedPathname(locale)}
                          className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                            lang === locale ? "bg-black/5 text-black font-bold" : "text-black/60 hover:text-black hover:bg-black/5"
                          }`}
                        >
                          {languageNames[locale] || locale.toUpperCase()}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  href={`/${lang}/signin`}
                  className="px-4 py-1.5 text-black/80 hover:text-black transition-colors text-sm font-medium"
                >
                  {dict.navigation.signIn}
                </Link>
                <Link
                  href={`/${lang}/signup`}
                  className="px-4 py-1.5 bg-[#1e4f8a] text-white rounded-full hover:bg-[#4b8ebe] transition-all text-sm font-medium"
                >
                  {dict.navigation.signUp}
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
                <div className="text-xs uppercase tracking-widest text-black/40 font-bold border-b border-black/5 pb-2">{dict.navigation.company}</div>
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
                <div className="text-xs uppercase tracking-widest text-black/40 font-bold border-b border-black/5 pb-2">{dict.navigation.services}</div>
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
                <div className="text-xs uppercase tracking-widest text-black/40 font-bold border-b border-black/5 pb-2">{dict.navigation.products}</div>
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

              <div className="flex flex-col gap-4">
                <div className="text-xs uppercase tracking-widest text-black/40 font-bold border-b border-black/5 pb-2">Language</div>
                <div className="grid grid-cols-3 gap-3">
                  {i18n.locales.map((locale) => (
                    <Link
                      key={locale}
                      href={redirectedPathname(locale)}
                      className={`px-3 py-2 text-sm rounded-xl text-center transition-colors ${
                        lang === locale 
                          ? "bg-[#1e4f8a] text-white font-bold" 
                          : "bg-[#f5f5f7] text-black/60 hover:text-black"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {languageNames[locale] || locale.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-black/5">
                <Link
                  href={`/${lang}/signup`}
                  className="px-6 py-4 bg-linear-to-r from-[#1e4f8a] to-[#4b8ebe] text-white rounded-2xl text-center font-bold shadow-xl hover:shadow-2xl transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {dict.navigation.signUp}
                </Link>
                <Link
                  href={`/${lang}/signin`}
                  className="px-6 py-4 bg-[#f5f5f7] text-black rounded-2xl text-center font-bold hover:bg-[#ebebe7] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {dict.navigation.signIn}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}