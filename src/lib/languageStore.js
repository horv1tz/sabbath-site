import { writable } from 'svelte/store';
import { setLocale } from './translations';

// Create a writable store for the current language
export const currentLang = writable('ru');

// Function to change the language
/**
 * @param {string} lang
 */
export function changeLanguage(lang) {
    if (typeof document !== 'undefined') {
        document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`; // 1 year
        localStorage.setItem('lang', lang);
    }
    setLocale(lang);
    currentLang.set(lang); // Update the reactive variable with the current language
}

// Function to initialize the language on component mount
export function initializeLanguage() {
    if (typeof localStorage !== 'undefined') {
        const savedLang = localStorage.getItem('lang') || document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        const defaultLang = savedLang || 'ru';  // Set the default language if not found

        setLocale(defaultLang);
        currentLang.set(defaultLang); // Set the default language in the reactive variable
    }
}
