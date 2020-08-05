import { combineReducers } from 'redux';
import {
   AUTH_LOGIN_FETCH,
   AUTH_LOGIN_SUCCESS,
   AUTH_LOGIN_FAILURE,
   ADD_TASK,
   DELETE_TASK,
}
   from "./action-types";

const AuthRedusers = (state = {}, action) => {
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
      default:
         return state;
   }
}

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
   auth: AuthRedusers,
});

export default reducers;