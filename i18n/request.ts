import { getRequestConfig } from 'next-intl/server';

const locales = ['fa', 'en'];
const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale && locales.includes(locale) ? locale : defaultLocale;

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});