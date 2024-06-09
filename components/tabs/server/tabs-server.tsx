import TabButton from '../tab-button';
declare type TabsProps = {
    children: React.ReactNode[];
    active: string;
};

export default function TabsServer({ children, active }: TabsProps) {
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
                        <TabButton
                            key={index}
                            title={child.props.title}
                            isActive={isActive}
                        />
                    );
                })}
            </div>
            <div className="tabs__body">{activeChild}</div>
        </>
    );
}
