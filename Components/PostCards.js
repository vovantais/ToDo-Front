import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { DeleteTaskPost } from '../redux/action-creators';

function PostCards({ value, indexId }) {
   const [index, setIndex] = useState(indexId);
   const [done, setDone] = useState(false);
   const dispatch = useDispatch();
   const HandleClickInput = () => {
      setDone(!done);
   }
   const handleDeleteTask = () => {
      dispatch(DeleteTaskPost(index));
   }
   return (
      <div className="container-sm">
         <div className="card mt-3 bg-secondary text-warning ">
            <div className="card-body">
               {value}
               <input type="button" name="btn" className="btn btn-primary" onClick={HandleClickInput}
                  value={done ? 'Done' : 'Not done'}
               />
               <button type="button" className="btn btn-danger" onClick={handleDeleteTask}>DELETE</button>
            </div>
         </div>
      </div>
   )
}

export default PostCards
