import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for those starting with /api, /_next, /_vercel
  // and files with an extension (e.g. favicon.ico, images).
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
