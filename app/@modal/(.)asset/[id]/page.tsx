import Modal from '@/components/modal/modal';
import AssetDetails from '@/partials/assets/asset-details';

declare type AssetProps = {
    params: {
        id: string;
    };
};
export default function Asset({ params: { id } }: AssetProps) {
    return (
        <Modal>
            <AssetDetails id={id} />
        </Modal>
    );
}
