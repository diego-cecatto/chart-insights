import AssetItem from '@/components/assets/asset-item';
import { getByType, Asset } from '@/database/assets/assets-database';
import ChartIcon from '../icons/chart';
import LoadMoreButton from './load-more-button';

declare type AssetListProps = {
    type: string;
    search: string;
};
export default async function AssetList({ type, search }: AssetListProps) {
    let assets: Asset[] = [];
    let treending: Asset[] = [];
    try {
        const res = await getByType(type, search);
        assets = res.assets;
        treending = res.treending;
    } catch (error) {
        console.error('Error fetching search results:', error);
    }

    return (
        <>
            <section className="mt-12">
                <h2 className="text-2xl font-semibold">{type}</h2>
                <p className="mb-8 text-neutral">
                    Curated top picks from this week
                </p>
                <div className="pl-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {assets.map((item, index) => (
                        <AssetItem key={index} item={item} popular />
                    ))}
                </div>
                <LoadMoreButton asset={assets} />
            </section>
            <section className="mt-12">
                <h2 className="text-2xl font-semibold">Trending</h2>
                <p className="mb-8 text-neutral">Most popular by community</p>
                <div className="pl-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {treending.map((item, index) => (
                        <AssetItem key={index} item={item} />
                    ))}
                </div>
                <LoadMoreButton asset={assets} />
            </section>
        </>
    );
}
