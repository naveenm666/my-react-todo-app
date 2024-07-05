import React from 'react';

const Task = ({ task, onDelete, onEdit, onToggleComplete }) => { // Add the onToggleComplete prop.
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'completed-task' : ''}`}>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <div>
        <button className="btn btn-success btn-sm mr-2" onClick={() => onToggleComplete(task.id)}>
          {task.completed ? 'Unmark' : 'Complete'} {/* Button to toggle the task's completion status. */}
        </button>
        <button className="btn btn-info btn-sm mr-2" onClick={() => onEdit(task)}>
          Edit {/* Button to edit the task. */}
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(task.id)}>
          Delete {/* Button to delete the task. */}
        </button>
      </div>
    </li>
  );
};

export default Task;
