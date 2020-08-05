import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { AddTaskPost, DeleteTaskPost } from '../redux/action-creators';
import PostCards from './PostCards';
function Task() {
   const initialState = {
      value: '',
   }
   const [InpVal, setInpVal] = useState(initialState);
   const tasks = useSelector(({ addPost }) => addPost); // с редакса добовляем reducers addPost
   const history = useHistory();
   const dispatch = useDispatch();

   const goBack = () => {
      history.goBack();
   }
   const handleChangeInput = (e) => {
      setInpVal({
         value: e.target.value,
      });
   }
   const handleAddTask = () => {
      dispatch(AddTaskPost(InpVal));
      setInpVal({
         value: '',
      });
   }
   const handleDeleteTask = () => {
      dispatch(DeleteTaskPost());
      setInpVal({
         value: '',
      });
   }
   return (
      <div className='container'>
         <form>
            <div className="form-group m-4">
               <label htmlFor="InputText" style={{ color: 'black' }}>ENTER POST</label>
               <input type="text"
                  className="form-control"
                  id="InputText"
                  style={{ width: 220 + "px" }}
                  onChange={handleChangeInput}
                  value={InpVal.value}
               />
            </div>
            <div className="btn-group mt-2 ml-4" role="group" aria-label="Basic example">
               <button type="button" className="btn btn-success" onClick={handleAddTask}>ADD</button>
               <button type="button" className="btn btn-danger" onClick={handleDeleteTask}>DELETE</button>
               <button type="button" className="btn btn-info" onClick={goBack}>Go back</button>
            </div>
         </form>
         {
            tasks.length > 0 ?
               tasks.map(({ value }, index) => (<PostCards {...{ value }} key={index}/>)) :
               false
         }
      </div >
   )
}

export default Task;
