import axios from 'axios';
import {
   AUTH_LOGIN_FETCH,
   AUTH_LOGIN_SUCCESS,
   AUTH_LOGIN_FAILURE,
   ADD_TASK,
   DELETE_TASK,
}
   from "./action-types";
import { API_URI } from '../variables/const';

export const AuthFetch = (authPayload) => (dispatch) => {
   dispatch({
      type: AUTH_LOGIN_FETCH,
   });
   axios.post(`${API_URI}/login`, { ...authPayload })
      .then(res => dispatch(AuthSuccess({
         Token: res.headers.authorization,
         message: res.data,
      })))
      .catch(err => dispatch(AuthFailure(err.response.data)))
};
export const AuthSuccess = (payload) => ({
   type: AUTH_LOGIN_SUCCESS,
   payload,
});
export const AuthFailure = (payload) => ({
   type: AUTH_LOGIN_FAILURE,
   payload,
});

export const AddTaskPost = ({ value }) => ({
   type: ADD_TASK,
   payload: {
      value,
   },
});
export const DeleteTaskPost = () => ({
   type: DELETE_TASK,
});