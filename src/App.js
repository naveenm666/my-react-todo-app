import React from 'react'; 
import TaskInput from './components/TaskInput'; 
import TaskList from './components/TaskList'; 

const App = () => { // Define the App component.
  return ( // Return the JSX for the App component.
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4">React To-Do App</h1>
          <TaskInput /> {/* Render the TaskInput component. */}
          <TaskList /> {/* Render the TaskList component. */}
        </div>
      </div>
    </div>
  );
};

export default App; 
