import mockedData from '../mocked-data.json';
export declare type Asset = {
    id: string;
    name: string;
    description: string;
    date: string;
    type: 'Featured' | 'KPI' | 'Layout' | 'Storyboard';
    trending: boolean;
    bookmarked: boolean;
};

export async function getByType(type: string) {
    const treending: Asset[] = [];
    const assets: Asset[] = [];
    for (const item of mockedData as Asset[]) {
        if (item.type === type) {
            if (item.trending) {
                treending.push(item);
                continue;
            }
            assets.push(item);
        }
    }
    return { treending, assets };
}

export async function getById(id: string) {
    return mockedData.filter((item) => item.id === id);
}

export async function findAll(query: string) {
    if (!query.trim()) {
        return [];
    }
    return mockedData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );
}

export async function findByType(query: string, type: string) {
    return (await findAll(query)).filter((item) => item.type === type);
}
