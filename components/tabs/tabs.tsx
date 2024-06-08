'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Tab({ children }: { children: any[] }) {
    const [active, setActive] = useState(0);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab');
    console.log(children)

    useEffect(() => {
        if (!tab) {
            return;
        }
        const index = children.map(child => child.key).indexOf(tab);
        if (index < 0) {
            return;
        }
        setActive(index);
    }, [tab])

    const handleClick = (e: any, index: number, cb = () => { }) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams.toString())
        params.set("tab", index.toString())
        setActive(index);
        cb && cb();
    }

    return (
        <div className="bg-slate-100 p-2 rounded flex items-center">
            <div className="tabs__navigation">
                {children.map((child, index) => (
                    <button className="py-2 bg-white font-semibold rounded w-full">
                        {child.props.title}
                    </button>
                ))}
            </div>
            <div className="tabs__body">{children[active]}</div>
        </div>
    )
}
// <a href="#" className={`tabs__navigation__item ${index === active ? 'active' : ''}`} key={`tab-${index}`} onClick={e => handleClick(e, child.key, child.props.onClick)}>
{/* </a> */ }