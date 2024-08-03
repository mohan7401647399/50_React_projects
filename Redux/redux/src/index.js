import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/User';
import themeReducer from './features/theme';

const store = configureStore({ reducer: { user: userReducer, theme: themeReducer } })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App/>
    </Provider>
  </React.StrictMode>
);



        //  REDUX ANOTHER SAMPLE

  //  Selector:
// const Action_1done = "Action_1done";
// const Action_2done = "Action_2done";

      //  Actions
    // OLD ACTION FORMAT:
// const actionLearning1 = () => {
//   return ( type: "Action 1done")
// }

// const actionLearning2 = () => {
//   return ( type: "Action 2done" )
// }

//  SIMPLE ACTION FORMAT

// const actionLearning1 = () => ({type: Action_1done})    //type is any name
// const actionLearning2 = () => ({type: Action_2done})


//        REDUCER:

// const reducerLearing = (state,actions) => {
//   switch (actions.type) {
//     case Action_1done:
//       return state = "action 1 is done"
//     case Action_2done:
//       return state = "action 2 is done`"  
//     default:
//       return state = "no actions selector"
//   }
// }

// let store = createStoreHook(reducerLearing);
// store.viewStore(() => {console.log(store.getState()) } )
// store.dispatch(actionLearning1());

// ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals




//        REDUX ANOTHER SAMPLE


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { store } from './Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>
);