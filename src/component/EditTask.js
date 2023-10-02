import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, editTask } from '../redux/action/action';
import { Form } from 'react-bootstrap';

function EditTask({props}) {
  const [show, setShow] = useState(false);
  const [time,setTime] =useState(props.time);
  const [action,setAction]=useState(props.action)
  const tasks=useSelector(state=>state.task)
  var data={time:time,action:action, id:props.id}

 const dispatch=useDispatch()
 const edit=()=>{
    dispatch(editTask(props.id,data))
    handleClose()
 }


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  tasks.map((el,i)=>el.id=i+1)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        edit
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
                defaultValue={props.action}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                placeholder="Time"
                autoFocus
                onChange={(e)=>setTime(e.target.value)}
                defaultValue={props.time}
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={edit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;