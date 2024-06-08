import { NextApiRequest, NextApiResponse } from 'next';

interface Asset {
    name: string;
    description: string;
    date: string;
}

declare type SearchRequestBody = {
    query: string;
    type: string
}

declare type SearchResponseData = {
    results: Asset[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { query, type }: SearchRequestBody = req.body;
        const results = performSearch(query, type);
        const response: SearchResponseData = { results };
        res.status(200).json(response);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

const items: Asset[] = [
    {
        name: 'Item Name',
        description: 'Short description of the item goes nicely here.',
        date: '06/27/2024',
    },
    {
        name: 'Item Name',
        description: 'Short description of the item goes nicely here.',
        date: '08/27/2024',
    },
    {
        name: 'Item Name',
        description: 'Short description of the item goes nicely here.',
        date: '06/27/2024',
    },
    {
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
