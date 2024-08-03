// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// const App = () => {
//   const views = useSelector(state => state);
//   const dispatch = useDispatch()
//   return (
//       <p>{views}</p>
//   );
// }

// export default App;



//        REDUX in SIGLE COMPONENT:

// import React from 'react';
// import { legacy_createStore as createStore } from 'redux';
// import { Provider, connect } from 'react-redux';

// const countReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "ADD":
//       return state + 1; 
//     case "SUBTRACT":
//       return state - 1; 
//     default:
//       return state;
//   }
// };
// const store = createStore(countReducer);

// const mapStateToProps = state => {
//   return {
//     count: state
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     add: () => dispatch({type: "ADD"}),
//     subtract: () => dispatch({type: "SUBTRACT"})
//   };
// };

// const Componenet = ({count, add, subtract}) => {
//   return(
//     <div>
//       <h1>Count = {count}</h1>
//       <button onClick = {add}>ADD</button>
//       <button onClick = {subtract}>Subtract</button>
//     </div>
//   );
// };

// const Container = connect(mapStateToProps, mapDispatchToProps)(Componenet);

// const App = () => {
//   return (
//     <Provider store = {store}>
//       <Container/>
//     </Provider>
//   );
// };

// export default App;




//            REDUX ANOTHER SAMPLE


// import './App.css';
// import Profile from './Profile';
// import Login from './Login';
// import ColorSelector from './ColorSelector';

// function App() {
//   return (
//     <div className="App">
//       <Profile/>
//       <Login/>
//       <ColorSelector/>
//     </div>
//   );
// }

// export default App;





//            REDUX ANOTHER SAMPLE


import { Col, Container, Row } from 'react-bootstrap';
import AddTask from './Components/AddTask';
import Navbar from './Components/Navbar';
import TaskLists from './Components/TaskLists';
// import './App.css';

function App() {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col lg='6'>
          <Navbar/>
          <AddTask/>
          <TaskLists/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;