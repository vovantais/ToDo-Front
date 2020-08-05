import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function HomePage() {
   const history = useHistory();

   const handeleClick = () => {
      history.push("/");
   };

   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
               <ul className="navbar-nav m-2">
                  <li className="nav-item active pr-5">
                     <NavLink exact to='/homepage'>HOME</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink exact to='/task'>TASK</NavLink>
                  </li>
               </ul>
            </div>
         </nav>
         <button type="button" className="btn btn-info m-2" onClick={handeleClick}>Go back</button>
      </div>
   )
}

export default HomePage;
