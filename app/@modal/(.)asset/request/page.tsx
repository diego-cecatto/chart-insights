import Modal from '@/components/modal/modal';
import AccessRequestForm from '@/partials/assets/request-access';

export default function Request() {
    return (
        <Modal>
            <AccessRequestForm id="fake-id" />
        </Modal>
    );
}
