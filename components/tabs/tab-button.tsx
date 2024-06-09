'use client';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

declare type TabButtonProps = { title: string; isActive: boolean };
export default function TabButton({ title, isActive }: TabButtonProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    return (
        <Link
            onClick={(e) => {
                e.preventDefault();
                const params = new URLSearchParams(
                    Array.from(searchParams.entries())
                );
                params.set('tab', title.toLowerCase());
                router.replace(`${pathname}?${params.toString()}`);
            }}
            href={`?tab=${title.toLowerCase()}`}
            className={`py-2 font-semibold rounded w-full text-center ${
                isActive ? 'bg-white' : 'bg-slate-100'
            }`}
        >
            {title}
        </Link>
    );
}
