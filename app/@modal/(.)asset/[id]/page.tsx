import LayoutModal from '@/components/modal/layout-modal';

declare type AssetProps = {
    params: {
        id: string;
    };
};
export default function Asset({ params: { id } }: AssetProps) {
    return <LayoutModal />;
}
