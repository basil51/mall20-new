import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class Login extends React.Component{
    constructor(props) {
        super(props);
        if (Meteor.user()) this.state = {redirect: '/'};
        else this.state = {redirect: null};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event)  {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }

      handleSubmit(event) {
        event.preventDefault();
        Meteor.loginWithPassword(this.state.email , this.state.password, (error)=> {
            if (!error) this.setState({redirect: this.props.history.go(-1)})
            else alert(error);
        });


      }

    render(){
        if (this.state.redirect) return <Redirect to='/' />
        return(
            <div id="login" className="h-vh-100 d-flex flex-justify-center flex-align-center">
            <div className="login-box">
            <form className="bg-white p-4" data-role="validator" data-clear-invalid="3000"
                   onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <img src="images/p-120x120.png" className="place-right mt-4-minus mr-6-minus" />
                <h1 className="mb-0">Login</h1>
                <div className="text-muted mb-4">Sign in to start your session</div>
                <div className="form-group">
                    <input name="email" type="text" data-role="input" placeholder="Email" data-append="<span className='mif-envelop'>" data-validate="required" />
                    <span className="invalid_feedback">Please enter a valid email address</span>
                </div>
                <div className="form-group">
                    <input name="password" type="password" data-role="input" placeholder="Password" data-append="<span className='mif-key'>" data-validate="required" />
                    <span className="invalid_feedback">Please enter a password</span>
                </div>
                <div className="form-group d-flex flex-align-center flex-justify-between">
                    <input name="confirm" type="checkbox" data-role="checkbox" data-caption="Remember Me" />
                    <button className="button primary">Sign In</button>
                </div>
                <div className="text-center m-4">- OR -</div>
                <div className="form-group">
                    <button className="image-button w-100 mt-1 bg-facebook fg-white" type="button">
                        <span className="mif-facebook icon"></span>
                        <span className="caption">Sign In using Facebook</span>
                    </button>
                    <button className="image-button w-100 mt-1 bg-github fg-white" type="button">
                        <span className="mif-github icon"></span>
                        <span className="caption">Sign In using GitHub</span>
                    </button>
                    <button className="image-button w-100 mt-1 bg-gitlab fg-white" type="button">
                        <span className="mif-gitlab icon"></span>
                        <span className="caption">Sign In using GitLab</span>
                    </button>
                </div>
                <div className="form-group border-top bd-default pt-2">
                    <a href="#" className="d-block">I forgot my password</a>
                    <Link to="/register" className="d-block">Register a new membership</Link>
                </div>
            </form>
        </div>
    </div>
        );
    }
}

export default Login;