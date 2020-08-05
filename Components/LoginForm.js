import React, { useState } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { API_URL } from '../variables/const';

function LoginForm() {
   const initialState = {
      Name: '',
      Password: '',
   };

   const [UserInfo, SetUserInfo] = useState(initialState);
   const [auth, setAuth] = useState(false);
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
      axios.post(`${API_URL}/login`, { ...UserInfo })
         .then(res => res.data.Token ? setAuth(true) : setAuth(false))
         .catch(err => setAuth(false));
   }
   const HandleClickRegistration = () => {
      axios.post(`${API_URL}/registration`, { ...UserInfo })
         .then(res => console.log(res.data))
         .catch(err => console.log(err));
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
               <button type="submit" name="Login" className="btn btn-success" onClick={HandleClickLogin}>Login</button>
               <button type="submit" name="Registration" className="btn btn-primary ml-3" onClick={HandleClickRegistration}>Registration</button>
            </div>
         </form>
      </div >
   );
   return auth ? <Redirect to="/homepage" /> : RegistrationForm;
}

export default LoginForm;
