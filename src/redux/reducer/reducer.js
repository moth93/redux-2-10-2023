import { ADD, DEL, EDIT } from "../action-type/action-type"

const initialState = {
    task: [{time:8, action:"drink a coffee",id:1}]
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {

  case ADD:
    return {task:[...state.task, action.payload]}
  case DEL:
    return {task:state.task.filter((el)=>el.id!=action.payload)}
  case EDIT:
    return {task:state.task?.map((el)=>{
        if(el.id===action.payload.id){
            return el=action.payload.data
        }})}

  default:
    return state
  }
}
export default Reducer
