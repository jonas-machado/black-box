import authConfig from "./auth.config";
import NextAuth from "next-auth";

import {
  publicRoutes,
  authRoutes,
  apiAuthPrefix,
  DEFAULT_LOGIN_REDIRECT,
} from "@/routes";

const { auth } = NextAuth(authConfig);
export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
  }
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/", nextUrl));
  }

  return;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
