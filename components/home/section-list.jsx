import AssetItem from '@/components/assets/asset-item';

export default function SectionList({ title, description, assets: items }) {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mb-8 text-neutral">{description}</p>
        <div className="pl-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <AssetItem key={index} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
