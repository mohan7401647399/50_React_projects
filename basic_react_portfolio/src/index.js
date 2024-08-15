// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Mywebsite from './App.js';
// import reportWebVitals from './reportWebVitals';
// import './App.css';
// import './mystyle.scss';
// import styles from './demo.module.css';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



//                  REACT ES6


// class Demo{
//     methodone(){
//         var a=10;
//         var b=10;
//         var c=a+b;
//         document.getElementById('root').innerHTML=c;
//     }
//     }
// var mydemo=new Demo();
// mydemo.methodone();


//     var a= function()
//         var a=10;
//         var b=10;
//         var c=a+b;
//         document.getElementById('root').innerHTML=c;
//    a();

// var a= () => 
//     var a=10;
//     var b=10;
//     var c=a+b;
//     document.getElementById('root').innerHTML=c;
// a();

// var a= (x) => 
// {
//   var a=5;
//    if(a===5);
//   {
//     let a=10;
//     // document.getElementById('root').innerHTML=a;
//   }
//     document.getElementById('root').innerHTML=a;
// }
// a();


//                         react JSX

// const myele = React.createElement('h1',{},"Hello world");
// ReactDOM.render(myele,document.getElementById('root'));

// const myele = <h1>Hello world</h1>
// ReactDOM.render(myele,document.getElementById('root'));

// var mystyle = {
//     color: 'blue',
//     textAlign:'center'
// }

// const myele = <div style = {mystyle}>
//     <h1>Hello world {74+1} </h1>
//         <h2>HI</h2>
//             <p>Welcome</p>
// </div>
// ReactDOM.render(myele,document.getElementById('root'));


// const myele = <div>
//     <h1 className='header' >Hello world {74+1} </h1>
//         <h2>HI</h2>
//             <p>Welcome</p>
// </div>
// ReactDOM.render(myele,document.getElementById('root'));


//                  REACT COMPONENTS

//  TWO TYPES OF COMPONENETS

// 1. FUNCTIONAL COMPONENETS:
// 2. CLASS COMPONENETS:


// 1.FUNCTIONAL COMPONENETS:

// function Header() {
//     return<h1>Rockabye</h1>
// }
// ReactDOM.render(<Header />,document.getElementById('root'))


// function Header() {
//     return <div>
//     <h1>Rockabye</h1>
//     <h2>Hi</h2>
//     </div>
// }
// ReactDOM.render(<Header />,document.getElementById('root'))


// function Header() {
//     return <div>
//     <h1>Rockabye</h1>
//     <h2>Hi</h2>
//     </div>
// }
// function Sidebar(){
//     return<h2>React</h2>
// }
// function Navbar(){
//     return<h2>React learning</h2>
// }

// function Website(){
//    return <div>
//         <Header />
//         <Sidebar />
//         <Navbar />
//     </div>
// }
// ReactDOM.render(<Website />,document.getElementById('root'))


// 2. CLASS COMPONENTS:

// class Mywebsite extends React.Component
// {
//     render()
//     {
//         return<h1>Rockabye</h1>
//     }
// }
// ReactDOM.render(<Mywebsite />,document.getElementById('root'))

// class Mywebsite extends React.Component
// {
//     render()
//     {
//         return<h1>Rockabye</h1>
//     }
// }
// class Mynewwebsite extends React.Component
// {
//     render()
//     {
//         return<div>
//         <Mywebsite />
//         <h1>React</h1>
//         </div>
//     }
// }


// class Mynewwebsite extends React.Component
// {
//     render()
//     {
//         return<div>
//         <Mywebsite />
//         <h1>React</h1>
//         </div>
//     }
// }

// ReactDOM.render(<Mynewwebsite />,document.getElementById('root'))


//              REACT PROPS

// class Learnreactprops extends React.Component{

//     render(){
//             return <h1>learn {this.props.topic}</h1>
//     }
// }
// ReactDOM.render(<Learnreactprops topic="reactjs"/>,document.getElementById('root'))


// class Learnreactprops extends React.Component{

//     render(){
//             return <h1>learn {this.props.topic} in {this.props.language}</h1>
//     }
// }
// ReactDOM.render(<Learnreactprops topic="reactjs" language="tamil"/>,document.getElementById('root'))


// class Learnreactpropsparent extends React.Component{

//     render(){
//             return <h1>learn in {this.props.var}</h1>
//     }
    
// }

// class Learnreactpropschild extends React.Component{

//     render(){
//         const v="English";
//         return <Learnreactpropsparent var={v}/>
//     }
// }
// ReactDOM.render(<Learnreactpropschild/>,document.getElementById('root'))


// class Learnreactpropsparent extends React.Component{

//     render(){
//             return <h1>learn {this.props.var.language} in {this.props.var.concept}</h1>
//     }
    
// }

// class Learnreactpropschild extends React.Component{

//     render(){
//         const v={topic:"reactjs",language:"english",concept:"props"};
//         return <Learnreactpropsparent var={v}/>
//     }
// }
// ReactDOM.render(<Learnreactpropschild/>,document.getElementById('root'))

// class Learnreactpropsparent extends React.Component{

//     render(){
//             return <h1>learn {this.props.concept} in {this.props.language}</h1>
//     }
    
// }

// Learnreactpropsparent.defaultProps={concept:"props",language:"tamil"}
// ReactDOM.render(<Learnreactpropsparent concept="component"/>,document.getElementById('root'))



//                      REACT STATE
//                  INITIALVALUE

// class Reactstate extends React.Component{
//     constructor(){
//         super();
//         this.state={initalvalue:"Welcome",name:"HI"}
//     }
//     render(){
//         return<h1>{this.state.initalvalue} {this.state.name} </h1>
//     }
// }
// ReactDOM.render(<Reactstate />,document.getElementById('root'));


//                  change value

// class Reactstate extends React.Component{
//     constructor(){
//         super();
//         this.state={initalvalue:"Welcome",name:"HI"}
//     }
//     changevalue=()=>
//     {
//         this.setState({initalvalue:"Thanks for watching"});
//     }
//     render(){
//         return<div>
//         <h1>{this.state.initalvalue} {this.state.name} </h1>
//         <br/>
//         <button type='button' onClick={this.changevalue}> Exit</button>
//         </div>
//     }
// }
// ReactDOM.render(<Reactstate />,document.getElementById('root'));




//              REACT LIFECYCLE

// 1.initial Phase
// 2. Mounting Phase
// 3. Updating Phase
// 4. Unmountin Phase

// class Lifecycle extends React.Component{
//     constructor(){
//         super();
//         this.state={initalvalue:"Welcome",name:"Guys"}
//     }
//     componentWillMount(){
//         alert("learn react lifecycle")
//     }
//     render(){
//         return <h1>{this.state.initalvalue} {this.state.name} </h1>
//         }
// }
// ReactDOM.render(<Lifecycle />,document.getElementById('root'));

// class Lifecycle extends React.Component{
//     constructor(){
//         super();
//         this.state={value:"Welcome",name:"Guys"}
//     }
//     componentWillMount()
//     {
//         alert("Learn Reactjs lifecycle");
//     }
//     render()
//     {
//         return <h1>{this.state.value} {this.state.name} </h1>
//     }
//     componentDidMount()
//     {
//         setTimeout(()=>{
//             this.setState({value:"Thanks"})},5000)
//     }
// }
// ReactDOM.render(<Lifecycle />,document.getElementById('root'));


// class Lifecycle extends React.Component{
//     constructor(){
//         super();
//         this.state={value:"Welcome",name:"Guys"}
//     }
//     componentWillMount()
//     {
//         alert("Learn Reactjs lifecycle");
//     }
//     render()
//     {
//         return <div>
//          <h1>{this.state.value} {this.state.name} </h1>
//          <br/>
//          <button type='button' onClick={this.changevalue}>Change Value</button>
//          </div>
//     }
//     changevalue=()=>
//     {
//         this.setState({value:"Learn react in tamil"})
//     }
//     componentDidMount()
//     {
//         setTimeout(()=>{
//             this.setState({value:"Thanks"})},5000)
//     }
// }
// ReactDOM.render(<Lifecycle />,document.getElementById('root'));

// class Lifecycle extends React.Component{
//     constructor(){
//         super();
//         this.state={value:"Welcome",name:"Guys"}
//     }
//     componentWillMount()
//     {
//         alert("Learn Reactjs lifecycle");
//     }
//     render()
//     {
//         return <div>
//          <h1>{this.state.value} {this.state.name} </h1>
//          <br/>
//          <button type='button' onClick={this.changevalue}>Change Value</button>
//          </div>
//     }
//     changevalue=()=>
//     {
//         this.setState({value:"Learn react in tamil"})
//     }
//     componentDidMount()
//     {
//         setTimeout(()=>{
//             this.setState({value:"Thanks"})},5000)
//     }
//     componentWillUpdate()
//     {
//         alert("Do you want a new value")
//     }
// }
// ReactDOM.render(<Lifecycle />,document.getElementById('root'));


// class Lifecycle extends React.Component{
//     constructor(){
//         super();
//         this.state={value:"Welcome",name:"Guys"}
//     }
//     componentWillMount()
//     {
//         alert("Learn Reactjs lifecycle");
//     }
//     render()
//     {
//         return <div>
//          <h1>{this.state.value} {this.state.name} </h1>
//          <br/>
//          <button type='button' onClick={this.changevalue}>Change Value</button>
//          </div>
//     }
//     changevalue=()=>
//     {
//         this.setState({value:"Learn react in tamil"});  
//     }
//     componentDidMount()
//     {
//         setTimeout(()=>{
//             this.setState({value:"Thanks"})},5000)
//     }
//     componentWillUpdate()
//     {
//         alert("Do you want a new value");
//     }
//     componentDidUpdate()
//     {
//         document.getElementById("mydiv").innerHTML="NEW VALUE UPDATED SUCCESSFULLY"+this.state.value;
//     }
//    
// }
// ReactDOM.render(<Lifecycle />,document.getElementById('root'));


// class Lifecycle extends React.Component{
//     constructor(){
//         super();
//         this.state={value:"Welcome",name:"Guys"}
//     }
//     componentWillMount()
//     {
//         alert("Learn Reactjs lifecycle");
//     }
//     render()
//     {
//         return <div>
//          <h1>{this.state.value} {this.state.name} </h1>
//          <br/>
//          <button type='button' onClick={this.changevalue}>Change Value</button>
//          </div>
//     }
//     changevalue=()=>
//     {
//         this.setState({value:"Learn react in tamil"});  
//     }
//     componentDidMount()
//     {
//         setTimeout(()=>{
//             this.setState({value:"Thanks"})},5000)
//     }
//     componentWillUpdate()
//     {
//         alert("Do you want a new value");
//     }
//     componentDidUpdate()
//     {
//         document.getElementById("mydiv").innerHTML="NEW VALUE UPDATED SUCCESSFULLY"+this.state.value;
//     }
//     shouldComponentUpdate()
//     {
//         return false;
//     }
// }
// ReactDOM.render(<Lifecycle />,document.getElementById('root'));

// class Lifecycle extends React.Component{
//     constructor(){
//         super();
//         this.state={value:"Welcome",name:"Guys"}
//     }
//     componentWillMount()
//     {
//         alert("Learn Reactjs lifecycle");
//     }
//     render()
//     {
//         return <div>
//          <h1>{this.state.value} {this.state.name} </h1>
//          <br/>
//          <button type='button' onClick={this.changevalue}>Change Value</button>
//          <button type='button' onClick={this.deletheader}>Delete Header</button>
//          </div>
//     }
//     changevalue=()=>
//     {
//         this.setState({value:"Learn react in tamil"});  
//     }
//     componentDidMount()
//     {
//         setTimeout(()=>{
//             this.setState({value:"Thanks"})},5000)
//     }
//     componentWillUpdate()
//     {
//         alert("Do you want a new value");
//     }
//     componentDidUpdate()
//     {
//                 document.getElementById("mydiv").innerHTML="NEW VALUE UPDATED SUCCESSFULLY"+this.state.value;
//     }
//     shouldComponentUpdate()
//     {
//         return true;    
//     }
//     deletheader=()=>
//     {
//         this.setState({value:false, name:false})
//     }
//     componentWillUnmount()
//     {
//         alert("Header Deleted")
//     }
// }
// ReactDOM.render(<Lifecycle />,document.getElementById('root'));



//              React Event handling

// class Eventbind extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={msg:"Welcome"}
//     }
//     clickEvent=()=>
//     {
//         this.setState({msg:"Thanks"})
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h1>{this.state.msg}</h1>
//                 <button onClick={this.clickEvent}>Click</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Eventbind />,document.getElementById('root'))


//                  React Arguments

// class Eventbind extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={msg:"Welcome"}
//     }
//     clickEvent=(a)=>
//     {
//         this.setState({msg:a})
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h1>{this.state.msg}</h1>
//                 <button onClick={()=>this.clickEvent("Hello World")}>Click</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Eventbind />,document.getElementById('root'))


//                  React bind

// class Eventbind extends React.Component{
//     constructor()
//     {
//         super()
//         this.state={msg:"Welcome"}
//     }
//     clickEvent=(a)=>
//     {
//         this.setState({msg:a})
//     }
//     render()
//     {
//         return(
//             <div>
//                 <h1>{this.state.msg}</h1>
//                 <button onClick={this.clickEvent.bind(this,"Hello World")}>Click</button>
//                 <button onMouseOver={this.clickEvent.bind(this,"Hello World")}>Click</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Eventbind />,document.getElementById('root'))


//                      React CSS

// 1. inline styling
// 2. CSS StyleSheet
// 3. CSS Module


//                                              NORMAL CSS = inline
// class Reactstyle extends React.Component{
//     render()
//     {
//         return(
//             <div>
//                 <h1 style={{color:"red",textAlign:'center'}} >Hello World</h1>
//                 <h2>Welcome</h2>
//                 <h3>Thanks</h3>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Reactstyle />,document.getElementById('root'))


//                                          JAVASCRIPT USING CSS = inline
// class Reactstyle extends React.Component{
//     render()
//     {
//         const mystyle = {
//             color:"blue",
//             fontFamily:"Arial"
//         };
//         return(
//             <div>
//                 <h1 style={{color:"red",textAlign:'center'}} >Hello World</h1>
//                 <h2 style={mystyle} >Welcome</h2>
//                 <h3 className='App'>Thanks</h3>
//                 <h3 className={styles.heading}>Thanks</h3>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Reactstyle />,document.getElementById('root'))


//                              React SASS
//          import ./scss
// class Reactstyle extends React.Component{
//         render()
//         {
//             return(
//                 <div>
//                     <h1>Hello World</h1>
//                     <h2>Welcome</h2>
//                     <h3>Thanks</h3>
//                 </div>
//             )
//         }
//     }
//     ReactDOM.render(<Reactstyle />,document.getElementById('root'))
    
//                          REACT FORMS

// import React from 'react';
// import ReactDOM from 'react-dom';

// class Reactform extends React.Component{
//     constructor(){
//     super();
//     this.state={username:""};
//     }
//     uservalue=(event)=>
//     {
//         this.setState({username:event.target.value})
//     }
//     render()
//     {
//         return(
//             <form>
//                 <h1>Hello {this.state.username}</h1>
//                 Enter Your Name:  <input type='text' name="username" onChange={this.uservalue}/>    
//             </form>
//         )
//     }
// }
// ReactDOM.render(<Reactform />,document.getElementById('root'))


// import React from 'react';
// import ReactDOM from 'react-dom';

// class Reactform extends React.Component{
//     constructor(){
//     super();
//     this.state={username:"" , age:null , errmsg:""};
//     }
//     uservalue=(event)=>
//     {
//         let n=event.target.name;
//         let v=event.target.value;
//         let err="";
//         if(n==="age"){
//             if(v!="" && !Number(v))
//             {
//                 err=<strong>Invalid value, Your age not muse be a Number</strong>
//             }
//         }
//         this.setState({errmsg:err});
//         this.setState({[n]:v});
//     }
//     render()
//     {
//         return(
//             <form>
//                 <h1>Hello {this.state.username}</h1>
//                 <h2>Age {this.state.age}</h2>
//                 Enter Your Name:  <input type='text' name="username" onChange={this.uservalue}/>    
//                 Enter Your Age:  <input type='text' name="age" onChange={this.uservalue}/> {this.state.errmsg}
//             </form>
//         )
//     }
// }
// ReactDOM.render(<Reactform />,document.getElementById('root'))


// import React from 'react';
// import ReactDOM from 'react-dom';

// class Reactform extends React.Component{
//     constructor(){
//     super();
//     this.state={username:"" , age:null , errmsg:""};
//     }
//     uservalue=(event)=>
//     {
//         let n=event.target.name;
//         let v=event.target.value;
//         let err="";
//         if(n==="age"){
//             if(v!="" && !Number(v))
//             {
//                 err=<strong>Invalid value, Your age not muse be a Number</strong>
//             }
//         }
//         this.setState({errmsg:err});
//         this.setState({[n]:v});
//     }
//     formsubmit=(event)=>
//     {
//         event.preventDefault();
//         alert("Your Name" + this.state.username)
//     }
//     render()
//     {
//         return(
//             <form onSubmit={this.formsubmit}>
//                 <h1>Hello {this.state.username}</h1>
//                 <h2>Age {this.state.age}</h2>
//                 Enter Your Name:  <input type='text' name="username" onChange={this.uservalue}/>    
//                 Enter Your Age:  <input type='text' name="age" onChange={this.uservalue}/> {this.state.errmsg}
//                 <input type="submit"/>
//             </form>
//         )
//     }
// }
// ReactDOM.render(<Reactform />,document.getElementById('root'))


//                                          REACT FRAGMENTS

// import React from 'react';
// import ReactDOM from 'react-dom';

// class Tablecreation extends React.Component{
//     render()
//     {
//         return(
//             <React.Fragment>
//                 <h1>Hello World</h1>
//                 <p>Hii</p>
//                 <h2>How are you</h2>
//             </React.Fragment>
//         )
//     }
// }
// ReactDOM.render(<Tablecreation/>,document.getElementById('root'))

// import React from 'react';
// import ReactDOM from 'react-dom';

// class Tablecreation extends React.Component{
//     render()
//     {
//         return(
//                 <table>
//                     <tr>
//                         <Rowcreateion/>
//                     </tr>
//                 </table>
//         )
//     }
// }
// class Rowcreateion extends React.Component{
//     render(){
//         return(
//             <React.Fragment>
//                 <td>Hii</td>
//                 <td>Hiiiiii</td>
//             </React.Fragment>
//         )
//     }
// }
// ReactDOM.render(<Tablecreation/>,document.getElementById('root'))

// import React from 'react';
// import ReactDOM from 'react-dom';

// class Tablecreation extends React.Component{
//     render()
//     {
//         return(
//                 <table>
//                     <tr>
//                         <Rowcreateion/>
//                     </tr>
//                 </table>
//         )
//     }
// }
// class Rowcreateion extends React.Component{
//     render(){
//         return(
//             <>
//                 <td>Hii</td>
//                 <td>Hiiiiii</td>
//             </>
//         )
//     }
// }
// ReactDOM.render(<Tablecreation/>,document.getElementById('root'))



//                                      REACT LISTS


// import React from 'react';
// import ReactDOM from 'react-dom';

// const newlist = [1,2,3,4]
// const rl = newlist.map(
//     (listvalues)=>{
//         return<li>{listvalues}</li>
//     }
// )
// ReactDOM.render(<ul>{rl}</ul>,document.getElementById('root'))


// import React from 'react';
// import ReactDOM from 'react-dom';

// const newlist = [1,2,3,4,"hi"]
// const rl = newlist.map(
//     (listvalues)=>{
//         return<li>{listvalues + "" + newlist}</li>
//     }
// )
// ReactDOM.render(<ul>{rl}</ul>,document.getElementById('root'))


// import React from 'react';
// import ReactDOM from 'react-dom';

// function Menubar()
// {
// const newlist = [1,2,3,4,"hi"]
// const rl = newlist.map(
//     (listvalues)=>{
//         return<li>{listvalues}</li>
//     }
// )
// return <ul>{rl}</ul>
// }
// ReactDOM.render(<Menubar newlist/>,document.getElementById('root'))


// import React from 'react';
// import ReactDOM from 'react-dom';

// function Menubar(props)
// {
// const myvalue = props.myvalue;
// const rl = myvalue.map(
//     (listvalues)=>{
//         return<li>{listvalues}</li>
//     }
// )
// return <ul>{rl}</ul>
// }
// const myvalue = [2,3,4,5]
// ReactDOM.render(<Menubar myvalue = {myvalue} />,document.getElementById('root'))


//                      REACT KEYS

// import React from 'react';
// import ReactDOM from 'react-dom';

// function Menubar(props)                                                  3
// {
//     const content = props.data.map((show)=>                              4        
//         <div>
//             <h3>{show.id} : {show.title} : {show.content}</h3>
//         </div>
//     )
//     return(
//         <div>
//             {content}
//         </div>
//     )
// }

// const myvalue = [                                                        1
//     {id:1, title:"First", content: "Welcome to First"},
//     {id:2, title:"Second", content: "Welcome to Second"},
// ];
// ReactDOM.render(                                                         2
    // <Menubar data={myvalue}/>,document.getElementById('root'))              6


// import React from 'react';
// import ReactDOM from 'react-dom';

// function Listkey(props){                                            6
//     const item = props.item;                                            7
//     const key = props.keys;
//     return(
//         <li>{key} {item}</li>                                       9
//     )
// }
// function Mylist(props){                                                3
//     const listitem = props.myvalue.map((listvalue) =>                   4       10
//     <Listkey keys={listvalue} item={listvalue}/>                        5
//     )
// return(                                                                     11
//     <div>
//         <h2>Correct key usage example</h2>
//         <ul>{listitem}</ul>
//     </div>
// )
// }
// const mydata = [200,1000,2000,3000];                                        1
// ReactDOM.render(                                                            2
// <Mylist myvalue={mydata}/>,document.getElementById('root'))                 12



//                                              REACT HOOKS

//                                          REACT HOOKS STATE


//                      USESTATE
// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';

// function ReactHooks(){
//     const [count,updatecount] = useState(0);
//     return(
//         <div>
//             <p>You clicked the above button {count} times </p>
//             <button onClick={ ()=> updatecount(count+1) }>
//                 Click Me
//             </button>
//         </div>
//     )
// }
// ReactDOM.render(<ReactHooks/>,document.getElementById('root'))


// //                                                        USEEFFECT
// import React, {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom';

// function ReactHooks(){
//     const [count,updatecount] = useState(0);
//     useEffect(()=>{
//             alert("Hello World");
//         }
//     )
//     return(
//         <div>
//             <p>You clicked the above button {count} times </p>
//             <button onClick={ ()=> updatecount(count+1) }>
//                 Click Me
//             </button>
//         </div>
//     )
// }
// ReactDOM.render(<ReactHooks/>,document.getElementById('root'))


    

//                                                  REACT ROUTER


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link, NavLink, Switch, Routes } from 'react-router-dom'
// import Home from './Home';
// import About from './About';
// import Join from './joinus';

// const routing = (
//         <Router>
//     <div>
//             <h1>React Route Example</h1>
//             <Routes>
//             <Route path="/" component={<Home />}/>
//             <Route exact path="/a" component={<About />}/>
//             <Route exact path="/j" component={<Join />}/>
//             </Routes>
//         </div>
//         </Router>
// )
// ReactDOM.render(routing,document.getElementById('root'))


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link, NavLink, Switch, Routes } from 'react-router-dom'
// import Home from './Home';
// import About from './About';
// import Join from './joinus';

// const routing = (
//         <Router>
//     <div>
//             <h1>React Route Example</h1>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/a">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/j">join</Link>
//                 </li>
//             </ul>
//             <Routes>
//             <Route path="/" component={<Home />}/>
//             <Route exact path="/a" component={<About />}/>
//             <Route exact path="/j" component={<Join />}/>
//             </Routes>
//         </div>
//         </Router>
// )
// ReactDOM.render(routing,document.getElementById('root'))

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link, NavLink, Switch, Routes } from 'react-router-dom'
// import Home from './Home';
// import About from './About';
// import Join from './joinus';

// const routing = (
//         <Router>
//     <div>
//             <h1>React Route Example</h1>
//             <ul>
//                 <li>
//                     <NavLink to="/" exact activeStyle={{color:"red"}}>Home</NavLink>
//                 </li>
//                 <li>
//                 <NavLink to="/a" exact activeStyle={{color:"red"}}>About</NavLink>
//                 </li>
//                 <li>
//                 <NavLink to="/j" exact activeStyle={{color:"red"}}>Join</NavLink>
//                 </li>
//             </ul>
//             <Routes>
//             <Route path="/" component={<Home />}/>
//             <Route exact path="/a" component={<About />}/>
//             <Route exact path="/j" component={<Join />}/>
//             </Routes>
//         </div>
//         </Router>
// )
// ReactDOM.render(routing,document.getElementById('root'))



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Link, NavLink, Switch, Routes } from 'react-router-dom'
// import Home from './Home';
// import About from './About';
// import Join from './joinus';
// import Notfound from './NotFound'

// const routing = (
//         <Router>
//     <div>
//             <h1>React Route Example</h1>
//             <ul>
//                 <li>
//                     <NavLink to="/" exact activeStyle={{color:"red"}}>Home</NavLink>
//                 </li>
//                 <li>
//                 <NavLink to="/a" exact activeStyle={{color:"red"}}>About</NavLink>
//                 </li>
//                 <li>
//                 <NavLink to="/j" exact activeStyle={{color:"red"}}>Join</NavLink>
//                 </li>
//             </ul>
            
//             <Routes>
//             <Switch>
//             <Route path="/" component={Home}/>
//             <Route exact path="/a" component={About}/>
//             <Route exact path="/j" component={Join}/>
//             <Route component={Notfound}/>
//             </Switch>
//             </Routes>
//         </div>
//         </Router>
// )
// ReactDOM.render(routing,document.getElementById('root'))



//                                                           REACT +REDUX

//                                              ( ACTION, REDUCERS, STORE, VIEW)

//  ACTION   =>  some actions
//  REDUCERS  => TRIGGERED THAT ACTIONS
//  STORE  => STORED THAT NEW ACTIONS
//  VIEW  => VIEW THE NEW ACTIONS




//                                                      REACT + BOOTSTRAP

// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class Login extends React.Component{
//     render(){
//         return(
//             <div class="row">
//                 <div class="col-md-8 offset-md-2">
//                     <form>
//                         <div class="form-group">
//                             <h1 style={{color:"Blue", textAlign:"center"}} >Login</h1>
//                             <label class="skills" for="subject">Username: </label>
//                             <input type="text" id="username" class="form-control" required/>                            
//                         </div>
//                         <div>
//                             <label class="skills"  for="Body">Password: </label>
//                             <input type="password" id="pwd" required class="form-control" />
//                         </div>
//                         <br></br>
//                         <input type="submit" value="Login" id="navigation" class="btn btn-primary"/>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Login/>,document.getElementById('root'))




//                                  REACT - SIGNUPFORM

// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import SignUpForm from './SignUpForm';

// class Mainpage extends React.Component{
//     render(){
//         return(
//             <div>
//                 <SignUpForm/>
//             </div>
//         )
//     }
// }



// ReactDOM.render(<Mainpage/>,document.getElementById('root'))



//                                          CREATING MAIL FORM USING REACT JS


// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import SendMail from './SendMail';

// class Mainpage extends React.Component{
//     render(){
//         return(
//             <div>
//                  <SendMail/>
//              </div>
//         )
//     }
// }

// ReactDOM.render(<Mainpage/>,document.getElementById('root'))


//                                      React Project - CRUD operation in react js


// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'
// import { AiFillDelete } from "react-icons/ai";
// import { AiFillFileAdd } from "react-icons/ai";


// const AddTask = ({addTask}) => {
//     const [value,updateValue] = useState("");


// const handelSubmit = e =>{
//     e.preventDefault();
//     if(value !=="")
//     {
//         addTask(value)
//         updateValue("");
//     }
// }
// return(
//     <form onSubmit={handelSubmit}>
//         <input type="text" value={value} placeholder='Enter Your task todo' onChange={e=> updateValue(e.target.value)}/>
//         <button type="submit"> <i class="material-icons"><AiFillFileAdd/></i></button>
//     </form>
// )
// }
// const ToDoList = () => {
//     const addTask = text => updateTask([...tasks,{text}])
//     const [tasks, updateTask] = useState([
//         {
//         text:"Wake Up",
//         isCompleted:false
//     },
//     {
//         text:"Fresh Up",
//         isCompleted:false
//     },
//     {
//         text:"Boost Up",
//         isCompleted:false
//     }
//     ])

//     const toggleTask = index =>{
//         const newTask = [...tasks]
//         if(newTask[index].isCompleted)
//         {
//             newTask[index].isCompleted = false;
//         }
//         else{
//             newTask[index].isCompleted = true;
//         }
//         updateTask(newTask);
//     }
//     const removeTask = index =>{
//         const newTask = [...tasks];
//         newTask.splice(index,1);
//         updateTask(newTask) ;   
//     }
//     return(
//         <div className='list-of-tasks-todo'>
//             {tasks.map((task,index) =>(
//             <div className='task-status'>
//                 <span onClick={()=> toggleTask(index)} className={task.isCompleted? "task-name completed-task":"task-name"}>
//                 {/* {index} */}
//                 {task.text}
//                 </span>
//                 <button onClick={() => removeTask(index)}> <i class="material-icons"><AiFillDelete/></i></button>              
//             </div>))
//             }
//             <AddTask addTask={addTask}/>
//         </div>
//     );
// }
// ReactDOM.render(<ToDoList/>,document.getElementById('root'))



//                              REACT JS PROJECT

import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link,Routes, Switch,NavLink} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Project from "./Project";
import Youtube from './Youtube';
import Contact from './Contact';
import Notfound from './NotFound';
// 
const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Project" component={Project}/>
                <Route path="/Youtube" component={Youtube}/>
                <Route path="/Contact" component={Contact}/>
                <Route component={Notfound}/>
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(routing,document.getElementById('root'));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
