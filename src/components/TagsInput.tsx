// src/components/TagsInput.tsx
'use client';

import React, { useState } from 'react';

type TagsInputProps = {
  tags: string[];
  setTags: (tags: string[]) => void;
  onSearch: (tags: string[]) => void;
  isDisabled?: boolean;
};

const TagsInput: React.FC<TagsInputProps> = ({ tags, setTags, onSearch, isDisabled = false }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleTagAddition = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      const newTag = inputValue.trim();
      if (!tags.includes(newTag) && tags.length < 10) {
        setTags([...tags, newTag]);
      }
      setInputValue('');
      event.preventDefault();
    }
  };

  const handleTagRemoval = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const handleSearch = () => {
    onSearch(tags);
  }

  return (
    <div className="m-4 relative">
      <label htmlFor="tags-input" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
        Search
      </label>
      <div className='flex flex-row gap-2'>
        <input
          type="text"
          id="tags"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleTagAddition}
          placeholder="Enter keywords"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          disabled={isDisabled}
        />
        <button 
          className='bg-transparent border rounded-lg py-2.5 px-5'
          onClick={handleSearch}
          disabled={isDisabled}
        >
          Search
        </button>
      </div>
      <div id="tags-container" className="mt-2 flex flex-wrap gap-2 border border-gray-300 p-2 rounded-lg">
        {tags.map((tag, index) => (
          <div key={index} className="tag bg-gray-200 px-2 py-1 rounded-md flex items-center">
            <span className="tag-text mr-2">{tag}</span>
            <span
              className="tag-close cursor-pointer font-bold text-gray-600"
              onClick={() => handleTagRemoval(tag)}
            >
              x
            </span>
          </div>
        ))}
      </div>
      <p id="tags-helper-text-explanation" className="mt-2 text-md text-gray-500 dark:text-gray-400">
        Insert up to 10 different keywords. Example: upcoming ICOs 2024, newly funded blockchain companies, upcoming DeFi projects 2024, ethereum ICO calendar, new ethereum crypto launches, latest crypto investments, etc.
      </p>
    </div>
  );
};

export default TagsInput;