import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export function middleware(request) {
	const path = request.nextUrl.pathname;
	const cookieList = cookies();

	const token = cookieList.get("token");

	if (!token) {
		if (path.startsWith("/easyservice") || path.startsWith("/dashboard") || path.startsWith("/register-startup")) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}
}
export const config = {
	matcher: ["/easyservice/:path*", "/dashboard/:path*", "/register-startup"],
};
