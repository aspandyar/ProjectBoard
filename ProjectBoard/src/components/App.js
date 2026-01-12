'use client';

import { useProjectManager } from '../hooks/useProjectManager';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

/**
 * App Component - Main container component
 * Uses the custom hook to get business logic functions and passes them to child components
 */
export default function App() {
  const { projects, addTask, deleteTask, moveTask } = useProjectManager();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex flex-col">
      <Header />
      <Main
        projects={projects}
        onAddTask={addTask}
        onDeleteTask={deleteTask}
        onMoveTask={moveTask}
      />
      <Footer />
    </div>
  );
}

