import InfoIcon from '@/components/icons/info';
import StoryBoardIcon from '@/components/icons/storyboard';
import LayoutModal from '@/components/modal/layout-modal';

declare type AssetProps = {
    params: {
        id: string;
    };
};
export default function Asset({ params: { id } }: AssetProps) {
    return (
        <div className="p-4">
            <div className="text-center mb-4">
                <div className="flex items-center justify-center mb-6">
                    <span className="rounded-lg bg-slate-100 w-16 h-16 flex items-center justify-center">
                        <StoryBoardIcon className="w-12" />
                    </span>
                </div>
                <h2 className="text-2xl font-semibold flex items-center h-50 justify-center">
                    <span className="mr-2 text-4xl">INTES</span>
                    <span className="bg-slate-100 text-gray-700 text-xs rounded px-2 py-1 ">
                        Layout
                    </span>
                </h2>
                <p className="text-gray-500 mb-8">
                    Descriptive name of the Layout
                </p>
                <p className="mt-2 text-gray-600">
                    Those options are already baked in with this model shoot me
                    an email clear blue water but we need distributors to
                    evangelize the new line to local markets.
                </p>
                <div className="mt-2">
                    <span className="bg-slate-100	font-medium text-gray-700 text-sm rounded px-2 py-1 mr-1">
                        #comms
                    </span>
                    <span className="bg-slate-100	font-medium  text-gray-700 text-sm rounded px-2 py-1 mr-1">
                        #coverage
                    </span>
                    <span className="bg-slate-100	font-medium text-gray-700 text-sm rounded px-2 py-1 mr-1">
                        #stakeholders
                    </span>
                </div>
            </div>
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
                    <p className="font-bold text-l">07/23/2024</p>
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
            {/* <Button onClick={() => { }} className="w-full flex justify-center items-center">
      {' '}
      <Bookmarkcon className="w-5 mr-2" /> Favorite item
    </Button> */}
        </div>
    );
}
