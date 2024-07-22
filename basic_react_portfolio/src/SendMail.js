import React from "react";
import './index.css';

class SendMail extends React.Component{
    constructor(){
        super()
        this.state = {subject:"", body:""}
    }
    validateForm = event =>{
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value;
    window.location.href = "mailto:enteryourmailid@gmail.com?subject="+subject+"&body"+body;
    event.preventDefault();
    return false;
    }
    render(){
        return(
            <div class="Heading">
                <h1 style={{textAlign:"center", color:"purple"}}>Mail Form</h1>
                <div class="container" id="Mail" ></div>
                    <div class="row">
                        <div class="col-sm-8 offset-sm-2">
                            <form class="justify-content center" onSubmit={this.validateForm} target="_blank" method="GET">
                                <div class="form-group form-group-lg">
                                    <label class="skills" id="subject">
                                        <strong>Name</strong>
                                    </label>
                                    <input type="text" id="subject" class="form-control" required></input>
                                </div>
                                
                                <div class="form-group form-group-lg">
                                    <label class="skills" id="body">
                                        <strong style={{color:"red"}}>Feedback</strong>
                                    </label>
                                    <textarea id="body" class="form-control" row="5" required></textarea>
                                </div>
                                <br></br>
                                <input type="submit" value="send" id="naviagation" class="btn btn-primary"/>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}
export default SendMail