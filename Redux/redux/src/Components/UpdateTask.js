// import React, { useEffect, useState } from 'react';
// import { Form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { UpdateTaskInList } from '../Slices/taskSlice';

// const UpdateTask = (props) => {
//     const {selectedTask} = useSelector((state) => state.tasks)

//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [id, setId] = useState(0)

//     const dispatch = useDispatch()

//     const UpdateTask = () => {
//         props.onHide()
//         dispatch(UpdateTaskInList({id,title,description}))
//     }
//     useEffect((state) => {
//         setTitle(selectedTask.title)
//         setDescription(selectedTask.description)
//         setId(selectedTask.id)
//     },[selectedTask])

//   return (
//     <>
//     <Modal {...props}size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
//         <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//             Update Task
//         </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>
//             <Form.Group className="mb-3">
//                 <Form.Label>Task Title</Form.Label>
//                 <Form.Control type="email" placeholder="Enter Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
//             </Form.Group>

//             <Form.Group className="mb-3">
//                 <Form.Label>Task Description</Form.Label>
//                 <Form.Control type="text" placeholder="Enter Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//             </Form.Group>
//         </Form>
//         </Modal.Body>
//         <Modal.Footer>
//         <div className='text-end'>
//             <Button variant="primary" type="submit" onClick={(e) => UpdateTask(e)}>
//                 Update Task
//             </Button>
//         </div>
//         </Modal.Footer>
//     </Modal>
      
//     </>
//   );
// }

// export default UpdateTask;




//              HTTP - PATCH

import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskInServer } from '../Slices/taskSlice';

const UpdateTask = (props) => {
    const {selectedTask} = useSelector((state) => state.tasks)

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState(0)

    const dispatch = useDispatch()

    const UpdateTask = () => {
        props.onHide()
        dispatch(updateTaskInServer({id,title,description}))
    }
    useEffect((state) => {
        setTitle(selectedTask.title)
        setDescription(selectedTask.description)
        setId(selectedTask.id)
    },[selectedTask])

  return (
    <>
    <Modal {...props}size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Update Task
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Task Title</Form.Label>
                <Form.Control type="email" placeholder="Enter Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Task Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <div className='text-end'>
            <Button variant="primary" type="submit" onClick={(e) => UpdateTask(e)}>
                Update Task
            </Button>
        </div>
        </Modal.Footer>
    </Modal>
      
    </>
  );
}

export default UpdateTask;
