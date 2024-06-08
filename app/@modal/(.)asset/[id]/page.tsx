import Modal from "@/components/modal/layout-modal"

declare type AssetProps = {
    params: {
        id: string
    }
}
export default function Asset({ params: { id } }: AssetProps) {
    return <Modal />
}