import { getDictionary } from "../../get-dictionary";
import { i18n, type Locale } from "../../i18n-config";
import NotFoundClient from "../components/NotFoundClient";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function NotFound({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const resolvedParams = await params;
  if (!resolvedParams) return null;
  const { lang } = resolvedParams;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#f5f5f7] to-white relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-linear-to-br from-[#1e4f8a]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-linear-to-br from-[#4b8ebe]/10 to-transparent rounded-full blur-3xl" />
      
      <NotFoundClient dict={dict} lang={lang} />
    </div>
  );
}