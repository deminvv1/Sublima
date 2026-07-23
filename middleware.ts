import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALES, DEFAULT_LOCALE, isLocale } from "./lib/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const cookieLocale = request.cookies.get("locale")?.value;
  const acceptLanguage = request.headers.get("accept-language") ?? "";

  const locale =
    cookieLocale && isLocale(cookieLocale)
      ? cookieLocale
      : acceptLanguage.toLowerCase().includes("en")
        ? "en"
        : DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|images|videos|favicon.ico|.*\\..*).*)"],
};
