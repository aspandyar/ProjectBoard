'use client';

import { useState } from 'react';
import Task from './Task';

/**
 * Column Component - Displays a list of tasks for a project/column
 * This is a presentational component that receives props and calls callbacks
 */
export default function Column({ project, onAddTask, onDeleteTask, onMoveTask }) {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [draggedTaskId, setDraggedTaskId] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      onAddTask(project.id, taskTitle, taskDescription);
      setTaskTitle('');
      setTaskDescription('');
      setIsAddingTask(false);
    }
  };

  const handleCancel = () => {
    setTaskTitle('');
    setTaskDescription('');
    setIsAddingTask(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    try {
      const data = JSON.parse(e.dataTransfer.getData('text/plain'));
      const { taskId, projectId: sourceProjectId } = data;
      
      if (sourceProjectId !== project.id && onMoveTask) {
        onMoveTask(sourceProjectId, project.id, taskId);
      }
    } catch (error) {
      console.error('Error handling drop:', error);
    }
  };

  const handleDragStart = (taskId) => {
    setDraggedTaskId(taskId);
  };

  const handleDragEnd = () => {
    setDraggedTaskId(null);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`flex-1 min-w-[280px] bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4 mx-2 transition-colors ${
        isDragOver ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 border-dashed' : ''
      }`}
    >
      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        {project.name}
      </h2>

      <div className="mb-4">
        {project.tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            projectId={project.id}
            onDelete={onDeleteTask}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            isDragging={draggedTaskId === task.id}
          />
        ))}
      </div>

      {isAddingTask ? (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-800 rounded-lg p-4 border border-zinc-200 dark:border-zinc-700">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Task title"
            className="w-full px-3 py-2 mb-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
            required
          />
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Task description (optional)"
            rows="2"
            className="w-full px-3 py-2 mb-2 border border-zinc-300 dark:border-zinc-600 rounded-md bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors font-medium"
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-900 dark:text-zinc-100 rounded-md transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setIsAddingTask(true)}
          className="w-full py-2 px-4 border-2 border-dashed border-zinc-300 dark:border-zinc-600 rounded-lg text-zinc-600 dark:text-zinc-400 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
        >
          + Add Task
        </button>
      )}
    </div>
  );
}

