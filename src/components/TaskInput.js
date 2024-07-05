import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions'; 

const TaskInput = () => { // Define the TaskInput component.
  const [taskName, setTaskName] = useState(''); // Create a state variable to hold the task name.
  const dispatch = useDispatch(); 

  const handleInputChange = (e) => { // Function to handle changes in the input field.
    setTaskName(e.target.value); 
  };

  const handleAddTask = () => { // Function to handle adding a task.
    if (taskName.trim() !== '') { 
      dispatch(addTask(taskName)); 
      setTaskName(''); 
    }
  };

  return ( // Return the JSX for the TaskInput component.
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Add New Task</h5>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task name"
            value={taskName} 
            onChange={handleInputChange} // Set the onChange handler to handleInputChange.
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleAddTask}>
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInput; 
