import axios from 'axios';
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

// ! Get Task 
export const GetTaskFetch = () => (dispatch, getStore) => {
   dispatch({
      type: GET_TASK_FETCH,
   });
   const { auth } = getStore();
   axios.get(`${API_URI}/tasks`, {
      headers: {
         'Authorization': auth && auth.Token,
      },
   })
      .then(res => {
         dispatch(GetTaskSucces(res.data));
      })
      .catch(err => {
         dispatch(GetTaskFailure(err.response));
      });
};
export const GetTaskSucces = (tasks) => ({
   type: GET_TASK_SUCCESS,
   payload: tasks,
});
export const GetTaskFailure = (err) => ({
   type: GET_TASK_FAILURE,
   payload: err,
});

// ! Post task
export const PostTaskFetch = (newTask) => (dispatch, getStore) => {
   dispatch({
      type: POST_TASK_FETCH,
   });
   const { auth } = getStore();
   axios.post(`${API_URI}/tasks`,
      {
         ...newTask
      },
      {
         headers: {
            'Authorization': auth && auth.Token,
         },
      })
      .then(res => {
         dispatch(PostTaskSucces({
            message: res.data,
            task: newTask,
         }));
      })
      .catch(err => {
         dispatch(PostTaskFailure(err.response));
      });
};
export const PostTaskSucces = (payload) => ({
   type: POST_TASK_SUCCESS,
   payload,
});
export const PostTaskFailure = (payload) => ({
   type: POST_TASK_FAILURE,
   payload,
});

// ! Delete task
export const DeleteTaskPostFetch = (indexId) => (dispatch, getStore) => {
   dispatch({
      type: DELETE_TASK_FETCH,
      payload: indexId,
   })
   const { auth } = getStore();
   axios.delete(`${API_URI}/tasks`,
      {
         headers: {
            'Authorization': auth && auth.Token,
         },
         data: {
            indexId,
         },
      })
      .then(res => {
         console.log({ deleteId: indexId });
         console.log('res.data', res.data);
         dispatch(DeleteTaskPostSucces({
            message: res.data,
            deleteId: indexId,
         }));
      })
      .catch(err => {
         dispatch(DeleteTaskPostFailure(err.response));
      });
}
export const DeleteTaskPostSucces = (message) => ({
   type: DELETE_TASK_SUCCESS,
   payload: message,
});
export const DeleteTaskPostFailure = (message) => ({
   type: DELETE_TASK_FAILURE,
   payload: message,
});