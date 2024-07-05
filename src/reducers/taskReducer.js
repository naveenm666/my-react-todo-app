const initialState = {
    tasks: [] // Initial state for tasks.
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload] // Add a new task to the state.
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload) // Remove the task with the specified ID.
        };
      case 'EDIT_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, name: action.payload.name } : task // Update the task's name.
          )
        };
      case 'TOGGLE_COMPLETE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task // Toggle the completed status.
          )
        };
      case 'LOAD_TASKS': // Handle loading tasks from local storage.
        return {
          ...state,
          tasks: action.payload // Set the tasks to the loaded tasks.
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  