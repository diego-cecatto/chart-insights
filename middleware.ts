import { NextRequest, NextResponse } from 'next/server';
import { getById } from './database/assets/assets-database';

export async function middleware(request: NextRequest) {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();
    if (!id) {
        return NextResponse.redirect(new URL('/asset/request', request.url));
    }
    var item = await getById(id);
    if (!item) {
        return NextResponse.error();
    } else if (item.hasAccess === false) {
        return NextResponse.redirect(new URL('/asset/request', request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/asset/:id((?!request$).*)'],
};
