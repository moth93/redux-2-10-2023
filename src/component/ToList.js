import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { delTask } from '../redux/action/action'
import EditTask from './EditTask'


function ToList() {
    const dispatch=useDispatch()
    const tasks=useSelector(state=>state.task)
    console.log(tasks)
  return (
    <div>
{tasks.map(elt=>
    
    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{elt.action}</Card.Title>
        <Card.Text>
      {elt.time}
        </Card.Text>
        <Button variant="primary" onClick={()=>dispatch(delTask(elt.id))}>delete</Button>
        <EditTask props={elt} />
      </Card.Body>
    </Card>
    )}
    </div>
  )
}

export default ToList