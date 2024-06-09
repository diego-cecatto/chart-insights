import StoryBoardIcon from '@/components/icons/storyboard';
import BookmarkButton from '@/components/modal/bookmark-button';
import { Asset } from '@/database/assets/assets-database';
import RequestAccesButton from '../../components/assets/request-access-button';

export default async function AssetDetails({
    asset,
    children,
}: {
    asset: Asset;
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="p-4">
                <div className="text-center mb-4">
                    <div className="flex items-center justify-center mb-6">
                        <span className="rounded-lg bg-slate-100 w-16 h-16 flex items-center justify-center">
                            <StoryBoardIcon className="w-12" />
                        </span>
                    </div>
                    <h2 className="text-2xl font-semibold flex items-center h-50 justify-center">
                        <span className="mr-2 text-4xl">{asset.name}</span>
                        <span className="bg-slate-100 text-gray-700 text-xs rounded px-2 py-1 ">
                            {asset.type}
                        </span>
                    </h2>
                    <p className="text-gray-500 mb-8">{asset.description}</p>
                    <p className="mt-2 text-gray-600">
                        Those options are already baked in with this model shoot
                        me an email clear blue water but we need distributors to
                        evangelize the new line to local markets.
                    </p>
                    <div className="mt-2">
                        <span className="bg-slate-100 font-medium text-gray-700 text-sm rounded px-2 py-1 mr-1">
                            #comms
                        </span>
                        <span className="bg-slate-100 font-medium  text-gray-700 text-sm rounded px-2 py-1 mr-1">
                            #coverage
                        </span>
                        <span className="bg-slate-100 font-medium text-gray-700 text-sm rounded px-2 py-1 mr-1">
                            #stakeholders
                        </span>
                    </div>
                </div>
                {children}
            </div>
            {!asset.hasAccess && <RequestAccesButton id={asset.id} />}
            <BookmarkButton id={asset.id} bookmarked={asset.bookmarked} />
        </>
    );
}
