import React from 'react';
import { Link  } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class Account extends React.Component {

    constructor(props) {
        super(props);
        if (Meteor.user()) this.state = { uname: Meteor.user().username, isShow: false};
        else this.state = {isShow: false};

        this.logOut = this.logOut.bind(this);
        this.uMenu = this.uMenu.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }

    componentDidMount() {
        if (Meteor.user()) this.setState({ uname: Meteor.user().username });
        else console.log('not logged in');
    }

    logOut() {
        Meteor.logout((error) => {
            if (!error) { this.setState({ uname: '' }); this.hideMenu() }
            else alert(error);
        });
    }

    showMenu() {
        this.setState({ isShow: true });
    }
    hideMenu() {
        this.setState({ isShow: false });
    }

    uMenu() {
        if (!this.state.isShow) return '';
        if (this.state.uname)
            return (
                <div className="user-block shadow-1" >
                    <div className="bg-darkCyan fg-white p-2 text-center">
                        <img src="images/basel.jpg" className="avatar" />
                        <div className="h4 mb-0"> {this.state.uname}</div>
                        <div>Pirate captain</div>
                    </div>
                    <div className="bg-white d-flex flex-justify-between flex-equal-items p-2">
                        <button className="button flat-button">Followers</button>
                        <Link to="/register" className="button yellow  outline m-3">Join</Link>
                        <Link to="/login" className="button yellow outline m-3">Sign in</Link>
                    </div>
                    <div className="bg-white d-flex flex-justify-between flex-equal-items p-2 bg-light">
                        <Link to="/profile" onClick={this.hideMenu} className="button mr-1 fg-black">Profile</Link>
                        <Link to="/" onClick={this.logOut} className="button ml-1 fg-black">Sign out</Link>
                    </div>
                </div>
            );
        else return (
            <div className="d-flex bg-darkCyan flex-justify-around flex-align-center">
                <Link to="/register" className="button yellow  outline m-3">Join</Link>
                <Link to="/login" className="button yellow  outline m-3">Sign in</Link>
            </div>
        );
    }

    render() {
        return (
            <div id="user" className="" onMouseOver={this.showMenu.bind(this)} onMouseLeave={this.hideMenu}>
                <a className="button flat-button">
                    <span className="mif-user icon"></span>
                    <span className="caption">Account</span>
                </a>
                <div id="umenu">
                    <this.uMenu />
                </div>
            </div>
        );
    }
}

export default Account;