import Link from 'next/link';
import ChartIcon from '../icons/chart';
declare type AssetProps = {
    item: any;
    popular?: boolean;
};

export default function Asset({ item, popular }: AssetProps) {
    return (
        <Link href={`asset/${item.id}`}>
            <div
                className={`hover:shadow-lg p-4 rounded flex items-stretch gap-4 w-full ${
                    popular ? 'bg-white border border-gray-100' : ''
                }`}
            >
                <div className="rounded-lg bg-slate-100 w-32 flex items-center justify-center">
                    <ChartIcon className="w-10" />
                </div>
                <div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-neutra mb-4">{item.description}</p>
                    <p className="text-gray-400">{item.date}</p>
                </div>
            </div>
        </Link>
    );
}
