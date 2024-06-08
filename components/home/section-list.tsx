import AssetItem from '@/components/assets/asset-item';

declare type SectionListProps = {
  title: string,
  search: string,
  description: string,
  variant?: 'primary' | 'secondary'
}
export default async function SectionList({ title, description, search, variant = 'secondary' }: SectionListProps) {

  const assets: any[] = [];
  // try {
  //   const response = await fetch('/api/search', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ query: search, type: title }),
  //   });

  //   const assets = await response.json();
  // } catch (error) {
  //   console.error('Error fetching search results:', error);
  // }
  console.log(assets)
  return (
    <>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mb-8 text-neutral">{description}</p>
        <div className="pl-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {assets.map((item, index) => (
            <AssetItem key={index} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}