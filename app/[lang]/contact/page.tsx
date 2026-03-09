import { Mail, Phone, MapPin } from "lucide-react";
import { getDictionary } from "../../../get-dictionary";
import { type Locale } from "../../../i18n-config";
import ContactForm from "../../components/ContactForm";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight text-black font-bold">
              {dict.contact.title}
            </h1>
            <p className="text-xl text-black/60 mb-12 leading-relaxed">
              {dict.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1e4f8a]/5 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#1e4f8a]" />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">{dict.contact.info.email}</h3>
                  <p className="text-black/60">support@secureauthorities.com</p>
                  <p className="text-black/60">sales@secureauthorities.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1e4f8a]/5 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#1e4f8a]" />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">{dict.contact.info.phone}</h3>
                  <p className="text-black/60">+1 (555) 123-4567</p>
                  <p className="text-black/60">+44 20 7946 0000</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1e4f8a]/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#1e4f8a]" />
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">{dict.contact.info.office}</h3>
                  <p className="text-black/60">London • New York • Singapore</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-[#1e4f8a]/10 to-[#4b8ebe]/10 rounded-[40px] blur-2xl -z-10" />
            <div className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-[32px] p-8 md:p-12 shadow-2xl">
              <ContactForm dict={dict} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
