import { combineReducers } from 'redux';
import {

   AUTH_LOGIN_FETCH,
   AUTH_LOGIN_SUCCESS,
   AUTH_LOGIN_FAILURE,

   AUTH_REGISTRATION_FETCH,
   AUTH_REGISTRATION_SUCCESS,
   AUTH_REGISTRATION_FAILURE,

   ADD_TASK,
   DELETE_TASK,
}
   from "./action-types";

// ! Auth 
const AuthRedusers = (prevState = {}, action) => {
   const { ...state } = prevState;
   switch (action.type) {
      case AUTH_LOGIN_FETCH:
         return {
            isLoading: true,
         }
      case AUTH_LOGIN_SUCCESS:
         return {
            isLoading: false,
            Token: action.payload.Token,
            isAuthenticated: true,
         }
      case AUTH_LOGIN_FAILURE:
         return {
            isLoading: false,
         }
      case AUTH_REGISTRATION_FETCH:
         return {
            isLoading: true,
         }
      case AUTH_REGISTRATION_SUCCESS:
         return {
            isLoading: false,
         }
      case AUTH_REGISTRATION_FAILURE:
         return {
            isLoading: false,
         }
      default:
         return state;
   }
}

const AddTaskAndDeleteRedusers = (prevState = [], action) => {
   const [...state] = prevState;
   switch (action.type) {
      case ADD_TASK:
         state.push(action.payload);
         return state;
      case DELETE_TASK:
         state.splice(action.payload, 1)
         return state;
      default:
         return state;
   }
}

const reducers = combineReducers({
   addPost: AddTaskAndDeleteRedusers,
   auth: AuthRedusers,
});

export default reducers;