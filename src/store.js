import { createStore } from 'redux'; 
import taskReducer from './reducers/taskReducer'; 

const store = createStore(taskReducer); // Create a Redux store using the taskReducer.

export default store; 
