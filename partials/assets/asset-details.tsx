import { getById } from '@/database/assets/assets-database';
import DataVizDetails from './data-vizualization';
import StoryboardAsset from './storyboard-asset';
import KPIAsset from './kpi-asset';
import LayoutAsset from './layout-asset';

export default async function AssetDetails({ id }: { id: string }) {
    const asset = await getById(id);
    if (asset.type === 'Featured') {
        return <KPIAsset asset={asset} />;
    } else if (asset.type === 'StoryBoards') {
        return <StoryboardAsset asset={asset} />;
    } else if (asset.type === 'KPI') {
        return <KPIAsset asset={asset} />;
    } else if (asset.type === 'Layout') {
        return <LayoutAsset asset={asset} />;
    } else {
        return <DataVizDetails asset={asset} />;
    }
}
