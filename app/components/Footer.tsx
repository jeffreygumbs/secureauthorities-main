"use client";

import Link from "next/link";
import { getDictionary } from "../../get-dictionary";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export default function Footer({ lang, dict }: { lang: string; dict: Dictionary }) {
  return (
    <footer className="bg-[#f5f5f7] border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Services */}
          <div>
            <h4 className="text-xs mb-4 text-black/90 font-bold uppercase tracking-wider">{dict.navigation.services}</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href={`/${lang}/services#web`} className="text-black/60 hover:text-black transition-colors">
                  {dict.services.items.web.title}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services#mobile`} className="text-black/60 hover:text-black transition-colors">
                  {dict.services.items.mobile.title}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services#desktop`} className="text-black/60 hover:text-black transition-colors">
                  {dict.services.items.desktop.title}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services#security`} className="text-black/60 hover:text-black transition-colors">
                  {dict.services.items.security.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs mb-4 text-black/90 font-bold uppercase tracking-wider">{dict.navigation.products}</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href={`/${lang}/products#dono`} className="text-black/60 hover:text-black transition-colors">
                  {dict.home.dono.title}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/products#shadow`} className="text-black/60 hover:text-black transition-colors">
                  {dict.home.shadow.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs mb-4 text-black/90 font-bold uppercase tracking-wider">{dict.navigation.company}</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href={`/${lang}/about`} className="text-black/60 hover:text-black transition-colors">
                  {dict.navigation.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/leadership`} className="text-black/60 hover:text-black transition-colors">
                  {dict.navigation.leadership}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/careers`} className="text-black/60 hover:text-black transition-colors">
                  {dict.navigation.careers}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-black/60 hover:text-black transition-colors">
                  {dict.navigation.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs mb-4 text-black/90 font-bold uppercase tracking-wider">{dict.navigation.support}</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href={`/${lang}/support/docs`} className="text-black/60 hover:text-black transition-colors">
                  {dict.support.docs.title}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/support/help`} className="text-black/60 hover:text-black transition-colors">
                  {dict.support.help.title}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/support/community`} className="text-black/60 hover:text-black transition-colors">
                  {dict.support.community.title}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/support/status`} className="text-black/60 hover:text-black transition-colors">
                  {dict.support.status.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs mb-4 text-black/90 font-bold uppercase tracking-wider">{dict.navigation.legal}</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href={`/${lang}/legal/privacy-policy`} className="text-black/60 hover:text-black transition-colors">
                  {dict.legal.privacy.title}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/legal/terms`} className="text-black/60 hover:text-black transition-colors">
                  {dict.legal.terms.title}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/legal/security`} className="text-black/60 hover:text-black transition-colors">
                  {dict.legal.security.title}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-black/50">
              © {new Date().getFullYear()} Secure Authorities. {dict.footer.rights}
            </p>
            <div className="flex gap-6 text-xs text-black/50">
              <span>{dict.footer.globalOffices}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}