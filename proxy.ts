import { NextResponse, type NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

/**
 * Next.js 16 proxy (formerly middleware). Cookie-presence checks only —
 * the authoritative session check happens in server layouts/actions.
 */
const PROTECTED = ["/dashboard", "/learn", "/review", "/practice", "/progress", "/settings", "/placement"];

export function proxy(request: NextRequest) {
  const hasSession = getSessionCookie(request, { cookiePrefix: "learnrussian" });
  const { pathname } = request.nextUrl;

  if (!hasSession && PROTECTED.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    const login = new URL("/login", request.url);
    login.searchParams.set("next", pathname);
    return NextResponse.redirect(login);
  }

  // Auth pages handle "already signed in" server-side (in their layout)
  // so a stale/invalid cookie can never cause a redirect loop.
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|audio-shtooka).*)"],
};
