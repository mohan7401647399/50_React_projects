import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

class SignUpForm extends React.Component{
    constructor(){
        super();
        this.state={username:"",pno:null,errmsg:""};
    }
    uservalue= (event) =>
    {
        let n = event.target.name;
        let v = event.target.value;
        let err = "";
        if(n==="pno"){
            if(v!=="" && !Number(v))
            {err = <strong>Invalid value,enter number</strong>}
        }
        this.setState({errmsg:err});
        this.setState({[n]:v});
    }
    render()
    {
        return(
            <form class="was-validated container container-sm border">
                <div class="form-group">
                    <h1 style={{color:"blue",textAlign:"center"}} >Welcome {this.state.username}</h1>
                    <label for="uname">Username:</label>
                    <input type="class" class="form-control" id="name" onChange={this.uservalue} placeholder="Enter Username" name="username" required/>
                </div>
                <div class="form-group">
                    <label for="uname">Phone Number:</label>
                    <input type="text" class="form-control" id="pno" onChange={this.uservalue} placeholder="Enter Phonenumber" name="pno" required/>{this.state.errmsg}
                </div>
                <div class="form-group">
                    <label for="uname">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter Password" name="pwd" required/>
                </div>
                <div class="form-group form-check">
                    <label class="form-check-label" >
                    <input type="checkbox" class="form-check-input" name="remember" required/>I agree the Terms and condition
                    </label>
                </div>                  
                <button type="submit" class="btn btn-primary">SignUp Form</button>

            </form>
        )
    }
}
export default SignUpForm