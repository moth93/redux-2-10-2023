import { ADD, DEL, EDIT } from "../action-type/action-type"

export const addToDo=(data) => {
return(
    {type:ADD,payload:data}
)
}
export const delTask=(id) =>{
    return (
        {type:DEL,payload:id}
    )
}
export const editTask=(id,data) =>{
    return (
        {type:EDIT,payload:{id:id,data:data}}
    )}