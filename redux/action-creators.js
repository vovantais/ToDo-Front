
import {
   ADD_TASK,
   DELETE_TASK,
}
   from "./action-types";

export const AddTaskPost = ({value}) => ({
   type: ADD_TASK,
   payload: {
      value,
   },
});
export const DeleteTaskPost = () => ({
   type: DELETE_TASK,
});