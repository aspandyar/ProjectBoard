'use client';

import { useProjectContext, ActionTypes } from '../context/ProjectContext';

/**
 * Custom Hook that encapsulates all business logic for project/task management
 * This keeps presentational components "dumb" and separates logic from presentation
 * 
 * IMPORTANT: All state changes MUST go through the dispatch function from useReducer.
 * This hook uses dispatch to trigger state mutations in the reducer.
 */
export function useProjectManager() {
  const { state, dispatch } = useProjectContext();

  /**
   * Add a new task to a specific project/column
   * Uses dispatch from useReducer to update state immutably
   * @param {string} projectId - The ID of the project/column
   * @param {string} title - The task title
   * @param {string} description - The task description (optional)
   */
  const addTask = (projectId, title, description = '') => {
    if (!title.trim()) {
      throw new Error('Task title cannot be empty');
    }

    const newTask = {
      id: `t${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: title.trim(),
      description: description.trim(),
    };

    // All state changes go through dispatch (useReducer)
    dispatch({
      type: ActionTypes.ADD_TASK,
      payload: {
        projectId,
        task: newTask,
      },
    });
  };

  /**
   * Delete a task from a specific project/column
   * Uses dispatch from useReducer to update state immutably
   * @param {string} projectId - The ID of the project/column
   * @param {string} taskId - The ID of the task to delete
   */
  const deleteTask = (projectId, taskId) => {
    // All state changes go through dispatch (useReducer)
    dispatch({
      type: ActionTypes.DELETE_TASK,
      payload: {
        projectId,
        taskId,
      },
    });
  };

  /**
   * Move a task from one project/column to another
   * Uses dispatch from useReducer to update state immutably
   * @param {string} sourceProjectId - The ID of the source project/column
   * @param {string} targetProjectId - The ID of the target project/column
   * @param {string} taskId - The ID of the task to move
   */
  const moveTask = (sourceProjectId, targetProjectId, taskId) => {
    if (sourceProjectId === targetProjectId) {
      return; // No need to move if same column
    }

    // All state changes go through dispatch (useReducer)
    dispatch({
      type: ActionTypes.MOVE_TASK,
      payload: {
        sourceProjectId,
        targetProjectId,
        taskId,
      },
    });
  };

  /**
   * Get all projects/columns
   * @returns {Array} Array of project objects
   */
  const getProjects = () => {
    return state.projects;
  };

  /**
   * Get a specific project by ID
   * @param {string} projectId - The ID of the project
   * @returns {Object|null} The project object or null if not found
   */
  const getProject = (projectId) => {
    return state.projects.find((project) => project.id === projectId) || null;
  };

  return {
    projects: state.projects,
    addTask,
    deleteTask,
    moveTask,
    getProjects,
    getProject,
  };
}

