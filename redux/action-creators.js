import axios from 'axios';
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
import { API_URI } from '../variables/const';

// ! Auth login
export const AuthFetch = (authPayload) => (dispatch) => {
   dispatch({
      type: AUTH_LOGIN_FETCH,
   });
   axios.post(`${API_URI}/login`, { ...authPayload })
      .then(res => dispatch(AuthSuccess(res.data)))
      .catch(err => dispatch(AuthFailure(err.data)))
};
export const AuthSuccess = (payload) => ({
   type: AUTH_LOGIN_SUCCESS,
   payload,
});
export const AuthFailure = (payload) => ({
   type: AUTH_LOGIN_FAILURE,
   payload,
});

// ! Auth Registration 
export const RegistrationFetch = (authPayload) => (dispatch) => {
   dispatch({
      type: AUTH_REGISTRATION_FETCH,
   });
   axios.post(`${API_URI}/registration`, { ...authPayload })
      .then(res => dispatch(RegistrationSuccess(res.data)))
      .catch(err => dispatch(RegistrationFailure(err.data)))
};
export const RegistrationSuccess = (payload) => ({
   type: AUTH_REGISTRATION_SUCCESS,
   payload,
});
export const RegistrationFailure = (payload) => ({
   type: AUTH_REGISTRATION_FAILURE,
   payload,
});

// ! Add
export const AddTaskPost = (payload) => ({
   type: ADD_TASK,
   payload,
});
// ! Delete
export const DeleteTaskPost = (payload) => ({
   type: DELETE_TASK,
   payload,
});