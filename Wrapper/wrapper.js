import React from 'react'
import LoginForm from '../Components/LoginForm'
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";
import HomePage from '../Components/HomePage';
import Task from '../Components/Task';

function Wrapper() {
   return (
      <div>
         <Router>
            <Switch>
               <Route exact path='/'>
                  <LoginForm />
               </Route>
               <Route exact path='/homepage'>
                  <HomePage />
               </Route>
               <Route exact path='/tasks'>
                  <Task />
               </Route>
            </Switch>
         </Router>
      </div>
   )
}

export default Wrapper;
