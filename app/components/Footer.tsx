import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          {/* Services */}
          <div>
            <h4 className="text-xs mb-4 text-black/90">Services</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services#web" className="text-black/60 hover:text-black transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services#mobile" className="text-black/60 hover:text-black transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services#desktop" className="text-black/60 hover:text-black transition-colors">
                  Desktop Development
                </Link>
              </li>
              <li>
                <Link href="/services#security" className="text-black/60 hover:text-black transition-colors">
                  Cyber Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs mb-4 text-black/90">Products</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/products#dono" className="text-black/60 hover:text-black transition-colors">
                  Dono
                </Link>
              </li>
              <li>
                <Link href="/products#shadow" className="text-black/60 hover:text-black transition-colors">
                  Shadow
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs mb-4 text-black/90">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="text-black/60 hover:text-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-black/60 hover:text-black transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-black/60 hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black/60 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs mb-4 text-black/90">Support</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/support/docs" className="text-black/60 hover:text-black transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/support/help" className="text-black/60 hover:text-black transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/support/community" className="text-black/60 hover:text-black transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/support/status" className="text-black/60 hover:text-black transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs mb-4 text-black/90">Legal</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/legal/privacy-policy" className="text-black/60 hover:text-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-black/60 hover:text-black transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/security" className="text-black/60 hover:text-black transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-black/50">
              © {new Date().getFullYear()} Secure Authorities. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-black/50">
              <span>Global Offices Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}