import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get("token");

  const isAuthRoute = req.nextUrl.pathname.startsWith("/auth");

  // If the user is authenticated and tries to access an auth page, redirect to dashboard
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard/overview", req.url));
  }

  // If the user is NOT authenticated and tries to access ANY private page, redirect to login
  if (!isAuthenticated && !isAuthRoute) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff2?|ttf|otf|eot|css|js|mp4|mp3|json)$).*)",
  ],
};
