import React from 'react';
import { Redirect, Link } from "react-router-dom";
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

class Register extends React.Component{
    constructor(props) {
        super(props);
        if (Meteor.user()) this.state = {redirect: '/'};
        else this.state = {redirect: null};
      }

    componentDidMount(){
        if (Meteor.user()) this.setState({uname:Meteor.user().username});
        else console.log('not logged in');
    }

      handleChange(event)  {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value  });
      }

      handleSubmit(event) {
        event.preventDefault();
        Accounts.createUser ({username :this.state.name, email:this.state.email, password:this.state.password},
            (error)=>{
            if (!error) this.setState({redirect: '/'});
            else console.log(error)});
      }

    render(){
        if (this.state.redirect) { return <Redirect to='/' /> }
        return(
            <div id="register" className="h-vh-100 d-flex flex-justify-center flex-align-center">
          <div  className="login-box">

            <form className="bg-white p-4" data-role="validator" data-clear-invalid="3000"
                    onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
                <img src="images/p-120x120.png" className="place-right mt-4-minus mr-5-minus" />
                <h1 className="mb-0">Register</h1>
                <div className="text-muted mb-4">Register a new membership</div>
                <div className="form-group">
                    <input name="name" type="text" data-role="input" placeholder="Full name" data-append="<span className='mif-user'>" data-validate="required" />
                    <span className="invalid_feedback">Please enter a valid email address</span>
                </div>
                <div className="form-group">
                    <input name="email" type="text" data-role="input" placeholder="Email" data-append="<span className='mif-envelop'>" data-validate="required" />
                    <span className="invalid_feedback">Please enter a valid email address</span>
                </div>
                <div className="form-group">
                    <input name="password" type="password" data-role="input" placeholder="Password" data-append="<span className='mif-key'>" data-validate="required" name="password" />
                    <span className="invalid_feedback">Please enter a password</span>
                    <input name="passowrd2" className="mt-4" type="password" data-role="input" placeholder="Retype password" data-append="<span className='mif-checkmark'>" data-validate="required equals=password" />
                    <span className="invalid_feedback">Please enter a password</span>
                </div>
                <div className="form-group d-flex flex-align-center flex-justify-between">
                    <input name="confirm" type="checkbox" data-role="checkbox" data-caption="I agree to the <a href='#'>terms</a>" />
                    <button className="button primary">Register</button>
                </div>
                <div className="text-center m-4">- OR -</div>
                <div className="form-group">
                    <button className="image-button w-100 mt-1 bg-facebook fg-white" type="button" >
                        <span className="mif-facebook icon"></span>
                        <span className="caption">Sign Up using Facebook</span>
                    </button>
                    <button className="image-button w-100 mt-1 bg-github fg-white" type="button">
                        <span className="mif-github icon"></span>
                        <span className="caption">Sign Up using GitHub</span>
                    </button>
                    <button className="image-button w-100 mt-1 bg-gitlab fg-white" type="button">
                        <span className="mif-gitlab icon"></span>
                        <span className="caption">Sign Up using GitLab</span>
                    </button>
                </div>
                <div className="form-group border-top bd-default pt-2">
                    <Link to='/login' className="d-block">I already have a membership</Link>
                </div>
            </form>
            </div>
            </div>
        );
    }
}

export default Register;