import LocalizedStrings from 'react-native-localize';
import { english } from './en';
import { italian } from './it';

export const strings = new LocalizedStrings({
    en: english,
    it: italian,
});


export const changeLanguage = (languageKey) => strings.setLanguage(languageKey);
