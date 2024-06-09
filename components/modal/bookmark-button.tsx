'use client';
import { useState } from 'react';
import BookmarkIcon from '../icons/bookmark';

export default function BookmarkButton({
    id,
    bookmarked,
}: {
    id: string;
    bookmarked: boolean;
}) {
    const [isBookmarked, setIsBookmarked] = useState(bookmarked);
    const [loading, setLoading] = useState(false);

    const toggleBookmark = async () => {
        setLoading(true);
        setIsBookmarked(!isBookmarked);
        try {
            await fetch(`/api/bookmarks/${id}`, {
                method: isBookmarked ? 'DELETE' : 'POST',
            });
        } catch (error) {
            setIsBookmarked(!isBookmarked);
        } finally {
            setLoading(false);
        }
    };
    return (
        <button onClick={toggleBookmark} className={`w-full`}>
            <div
                className={`mb-8 ml-4 mr-4 flex justify-center rounded items-center p-4   transition-colors duration-200 text-white ${
                    isBookmarked
                        ? 'bg-green-950 hover:bg-green-900'
                        : ' bg-slate-900 hover:bg-slate-800'
                } ${loading ? 'animate-pulse' : ''}`}
            >
                <BookmarkIcon className="w-5 mr-2" />
                <span className="font-thin">
                    {isBookmarked ? 'Remove from favorites' : 'Favorite item'}
                </span>
            </div>
        </button>
    );
}
