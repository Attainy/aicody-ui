import React, { useState, useEffect, useCallback, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { itemVariants } from './CommandVariants';
import type { CommandProps } from './Command.types';
import { Search } from 'lucide-react';

export const Command: React.FC<CommandProps> = ({ suggestions = [] }) => {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const commandRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleNavigation = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }

      if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault();
        const selectedSuggestion = filteredSuggestions[selectedIndex];
        selectedSuggestion?.action();
      }
    },
    [selectedIndex, filteredSuggestions]
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="w-[500px] max-w-lg mx-auto border border-gray-200 rounded-lg shadow-sm">
      <div
        ref={commandRef}
        className="bg-white rounded-lg p-4"
        onKeyDown={handleNavigation}
      >
        {/* 검색 입력창 */}
        <div className="flex items-center gap-2 mb-2 px-3">
          <Search
            className={isFocused ? 'text-brand-black' : 'text-brand-gray'}
          />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search commands..."
            value={search}
            className="w-full px-3 py-2 border-b border-brand-gray focus:outline-none focus:shadow-ring-bottom"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(-1);
            }}
          />
        </div>

        {/* 목록 */}
        {filteredSuggestions.length > 0 ? (
          <ul className="max-h-60 overflow-auto">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={suggestion.id}
                className={twMerge(
                  'px-3 py-2 rounded-md cursor-pointer transition-colors',
                  itemVariants({ selected: index === selectedIndex })
                )}
                onClick={() => {
                  suggestion.action();
                }}
                role="option"
                aria-selected={index === selectedIndex}
              >
                {suggestion.label}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

Command.displayName = 'Command';
