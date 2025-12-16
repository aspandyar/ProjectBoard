'use client';

import { useProjectManager } from '../hooks/useProjectManager';
import Column from './Column';

/**
 * App Component - Main container component
 * Uses the custom hook to get business logic functions and passes them to child components
 */
export default function App() {
  const { projects, addTask, deleteTask } = useProjectManager();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Project Board
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Manage your tasks across different columns
          </p>
        </header>

        <div className="flex flex-wrap gap-4 justify-center">
          {projects.map((project) => (
            <Column
              key={project.id}
              project={project}
              onAddTask={addTask}
              onDeleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

