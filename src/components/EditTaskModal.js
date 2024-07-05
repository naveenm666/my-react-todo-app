import React, { useState, useEffect } from 'react'; 
import { Modal, Button, Form } from 'react-bootstrap'; 

const EditTaskModal = ({ show, handleClose, task, saveChanges }) => { // Define the EditTaskModal component.
  const [taskName, setTaskName] = useState(task.name); // Create a state variable for the task name.

  useEffect(() => { // useEffect to update the task name when the task prop changes.
    setTaskName(task.name); 
  }, [task]);

  const handleSave = () => { // Function to handle saving the changes.
    saveChanges(task.id, taskName); 
    handleClose(); 
  };

  return ( // Return the JSX for the EditTaskModal component.
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTaskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              value={taskName} 
              onChange={(e) => setTaskName(e.target.value)} 
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel 
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes 
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTaskModal;
