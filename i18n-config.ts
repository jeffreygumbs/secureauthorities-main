export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es", "fr", "nl", "hi", "zh"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
