'use client';

/**
 * Footer Component - Application footer
 */
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>© 2024 Project Board. Built with React, Context API, and useReducer.</p>
          <p className="mt-2">
            Drag and drop tasks between columns to move them.
          </p>
        </div>
      </div>
    </footer>
  );
}

