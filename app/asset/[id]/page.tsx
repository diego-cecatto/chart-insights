import Asset from '@/partials/assets/asset';
import Link from 'next/link';

declare type AssetProps = {
    params: {
        id: string;
    };
};
export default function AssetPage({ params: { id } }: AssetProps) {
    return (
        <div>
            <Link className="mt-12 ml-8 text-blue-500" href="/">
                Go back to home
            </Link>
            <div className="mt-8">
                <Asset id={id} />
            </div>
        </div>
    );
}
