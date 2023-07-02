import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import languages from '../lang/languages.index';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      ...(languages.reduce((prev, next) => {
        return {
          ...prev, [next.lang]: {
            translation: next.props.resource
          }
        }
      }, {}))
    }
  });
export default i18n;
