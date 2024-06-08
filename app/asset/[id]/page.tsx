declare type AssetProps = {
    params: {
        id: string
    }
}
export default function Asset({ params: { id } }: AssetProps) {
    return <>Asset item {id}</>
}