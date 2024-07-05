let nextTaskId = 0; // Initialize a variable to keep track of the next task ID.

export const addTask = (taskName) => ({
  type: 'ADD_TASK',
  payload: {
    id: nextTaskId++,
    name: taskName,
    completed: false // Add a completed flag set to false initially.
  }
});

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId
});

export const editTask = (taskId, taskName) => ({
  type: 'EDIT_TASK',
  payload: {
    id: taskId,
    name: taskName
  }
});

export const toggleCompleteTask = (taskId) => ({
  type: 'TOGGLE_COMPLETE_TASK',
  payload: taskId // The ID of the task to toggle.
});
