<<<<<<< HEAD
import React from 'react';
import  ReactDOM  from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';


class contact extends React.Component{
    constructor(){super()}
        render()
        {
            return(
                <body>
                    <div>
                        <table class="table table-dark table-stripped">
                            <thead>
                            <tr>
                                <th>Project Domain</th>
                                <th>Programming Languages</th>
                                <th>Program Link</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Full stack</td>
                                    <td>React.Js</td>
                                    <td><a href="www.com">Project link</a></td>
                                </tr>
                                <tr>
                                    <td>Front-end</td>
                                    <td>HTML,CSS</td>
                                    <td><a href="www.com">Front-end link</a></td>
                                </tr>
                                <tr>
                                    <td>Back-end</td>
                                    <td>Python,Java</td>
                                    <td><a href="www.com">Back-end link</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </body>
        )
    }
}
=======
import React from 'react';
import  ReactDOM  from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';


class contact extends React.Component{
    constructor(){super()}
        render()
        {
            return(
                <body>
                    <div>
                        <table class="table table-dark table-stripped">
                            <thead>
                            <tr>
                                <th>Project Domain</th>
                                <th>Programming Languages</th>
                                <th>Program Link</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Full stack</td>
                                    <td>React,Js</td>
                                    <td><a href="www.com">Project link</a></td>
                                </tr>
                                <tr>
                                    <td>Front-end</td>
                                    <td>HTML,CSS</td>
                                    <td><a href="www.com">Front-end link</a></td>
                                </tr>
                                <tr>
                                    <td>Back-end</td>
                                    <td>Python,Java</td>
                                    <td><a href="www.com">Back-end link</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </body>
        )
    }
}
>>>>>>> 7457b611551508d6133a47c782f4fabe2504fd3d
export default contact;