import InfoIcon from '@/components/icons/info';
import AssetBase from './asset-base';
import { Asset } from '@/database/assets/assets-database';

export default async function LayoutAsset({ asset }: { asset: Asset }) {
    return (
        <AssetBase asset={asset}>
            <div className="grid grid-cols-4 gap-4 mb-4 text-center text-gray-600 divide-x">
                <div>
                    <p className="font-bold text-l">2485</p>
                    <p className="flex text-xs font-medium justify-center items-end">
                        Used <InfoIcon className="w-4 ml-2" />
                    </p>
                </div>
                <div>
                    <p className="font-bold text-l">Universal</p>
                    <p className="text-xs font-medium">Type</p>
                </div>
                <div>
                    <p className="font-bold text-l">6</p>
                    <p className="flex justify-center items-end text-xs font-medium">
                        Pages No.
                        <span>
                            <InfoIcon className="w-4 ml-2" />
                        </span>
                    </p>
                </div>
                <div>
                    <p className="font-bold text-l">{asset.date}</p>
                    <p className="text-xs font-medium">Last Updated</p>
                </div>
            </div>
            <div className="h-72 bg-gray-100 rounded mb-6"></div>
        </AssetBase>
    );
}
