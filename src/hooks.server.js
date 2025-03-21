/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const defaultLang = 'en';
    const acceptLanguage = event.request.headers.get('accept-language');
    const lang = acceptLanguage ? acceptLanguage.split(',')[0].split('-')[0] : defaultLang;

    return await resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%lang%', lang),
    });
}
