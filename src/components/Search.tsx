import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useSearch, SearchResult } from '../hooks/useSearch';
import { Search as SearchIcon, X, Dumbbell, Apple } from 'lucide-react';

interface SearchProps {
  onNavigate: (page: string, id: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onNavigate }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const { search } = useSearch();
  const results = search(query);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const handleSelect = (item: SearchResult) => {
    const page = item.type === 'exercise' ? 'exercises' : 'nutrition';
    onNavigate(page, item.data.id);
    setQuery('');
    setIsFocused(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-xs" ref={searchContainerRef}>
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
        <input
          type="text"
          placeholder="Search exercises, meals..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800 dark:text-gray-200"
        />
      </div>

      {isFocused && query && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 max-h-80 overflow-y-auto">
          {results.length > 0 ? (
            <ul>
              {results.map((item, index) => (
                <li key={`${item.type}-${item.data.id}-${index}`}>
                  <button
                    onClick={() => handleSelect(item)}
                    className="w-full text-left flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {item.type === 'exercise' ? (
                      <Dumbbell className="w-5 h-5 mr-3 text-purple-500" />
                    ) : (
                      <Apple className="w-5 h-5 mr-3 text-green-500" />
                    )}
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">{item.data.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                        {item.type === 'exercise' ? item.data.category : item.data.goal}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-4 text-center text-gray-500">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};
