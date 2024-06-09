import Modal from '@/components/modal/modal';
import AssetDetails from '@/partials/assets/asset-details';

declare type AssetProps = {
    params: {
        id: string;
    };
};
export default function AssetModal({ params: { id } }: AssetProps) {
    return (
        <Modal share={true}>
            <AssetDetails id={id} />
        </Modal>
    );
}
