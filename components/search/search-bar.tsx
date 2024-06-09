'use client';
import { useState, useEffect } from 'react';
import FindIcon from '@/components/icons/find';
import SessionStorage from '@/utils/session-storage';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const SearchBar = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [query, setQuery] = useState<string>(
        searchParams.get('query')?.toString() || ''
    );
    const [previousSearches, setPreviousSearches] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    useEffect(() => {
        const storage = new SessionStorage();
        const savedSearches = storage.getCookie('previousSearches');
        if (savedSearches) {
            setPreviousSearches(JSON.parse(savedSearches));
        }
    }, []);

    const handleInputFocus = () => {
        setShowDropdown(true);
    };

    const handleInputBlur = () => {
        setTimeout(() => setShowDropdown(false), 200);
    };

    const handleSearch = (query: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (query) {
            params.set('query', query);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    };

    const handleSearchSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target;
        const searchQuery = form.elements['searchQuery'].value;
        const updatedSearches: string[] = [
            searchQuery,
            ...previousSearches.filter((q) => q !== searchQuery),
        ];
        setPreviousSearches(updatedSearches);
        var storage = new SessionStorage();
        if (searchQuery.trim()) {
            storage.setCookie(
                'previousSearches',
                JSON.stringify(updatedSearches)
            );
        }
        setShowDropdown(false);
        handleSearch(searchQuery);
    };

    return (
        <form className="mb-8" onSubmit={handleSearchSubmit}>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <FindIcon />
                </div>
                <input
                    type="text"
                    autoComplete="off"
                    id="searchQuery"
                    className="w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
                    placeholder="Type to search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                {query && (
                    <div className="absolute inset-y-0 end-4 flex items-center ps-3">
                        <button
                            className="pl-2 pr-2 rounded-xl hover:bg-gray-100 line-height-24"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setQuery('');
                                handleSearch('');
                            }}
                        >
                            &times;
                        </button>
                    </div>
                )}
                {showDropdown && previousSearches.length > 0 && (
                    <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
                        {previousSearches.map((query, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    handleSearch(query);
                                    setQuery(query);
                                }}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                            >
                                {query}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </form>
    );
};

export default SearchBar;
