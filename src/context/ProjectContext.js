'use client';

import React, { createContext, useContext, useReducer, useEffect, useRef } from 'react';

// Initial state structure
const initialState = {
  projects: [
    {
      id: 'p1',
      name: 'To Do',
      tasks: [
        { id: 't1', title: 'Setup project structure', description: 'Create folders and files' },
        { id: 't2', title: 'Design database schema', description: 'Plan the data model' },
      ],
    },
    {
      id: 'p2',
      name: 'In Progress',
      tasks: [
        { id: 't3', title: 'Implement authentication', description: 'Add user login functionality' },
      ],
    },
    {
      id: 'p3',
      name: 'Done',
      tasks: [
        { id: 't4', title: 'Setup development environment', description: 'Install dependencies' },
      ],
    },
  ],
};

// Action types
export const ActionTypes = {
  LOAD_STATE: 'LOAD_STATE',
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  MOVE_TASK: 'MOVE_TASK',
};

// Reducer function
function projectReducer(state, action) {
  switch (action.type) {
    case ActionTypes.LOAD_STATE:
      return action.payload;

    case ActionTypes.ADD_TASK: {
      const { projectId, task } = action.payload;
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === projectId
            ? { ...project, tasks: [...project.tasks, task] }
            : project
        ),
      };
    }

    case ActionTypes.DELETE_TASK: {
      const { projectId, taskId } = action.payload;
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === projectId
            ? {
                ...project,
                tasks: project.tasks.filter((task) => task.id !== taskId),
              }
            : project
        ),
      };
    }

    case ActionTypes.MOVE_TASK: {
      const { sourceProjectId, targetProjectId, taskId } = action.payload;
      const sourceProject = state.projects.find((p) => p.id === sourceProjectId);
      const task = sourceProject?.tasks.find((t) => t.id === taskId);

      if (!task) return state;

      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project.id === sourceProjectId) {
            return {
              ...project,
              tasks: project.tasks.filter((t) => t.id !== taskId),
            };
          }
          if (project.id === targetProjectId) {
            return {
              ...project,
              tasks: [...project.tasks, task],
            };
          }
          return project;
        }),
      };
    }

    default:
      return state;
  }
}

// Create Context
const ProjectContext = createContext(null);

// Context Provider Component
export function ProjectProvider({ children }) {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const isInitializedRef = useRef(false);

  // Load state from LocalStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem('projectBoardState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        dispatch({ type: ActionTypes.LOAD_STATE, payload: parsedState });
      } catch (error) {
        console.error('Error loading state from LocalStorage:', error);
      }
    }
    isInitializedRef.current = true;
  }, []);

  // Save state to LocalStorage whenever state changes (but only after initialization)
  useEffect(() => {
    if (isInitializedRef.current) {
      localStorage.setItem('projectBoardState', JSON.stringify(state));
    }
  }, [state]);

  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
}

// Hook to use the context
export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
}

