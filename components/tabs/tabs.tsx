import Link from 'next/link';
declare type TabsProps = {
    children: React.ReactNode[];
    active: string;
};

export default function Tabs({ children, active }: TabsProps) {
    let activeChild = null;
    return (
        <>
            <div className="bg-slate-100 p-2 rounded flex items-center">
                {children.map((child: any, index) => {
                    const title = child.props.title.toLowerCase();
                    let isActive = false;
                    if (title === active) {
                        activeChild = child;
                        isActive = true;
                    }
                    return (
                        <Link
                            key={index}
                            href={`?tab=${title}`}
                            className={`py-2 font-semibold rounded w-full text-center ${
                                isActive ? 'bg-white' : 'bg-slate-100'
                            }`}
                        >
                            {child.props.title}
                        </Link>
                    );
                })}
            </div>
            <div className="tabs__body">{activeChild}</div>
        </>
    );
}
