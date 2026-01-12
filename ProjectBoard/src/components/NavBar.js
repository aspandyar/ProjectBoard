'use client';

/**
 * NavBar Component - Navigation bar inside the header
 */
export default function NavBar() {
  return (
    <nav className="flex items-center justify-center gap-4">
      <button
        onClick={() => {
          if (window.confirm('This will clear all tasks. Are you sure?')) {
            localStorage.removeItem('projectBoardState');
            window.location.reload();
          }
        }}
        className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
        aria-label="Clear all data"
      >
        Clear Data
      </button>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        GitHub
      </a>
    </nav>
  );
}

