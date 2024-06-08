import mockedData from '@/database/mocked-data.json';
import { findByType } from '@/database/assets/assets-database';

export async function GET(req: Request) {
    return new Response(JSON.stringify(mockedData));
}

export async function POST(req: Request) {
    const { query, type } = await req.json();
    return new Response(JSON.stringify(await findByType(query, type)));
}
