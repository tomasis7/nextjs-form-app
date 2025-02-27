import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Example middleware to log requests
  console.log(`Request to ${request.nextUrl.pathname}`);
  
  // Here you could add authentication checks
  // const session = request.cookies.get('session')?.value
  // if (!session && request.nextUrl.pathname.startsWith('/profile')) {
  //   return NextResponse.redirect(new URL('/form', request.url))
  // }

  return NextResponse.next();
}

export const config = {
  // Only run middleware on specific paths
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};