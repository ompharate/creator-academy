import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes:['/'],
    ignoredRoutes:["/api/uploadthing"]
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};