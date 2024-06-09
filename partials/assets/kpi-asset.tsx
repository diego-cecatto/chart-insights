import AssetBase from './asset-base';
import { Asset } from '@/database/assets/assets-database';
import ChartIcon from '@/components/icons/chart';
import TabsClient from '@/components/tabs/client/tabs-client';
import TabClient from '@/components/tabs/client/tab-client';
import KPIAssetVisuals from './kpi-asset-visuals';

export default async function KPIAsset({ asset }: { asset: Asset }) {
    return (
        <AssetBase asset={asset}>
            <div className="h-72 bg-gray-100 rounded mb-6"></div>
            <TabsClient>
                <TabClient title="Questions">
                    <div className="mb-4 mt-8">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-100 p-4 rounded ">
                                <p className="font-semibold">Question 1</p>
                                <p>
                                    Short description of the item goes nicely
                                    here.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold">Question 2</p>
                                <p>
                                    Short description of the item goes nicely
                                    here.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold">Question 3</p>
                                <p>
                                    Short description of the item goes nicely
                                    here.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold">Question 4</p>
                                <p>
                                    Short description of the item goes nicely
                                    here.
                                </p>
                            </div>
                        </div>
                    </div>
                </TabClient>
                <TabClient title="Visuals">
                    <KPIAssetVisuals asset={asset} />
                </TabClient>
                <TabClient title="Affiliate Applicable">
                    <div className="mb-4 mt-8">
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((item, index) => (
                                <div className="p-4">
                                    <p className="font-semibold">
                                        Affliate {item}
                                    </p>
                                    <p>
                                        Short description of the item goes
                                        nicely here.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabClient>
            </TabsClient>
        </AssetBase>
    );
}
