import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
  .use(resourcesToBackend((language: string, namespace: string) =>
    import(`../locales/${language}/${namespace}.json`)
  ))
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'es'],
    fallbackLng: (code) => {
      // Spanish-first detection logic
      if (code && code.toLowerCase().startsWith('en')) {
        return ['en'];
      }
      return ['es']; // Default español para audiencia hispanohablante
    },
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // React already escapes
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

// Dev helper - exponer i18n en consola para testing
if (import.meta.env.DEV) {
  (window as any).i18n = i18n;
}

export default i18n;
