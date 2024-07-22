import React from 'react';
import  ReactDOM  from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';


function changeColor() {
    const div = document.getElementById("onmouse");
    div.style.backgroundColor = "yellow";
}

class project extends React.Component{
 constructor(){super()}
    render()
       {
         return(
            <body>
                <div class="Heading">
                    <div class="jumbotron text-center" id="Heading">
                        <h1 class="myname">Rockabye</h1>
                        <p class="myoccupation">Software Developer</p>
                        <button id="onmouse" onMouseEnter={changeColor} >button</button>
                    </div>
                </div>
            </body>
        )
    }
}

export default project;