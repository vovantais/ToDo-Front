import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { AuthFetch } from '../redux/action-creators';

function LoginForm() {
   const initialState = {
      Name: '',
      Password: '',
   };

   const [UserInfo, SetUserInfo] = useState(initialState);
   const { isLoading, isAuthenticated } = useSelector(({ auth }) => auth);
   const dispatch = useDispatch();
   const loginFetch = bindActionCreators(AuthFetch, dispatch);
   const handleChangeInput = (e) => {
      SetUserInfo({
         ...UserInfo,
         [e.target.name]: e.target.value,
      });
   }
   const handleSubmit = (event) => {
      event.preventDefault();
      SetUserInfo(initialState);
   }
   const HandleClickLogin = () => {
      loginFetch({ ...UserInfo })
   }
   const HandleClickRegistration = () => {
      loginFetch({ ...UserInfo })
   }
   const RegistrationForm = (
      <div className="container-fluid" >
         <form onSubmit={handleSubmit}>
            <div className="form-group ">
               <label htmlFor="exampleInputName">Name</label>
               <input type="name" name="Name" className="form-control" id="exampleInputName"
                  value={UserInfo.Name} onChange={handleChangeInput} required />
            </div>
            <div className="form-group">
               <label htmlFor="exampleInputPassword">Password</label>
               <input type="password" name="Password" className="form-control" id="exampleInputPassword"
                  value={UserInfo.Password} onChange={handleChangeInput} required />
            </div>
            <div className="form-group">
               <button type="submit" name="Login" className="btn btn-success"
                  onClick={HandleClickLogin} value={isLoading ? "Please, wait!" : 'submit'}
                  disabled={isLoading}>Login</button>
               <button type="submit" name="Registration" className="btn btn-primary ml-3"
                  onClick={HandleClickRegistration} value={isLoading ? "Please, wait!" : 'submit'}
                  disabled={isLoading}>Registration</button>
            </div>
         </form>
      </div >
   );
   return isAuthenticated ? <Redirect to="/homepage" /> : RegistrationForm;
}

export default LoginForm;
