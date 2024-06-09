'use client';
import TabButton from '@/components/tabs/tab-button';
import { useState } from 'react';
declare type TabsProps = {
    children: React.ReactNode[];
};

export default function TabsClient({ children }: TabsProps) {
    const [active, setActive] = useState<number>(0);
    return (
        <>
            <div className="bg-slate-100 p-2 rounded flex items-center">
                {children.map((child: any, index) => {
                    return (
                        <TabButton
                            key={index}
                            title={child.props.title}
                            isActive={index === active}
                            onClick={() => setActive(index)}
                        />
                    );
                })}
            </div>
            <div className="tabs__body">{children[active]}</div>
        </>
    );
}
