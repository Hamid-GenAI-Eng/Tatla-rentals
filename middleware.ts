import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "@/app/lib/auth";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // 1. Define protected routes
    const isProtectedRoute = path.startsWith("/admin");
    const isPublicRoute = path === "/admin/login";

    // 2. Decrypt the session from the cookie
    const cookie = request.cookies.get("session")?.value;
    const session = cookie ? await decrypt(cookie) : null;

    // 3. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !isPublicRoute && !session) {
        return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
    }

    // 4. Redirect to /admin if the user is authenticated and tries to access login
    if (isPublicRoute && session) {
        return NextResponse.redirect(new URL("/admin", request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api/auth/login (public login route)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        "/((?!api/auth/login|_next/static|_next/image|favicon.ico|public).*)",
    ],
};
