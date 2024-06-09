import Modal from '@/components/modal/modal';
import Asset from '@/partials/assets/asset';

declare type AssetProps = {
    params: {
        id: string;
    };
};
export default function AssetModal({ params: { id } }: AssetProps) {
    return (
        <Modal>
            <Asset id={id} />
        </Modal>
    );
}
