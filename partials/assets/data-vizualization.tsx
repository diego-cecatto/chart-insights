import InfoIcon from '@/components/icons/info';
import AssetBase from './asset-base';
import { Asset } from '@/database/assets/assets-database';

export default async function DataVizDetails({ asset }: { asset: Asset }) {
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
            <div className="mb-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded ">
                        <p className="font-semibold">Question 1</p>
                        <p>Short description of the item goes nicely here.</p>
                    </div>
                    <div>
                        <p className="font-semibold">Question 2</p>
                        <p>Short description of the item goes nicely here.</p>
                    </div>
                    <div>
                        <p className="font-semibold">Question 3</p>
                        <p>Short description of the item goes nicely here.</p>
                    </div>
                    <div>
                        <p className="font-semibold">Question 4</p>
                        <p>Short description of the item goes nicely here.</p>
                    </div>
                </div>
            </div>
        </AssetBase>
    );
}
