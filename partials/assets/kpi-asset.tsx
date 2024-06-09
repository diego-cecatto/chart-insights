import InfoIcon from '@/components/icons/info';
import AssetBase from './asset-base';
import { Asset } from '@/database/assets/assets-database';
import ChartIcon from '@/components/icons/chart';
import TabsClient from '@/components/tabs/client/tabs-client';
import TabClient from '@/components/tabs/client/tab-client';

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
                    <div className="mt-8 pl-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((item, index) => (
                            <div className="hover:shadow-lg p-4 rounded flex items-stretch gap-4 w-full ">
                                <div className="rounded-lg bg-slate-100 w-32 flex items-center justify-center">
                                    <ChartIcon className="w-10" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">
                                        Item Name
                                    </h3>
                                    <p className="text-neutra mb-4">
                                        Short description of the item goes
                                        nicely
                                    </p>
                                    <p className="text-gray-400">06/07/2024</p>
                                </div>
                            </div>
                        ))}
                    </div>
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
