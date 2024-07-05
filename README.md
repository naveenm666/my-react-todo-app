# React To-Do Application

This is a simple To-Do application built using React and Redux. The application allows users to add, view, edit, complete, and delete tasks. Tasks are saved in local storage, so they persist across page reloads.

## Features

- **Add Task:** Users can add new tasks.
- **View Tasks:** All tasks are displayed in a list.
- **Edit Task:** Users can edit the names of existing tasks.
- **Complete Task:** Users can mark tasks as completed or uncompleted.
- **Delete Task:** Users can remove tasks from the list.
- **Persistent Storage:** Tasks are saved in local storage and persist across reloads.

## Technologies Used

- **React:** For building the user interface.
- **Redux:** For state management.
- **Local Storage:** For persistent storage of tasks.

## Getting Started

To run the application locally, follow these steps:

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/naveenm666/my-react-todo-app.git

2. **Navigate to the project directory:**
   
   cd react-todo-app

3. **Install dependencies:**

   npm install

## Running the Application

**Run the development server:**
 
 npm start

## Folder Structure 
   
   react-todo-app/
  ├── node_modules/
  ├── public/
  ├── src/
  │   ├── actions/        # Redux actions
  │   ├── components/     # React components
  │   ├── reducers/       # Redux reducers
  │   ├── store.js        # Redux store configuration
  │   ├── App.js          # Main app component
  │   ├── index.js        # Entry point for React
  │   ├── index.css       # Global CSS styles
  ├── package.json        # Project metadata and dependencies
  └── README.md           # Project instructions
