import ChartIcon from './../icons/chart';
export default function ({ item }) {
  return (
    <div className="p-4 border border-gray-100 rounded flex items-stretch gap-4 w-full rounded-lg bg-white">
      <div className="rounded-lg bg-slate-100 w-52 flex items-center justify-center">
        <ChartIcon className="w-10" />
      </div>
      <div>
        <h3 className="text-xl font-bold">{item.name}</h3>
        <p className="text-neutra mb-4">{item.description}</p>
        <p className="text-gray-400">{item.date}</p>
      </div>
    </div>
  );
}
