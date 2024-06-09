import AssetBase from './asset-base';
import { Asset } from '@/database/assets/assets-database';
import ChartIcon from '@/components/icons/chart';

export default async function DataVizDetails({ asset }: { asset: Asset }) {
    return (
        <AssetBase asset={asset}>
            <div className="mt-8 h-72 bg-gray-100 rounded mb-6"></div>
            <div className="mt-8 pl-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item, index) => (
                    <div className="hover:shadow-lg p-4 rounded flex items-stretch gap-4 w-full ">
                        <div className="rounded-lg bg-slate-100 w-32 flex items-center justify-center">
                            <ChartIcon className="w-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Item Name</h3>
                            <p className="text-neutra mb-4">
                                Short description of the item goes nicely
                            </p>
                            <p className="text-gray-400">06/07/2024</p>
                        </div>
                    </div>
                ))}
            </div>
        </AssetBase>
    );
}
