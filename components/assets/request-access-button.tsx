'use client';

import LockClosedIcon from '@/components/icons/lock-closed';
import { useState } from 'react';

export default function BookmarkButton({ id }: { id: string }) {
    const [loading, setLoading] = useState(false);
    const handleRequestAccess = async () => {
        try {
            await fetch(`/api/request-access/${id}`, {
                method: 'GET',
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <button onClick={handleRequestAccess} className={`w-full`}>
            <div
                className={`mb-8 ml-4 mr-4 flex justify-center rounded items-center p-4   transition-colors duration-200 text-white bg-slate-900 hover:bg-slate-800`}
            >
                <LockClosedIcon className="w-5 mr-2" />
                <span className="font-thin">
                    {loading ? '...Loading' : 'Request access'}
                </span>
            </div>
        </button>
    );
}
