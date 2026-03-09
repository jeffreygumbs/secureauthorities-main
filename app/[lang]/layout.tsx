import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../globals.css";
import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Secure Authorities | Enterprise Cybersecurity & App Development",
  description: "Global enterprise cybersecurity and application development for organizations worldwide.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale: string) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);
  
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header lang={lang} dict={dict} />
        {children}
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
