import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALES, DEFAULT_LOCALE, isLocale } from "./lib/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const cookieLocale = request.cookies.get("locale")?.value;
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  // only the browser's primary (first, highest-priority) language should
  // decide the locale — a Russian browser's header often still lists
  // "en" further down (e.g. "ru-RU,ru;q=0.9,en-US;q=0.8"), which
  // .includes("en") would wrongly match
  const primaryLanguage = acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? "";

  const locale =
    cookieLocale && isLocale(cookieLocale)
      ? cookieLocale
      : primaryLanguage.startsWith("en")
        ? "en"
        : DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|images|videos|favicon.ico|.*\\..*).*)"],
};
