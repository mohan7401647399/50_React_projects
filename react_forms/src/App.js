// import { useRef, useState } from 'react';
// import './App.css';
// import Input from './Componenet/Input';

// function App() {
//   // const [username, setUserName] = useState("");
//   // const usernameRef = useRef()
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const data = new FormData(e.target);
//     // console.log(data);
//     console.log(Object.fromEntries(data.entries()));
//     // console.log(usernameRef);
//   }
//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         {/* <Input placeholder="Username" refer={usernameRef} /> */}
//         <Input name="username" placeholder="Username" />
//         <Input name="email" placeholder="Email" />
//         <Input name="fullname" placeholder="Fullname" />
//         <Input name="xxx" placeholder="xxx" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;






import { useState } from 'react';
import './App.css';
import Input from './Componenet/Input';

function App() {

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username  ",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email  ",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday  ",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password  ",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirm Password",
      errorMessage: "Passwords don't match!",
      label: "confirm Password  ",
      pattern: values.password,
      required: true,
    },
  ]
  const handleSubmit = (e) => {
    e.preventDefault()
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Registration From</h1>
        {inputs.map((input) => (
          <Input key={input.id} {...input} value={values[input.name]} onChange={handleChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
