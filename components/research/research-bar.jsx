import { useState, useEffect } from 'react';
import FindIcon from '@/components/icons/find';
import SessionStorage from '@/utils/session-storage';

const ResearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [previousSearches, setPreviousSearches] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storage = new SessionStorage();
    const savedSearches = storage.getCookie('previousSearches');
    if (savedSearches) {
      setPreviousSearches(JSON.parse(savedSearches));
    }
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setShowDropdown(false), 200);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const updatedSearches = [
      searchQuery,
      ...previousSearches.filter((q) => q !== searchQuery),
    ];
    setPreviousSearches(updatedSearches);
    var storage = new SessionStorage();
    storage.setCookie('previousSearches', JSON.stringify(updatedSearches));
    setSearchQuery('');
  };

  const handlePreviousSearchClick = (query) => {
    setSearchQuery(query);
    setShowDropdown(false);
  };

  return (
    <form className="mb-8" onSubmit={handleSearchSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <FindIcon />
        </div>
        <input
          type="text"
          id="default-search"
          className="w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
          placeholder="Type to search..."
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          required
        />
        {showDropdown && previousSearches.length > 0 && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1">
            {previousSearches.map((query, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onMouseDown={() => handlePreviousSearchClick(query)}
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

export default ResearchBar;
