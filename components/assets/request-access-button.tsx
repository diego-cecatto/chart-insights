import LockClosedIcon from '@/components/icons/lock-closed';
import Link from 'next/link';

export default function BookmarkButton({ id }: { id: string }) {
    return (
        <Link href="request" className={`w-full`}>
            <div
                className={`mb-8 ml-4 mr-4 flex justify-center rounded items-center p-4   transition-colors duration-200 text-white bg-slate-900 hover:bg-slate-800`}
            >
                <LockClosedIcon className="w-5 mr-2" />
                <span className="font-thin">Request access</span>
            </div>
        </Link>
    );
}
