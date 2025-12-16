'use client';

import NavBar from './NavBar';

/**
 * Header Component - Contains the application header and navigation
 */
export default function Header() {
  return (
    <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              Project Board
            </h1>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
              Manage your tasks across different columns
            </p>
          </div>
          <NavBar />
        </div>
      </div>
    </header>
  );
}

