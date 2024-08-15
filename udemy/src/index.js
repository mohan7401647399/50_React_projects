// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const Application = () => (
//   <div>
//       <h1>HI</h1>
//   </div>
// )
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Application/>)

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const Application = () => {
//   return React.createElement('h1',{className:'Title'},'Hello world')
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Application/>)



//                                      REACT FRAGMENTS

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const Application = () => (
//   <>
//     <h1>HI</h1>
//   </>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Application/>)


//                            CLASSES

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const Application = () => (
//   <div className="key">
//     <h1>HI</h1>
//     </div>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Application/>)


//                            child component added

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/header'

const Application = () => (
  <div className="key">
      <Header/>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Application/>)