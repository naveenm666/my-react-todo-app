import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleCompleteTask } from '../actions/taskActions'; // Import the new action.
import Task from './Task';
import EditTaskModal from './EditTaskModal';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks'); // Get tasks from local storage.
    if (savedTasks) {
      dispatch({ type: 'LOAD_TASKS', payload: JSON.parse(savedTasks) }); // Load tasks from local storage.
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to local storage whenever tasks change.
  }, [tasks]);

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  const handleSaveChanges = (taskId, taskName) => {
    dispatch(editTask(taskId, taskName));
  };

  const handleToggleComplete = (taskId) => {
    dispatch(toggleCompleteTask(taskId)); // Dispatch the toggle complete action.
  };

  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
            onToggleComplete={handleToggleComplete} // Pass the toggle complete handler.
          />
        ))}
      </ul>

      {currentTask && (
        <EditTaskModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          task={currentTask}
          saveChanges={handleSaveChanges}
        />
      )}
    </div>
  );
};

export default TaskList;
