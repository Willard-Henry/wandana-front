// // src/config/i18n.js

// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import * as Localization from 'expo-localization';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import en from '../locales/en.json';
// import twi from '../locales/twi.json';
// import ga from '../locales/ga.json';
// import ewe from '../locales/ewe.json';

// const resources = {
//   en: { translation: en },
//   twi: { translation: twi },
//   ga: { translation: ga },
//   ewe: { translation: ewe },
// };

// const LANGUAGE_KEY = 'appLanguage';

// const languageDetector = {
//   type: 'languageDetector',
//   async: true,
//   detect: async (callback) => {
//     try {
//       const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
//       if (savedLanguage) {
//         callback(savedLanguage);
//         return;
//       }

//       const bestLang = Localization.locale.split('-')[0]; // e.g. 'en-US' -> 'en'
//       const supported = ['en', 'twi', 'ga', 'ewe'];
//       callback(supported.includes(bestLang) ? bestLang : 'en');
//     } catch (error) {
//       console.error('Language detection error:', error);
//       callback('en');
//     }
//   },
//   init: () => {},
//   cacheUserLanguage: async (lng) => {
//     try {
//       await AsyncStorage.setItem(LANGUAGE_KEY, lng);
//     } catch (e) {
//       console.error('Error saving language:', e);
//     }
//   },
// };

// i18n
//   .use(languageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
//     compatibilityJSON: 'v3',
//     resources,
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;



// src/config/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from '../locales/en.json';
import twi from '../locales/twi.json';
import ga from '../locales/ga.json';
import ewe from '../locales/ewe.json';

const resources = {
    en: { translation: en },
    tw: { translation: twi },
    ga: { translation: ga },
    ewe: { translation: ewe },
};

const LANGUAGE_KEY = 'appLanguage';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en', // default language
        fallbackLng: 'en',
        resources,
        compatibilityJSON: 'v3',
        interpolation: {
            escapeValue: false,
        },
    });

// On app start, try to load saved language and set it manually
AsyncStorage.getItem(LANGUAGE_KEY).then((savedLang) => {
    if (savedLang && savedLang !== i18n.language) {
        i18n.changeLanguage(savedLang);
    }
});

export default i18n;
