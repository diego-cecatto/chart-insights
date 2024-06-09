'use client';
import { Asset } from '@/database/assets/assets-database';
import ChartIcon from '@/components/icons/chart';
import { useState } from 'react';
import NotesIcon from '@/components/icons/notes';

export default function KPIAssetVisuals({ asset }: { asset: Asset }) {
    const [selected, setSelected] = useState<Record<number, boolean>>({});
    const handleSelectVisual = (index: number) => {
        setSelected({ ...selected, [index]: !selected[index] });
    };
    return (
        <>
            <div className="mt-8 pl-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2].map((item, index) => (
                    <div
                        key={index}
                        className={`hover:shadow-lg cursor-pointer p-4 rounded flex items-stretch gap-4 w-full ${
                            selected[index]
                                ? 'bg-white border border-gray-100'
                                : ''
                        }`}
                        onClick={() => handleSelectVisual(index)}
                    >
                        <div className="rounded-lg bg-slate-100 w-32 flex items-center justify-center">
                            <ChartIcon className="w-10" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Item Name</h3>
                            <p className="text-neutra mb-4">
                                Short description of the item goes nicely
                            </p>
                            <p className="text-gray-400">06/07/2024</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className={`w-full mt-8`}>
                <div
                    className={`mb-8 ml-4 mr-4 flex justify-center rounded items-center p-4 transition-colors duration-200 text-white  bg-slate-900 hover:bg-slate-800 ${
                        Object.values(selected).filter((i) => i).length
                            ? 'opacity-100'
                            : 'opacity-50'
                    }`}
                >
                    <NotesIcon className="w-5 mr-2" />
                    <span className="font-thin">Take notes</span>
                </div>
            </button>
        </>
    );
}
