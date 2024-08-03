// import React, { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import UpdateTask from './UpdateTask';
// import { useDispatch, useSelector } from 'react-redux';
// import { getTasksFromServer, removeTaskFromList, setSelectedTask } from '../Slices/taskSlice';


// function TaskLists() {
//   const {tasksList} = useSelector((state) => state.tasks)
//   const dispatch = useDispatch()

//     const updateTask = (task) => {
//         console.log('UpdateTask is done');
//         setModalShow(true)
//         dispatch(setSelectedTask(task))
//     }

//     useEffect(() => {
//       dispatch(getTasksFromServer())
//     },[dispatch])

//     const deleteTask = (task) => {
//         console.log('DeleteTask is done');
//         dispatch(removeTaskFromList(task))
//     }

//     const [modalShow, setModalShow] = useState(false);

//     return (
//       <>
//         <Table striped bordered hover>
//           <thead>
//             <tr className='text-center'>
//               <th>#</th>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasksList && tasksList.map((task,index) => {
//               return(
//                 <tr className='text-center' key={task.id}>
//                   <td>{index + 1}</td>
//                   <td>{task.title}</td>
//                   <td>{task.description}</td>
//                   <td><Button className='mx-4' variant="primary" onClick={() => updateTask(task)}><i className="bi bi-pencil-square"></i></Button> <Button variant="primary" onClick={() => deleteTask(task)}><i className="bi bi-trash3"></i></Button></td>
//               </tr>
//               )
//             })}
            
//           </tbody>
//         </Table>

//         <UpdateTask show={modalShow} onHide={() => setModalShow(false)}/>
//     </>
//     )
// }

// export default TaskLists



//        HTTP - DELETE

import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import UpdateTask from './UpdateTask';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTaskFromServer, getTasksFromServer, removeTaskFromList, setSelectedTask } from '../Slices/taskSlice';


function TaskLists() {
  const {tasksList} = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

    const updateTask = (task) => {
        console.log('UpdateTask is done');
        setModalShow(true)
        dispatch(setSelectedTask(task))
    }

    useEffect(() => {
      dispatch(getTasksFromServer())
    },[dispatch])

    const deleteTask = (task) => {
        console.log('DeleteTask is done');
        dispatch(deleteTaskFromServer(task)).unwrap().then(() => {
          dispatch(removeTaskFromList(task))
        })        
    }

    const [modalShow, setModalShow] = useState(false);

    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr className='text-center'>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasksList && tasksList.map((task,index) => {
              return(
                <tr className='text-center' key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td><Button className='mx-4' variant="primary" onClick={() => updateTask(task)}><i className="bi bi-pencil-square"></i></Button> <Button variant="primary" onClick={() => deleteTask(task)}><i className="bi bi-trash3"></i></Button></td>
              </tr>
              )
            })}
            
          </tbody>
        </Table>

        <UpdateTask show={modalShow} onHide={() => setModalShow(false)}/>
    </>
    )
}

export default TaskLists
