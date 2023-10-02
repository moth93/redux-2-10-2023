import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../redux/action/action';
import { Form } from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);
  const [time,setTime] =useState(0);
  const [action,setAction]=useState("")
  const tasks=useSelector(state=>state.task)
  var data={time:time,action:action, id:tasks.length+1}

 const dispatch=useDispatch()
 const add=()=>{
    dispatch(addToDo(data))
    handleClose()
 }
  tasks.map((el,i)=>el.id=i+1)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Action</Form.Label>
              <Form.Control
                type="text"
                placeholder="Action"
                onChange={(e)=>setAction(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Time"
                autoFocus
                onChange={(e)=>setTime(e.target.value)}
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;