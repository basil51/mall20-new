import React from 'react';
import { Link } from 'react-router-dom';
import Account from './account';
import { MDBCol } from "rawabi.8079";

class LogoBar extends React.Component {

    render() {
        return (
            <div className="row justify-content-around align-items-center border-bottom bd-lightGray">
                <div className="col-6">
                    <MDBCol >
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </MDBCol>
                </div>
                <div className="col"><Account /></div>
            </div>
        );
    }
}

export default LogoBar;