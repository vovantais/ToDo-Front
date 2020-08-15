import { combineReducers } from 'redux';
import {
   // ! Auth login
   AUTH_LOGIN_FETCH,
   AUTH_LOGIN_SUCCESS,
   AUTH_LOGIN_FAILURE,

   // ! Auth Registration 
   AUTH_REGISTRATION_FETCH,
   AUTH_REGISTRATION_SUCCESS,
   AUTH_REGISTRATION_FAILURE,

   // !Get task
   GET_TASK_FETCH,
   GET_TASK_SUCCESS,
   GET_TASK_FAILURE,

   // ! Post task
   POST_TASK_FETCH,
   POST_TASK_SUCCESS,
   POST_TASK_FAILURE,

   // ! Delete task
   DELETE_TASK_FETCH,
   DELETE_TASK_SUCCESS,
   DELETE_TASK_FAILURE,
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
// ! All task action 

const tasksRedusers = (prevState = [], action) => {
   const [...state] = prevState;
   switch (action.type) {
      case GET_TASK_FETCH:
         return {
            ...state,
            isLoading: true,
         }
      case GET_TASK_SUCCESS:
         return {
            isLoading: false,
            value: action.payload.value,
         }
      case GET_TASK_FAILURE:
         return {
            ...state,
            isLoading: false,
         }
      case POST_TASK_FETCH:
         return state;
      case POST_TASK_SUCCESS:
         state.push(action.payload.task);
         return state;
      case POST_TASK_FAILURE:
         return state;
      case DELETE_TASK_SUCCESS:
         console.log(action.payload.deleteId);
         state.splice(action.payload.deleteId, 1)
         return state;
      default:
         return state;
   }
}
const reducers = combineReducers({
   tasksAction: tasksRedusers,
   auth: AuthRedusers,
});

export default reducers;