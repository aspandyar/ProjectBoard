'use client';

import Column from './Column';

/**
 * Main Component - Main content area containing the project columns
 */
export default function Main({ projects, onAddTask, onDeleteTask, onMoveTask }) {
  return (
    <main className="flex-1 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          {projects.map((project) => (
            <Column
              key={project.id}
              project={project}
              onAddTask={onAddTask}
              onDeleteTask={onDeleteTask}
              onMoveTask={onMoveTask}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

