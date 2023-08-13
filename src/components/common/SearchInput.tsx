import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { $ } from '@/libs/core';
import useDebounce from '@/libs/useDebounce';

type SearchInputProps = {
  className?: string;
  placeholder: string;
};

export default function SearchInput({
  className,
  placeholder,
}: SearchInputProps) {
  const router = useRouter();
  const isSearchPage = router.pathname === '/search';

  const [inputText, setInputText] = useState('');
  const debouncedText = useDebounce(inputText);

  const handleSearchQuery = () => {
    router.push({
      pathname: '/search',
      query: { q: debouncedText },
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isSearchPage) {
      const value = e.target.value;
      setInputText(value);
    }
  };

  const handleClick = () => {
    if (!isSearchPage) {
      handleSearchQuery();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (isSearchPage) {
      handleSearchQuery();
    }
  }, [debouncedText]);

  return (
    <form
      className={$(
        'relative w-full flex items-center gap-2',
        'w-full rounded-xl border px-1 py-1 w-[150px] sm:min-w-[200px]',
        'border-neutral-200 bg-tertiary placeholder:text-tertiary dark:border-neutral-900 dark:bg-neutral-800',
        className,
      )}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className={$(
          'w-full bg-tertiary placeholder:text-mute dark:bg-neutral-800 focus:outline-none pl-2',
        )}
        placeholder={placeholder}
        value={inputText}
        onChange={handleChange}
        onClick={handleClick}
        autoFocus={isSearchPage}
      />
      <button
        aria-label="search-button"
        type="submit"
        className="text-secondary w-[30px] h-[30px] flex justify-center items-center shrink-0"
      >
        <div className="w-5 h-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </button>
    </form>
  );
}
