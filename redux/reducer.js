import { combineReducers } from 'redux';
import {
   ADD_TASK,
   DELETE_TASK,
}
   from "./action-types";

const AddRedusers = (prevState = [], action) => {
   const [...state] = prevState;
   switch (action.type) {
      case ADD_TASK:
         state.push(action.payload);
         return state;
      case DELETE_TASK:
         state.pop();
         return state;
      default:
         return state;
   }
}

const reducers = combineReducers({
   addPost: AddRedusers,
});

export default reducers;