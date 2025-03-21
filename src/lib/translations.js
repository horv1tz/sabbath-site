import i18n from 'sveltekit-i18n';

const config = ({
    loaders: [
        {
            locale: 'ru',
            key: 'main',
            loader: async () => (await import('../locales/ru.json')).default,
        },
        {
            locale: 'en',
            key: 'main',
            loader: async () => (await import('../locales/en.json')).default,
        }
    ],
});

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);

// Функция смены языка
export const setLocale = async (newLocale) => {
    locale.set(newLocale);
    await loadTranslations(newLocale, window.location.pathname);
};
