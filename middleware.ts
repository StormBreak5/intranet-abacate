
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { updateSession, verify } from './lib/auth'

export async function middleware(request: NextRequest) {
    const session = request.cookies.get('session')?.value
    const user = session ? await verify(session) : null

    if (request.nextUrl.pathname.startsWith('/admin')) {
        if (!user) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
        if ((user as any).role !== 'ADMIN') {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    if (request.nextUrl.pathname.startsWith('/login') && user) {
        return NextResponse.redirect(new URL('/admin/users', request.url))
    }

    return await updateSession(request) ?? NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*', '/login'],
}
