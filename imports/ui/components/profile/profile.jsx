import React from 'react';
import { Redirect } from "react-router-dom";
import { Meteor } from 'meteor/meteor';

import Tabs from './usertabs'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirect: Meteor.user() ? null : '/' };
    }

    render() {
        if (this.state.redirect) return <Redirect to='/' />
        return (
            <div className="container">
                <div className="row mt-2 flex-d">
                    <div className="col-lg-3 col-sm-6 mt-2">
                        <div className="bg-white p-2">
                            <div className="skill-box mt-4-minus">
                                <div className="header d-flex justify-content-center">
                                    <img src="images/basel.jpg" className="img-fluid" style={{ "borderRadius": "50%", width:"70%" }} />
                                    <div className="title">{Meteor.user().username}</div>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>All Orders</span>
                                        <span className="badge badge-primary">500</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>Under Payment</span>
                                        <span className="badge badge-danger">5</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>Under Shipment</span>
                                        <span className="badge badge-warning">21</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>In Way</span>
                                        <span className="badge badge-secondary">4</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                         </div>
                    <div className="col-lg-9 cell-sm-7 mt-2">
                        <Tabs />
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile