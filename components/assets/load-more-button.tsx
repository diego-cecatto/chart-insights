import { Asset } from '@/database/assets/assets-database';
import MoreIcon from '../icons/more';

export default function LoadMoreButton({ asset }: { asset: Asset[] }) {
    return (
        <button className="mt-12 w-full">
            <div
                className={`mb-8 ml-4 mr-4 flex justify-center rounded items-center p-4   transition-colors duration-200 text-white bg-slate-900 hover:bg-slate-800`}
            >
                <MoreIcon className="w-5 mr-2" />
                <span className="font-thin">Load more</span>
            </div>
        </button>
    );
}
