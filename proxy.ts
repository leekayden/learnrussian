import { NextResponse, type NextRequest } from "next/server";

/**
 * Next.js 16 proxy (formerly middleware). Cookie-presence checks only —
 * the authoritative session check happens in server layouts/actions.
 */
const PROTECTED = ["/dashboard", "/learn", "/review", "/practice", "/progress", "/settings", "/placement"];
const AUTH_PAGES = ["/login", "/register"];

export function proxy(request: NextRequest) {
  const hasSessionCookie =
    request.cookies.has("better-auth.session_token") ||
    request.cookies.has("better-auth.session_data");

  const { pathname } = request.nextUrl;

  if (!hasSessionCookie && PROTECTED.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    const login = new URL("/login", request.url);
    login.searchParams.set("next", pathname);
    return NextResponse.redirect(login);
  }

  if (hasSessionCookie && AUTH_PAGES.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|audio-shtooka).*)"],
};
