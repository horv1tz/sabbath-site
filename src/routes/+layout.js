import { browser } from '$app/environment';
import { locale } from '$lib/translations.js';

export const prerender = true;

if (browser) {
    // Сначала проверяем cookies на наличие выбранного языка
    const cookieLang = document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const savedLang = cookieLang || localStorage.getItem('lang') || 'ru'; // если нет в cookies, проверяем localStorage, если нет - ставим дефолтный

    locale.set(savedLang);
}