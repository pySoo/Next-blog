import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';

import { $ } from '@/libs/core';

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isSearchPage) {
      const value = e.target.value;
      setInputText(value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={$('relative w-full', className)} onSubmit={handleSubmit}>
      <input
        type="text"
        className={$(
          'block w-full rounded-md border px-4 py-2 sm:min-w-[300px]',
          'border-neutral-200 bg-white placeholder:text-tertiary dark:border-neutral-900 dark:bg-neutral-800',
          'focus:outline-none focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-800',
        )}
        placeholder={placeholder}
        value={inputText}
        onChange={handleChange}
        autoFocus={isSearchPage}
      />
      <button
        type="submit"
        className="text-secondary absolute right-3 top-3 h-5 w-5"
      >
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
      </button>
    </form>
  );
}
