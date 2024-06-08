interface Asset {
    id: number;
    name: string;
    description: string;
    date: string;
}

export async function GET(req: Request) {
    return new Response(JSON.stringify(items));
}

export async function POST(req: Request) {
    const { query, type } = await req.json();
    return new Response(JSON.stringify(performSearch(query, type)));

}

const items: Asset[] = [
    {
        id: 1,
        name: 'Item Name',
        description: 'Short description of the item goes nicely here.',
        date: '06/27/2024',
    },
    {
        id: 2,
        name: 'Item Name',
        description: 'Short description of the item goes nicely here.',
        date: '08/27/2024',
    },
    {
        id: 3,
        name: 'Item Name',
        description: 'Short description of the item goes nicely here.',
        date: '06/27/2024',
    },
    {
        id: 4,
        name: 'Item Name',
        description: 'Short description of the item goes nicely here.',
        date: '08/27/2024',
    },
];

const mockedData: Record<string, Asset[]> = {
    "featured": items,
    "trending": items
}

function performSearch(query: string, type: string): Asset[] {
    var assets = mockedData[type.toLowerCase()];
    if (!assets || !assets.length) {
        return [];
    }
    if (!query.trim()) {
        return assets;
    }
    return assets.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
}
