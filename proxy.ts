import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['fa', 'en'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};