import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from '../assets/en/translation.json';
import translationFR from '../assets/fr/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    }).then();

export default i18n;