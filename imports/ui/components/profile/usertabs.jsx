import React from 'react';
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mbd";

import Tabs2 from './storetabs'

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeA: "5" };
    }

    toggle = tab => e => {
        if (this.state.activeA !== tab) {
            this.setState({ activeA: tab });
        }
    };
    render() {
        return (
            <>
                <MDBNav tabs className="nav-justified" color='indigo'>
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeA === "1"} onClick={this.toggle("1")} role="tab" >
                            <MDBIcon icon="user" /> Profile
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeA === "2"} onClick={this.toggle("2")} role="tab" >
                            <MDBIcon icon="shopping-basket" /> Orders
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeA === "3"} onClick={this.toggle("3")} role="tab" >
                            <MDBIcon icon="envelope" /> Messages
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeA === "4"} onClick={this.toggle("4")} role="tab" >
                            <MDBIcon icon="heart" /> Wish List
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activeA === "5"} onClick={this.toggle("5")} role="tab" >
                            <MDBIcon icon="store" /> My Store
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNav>
                <MDBTabContent className="card" activeItem={this.state.activeA} >
                    <MDBTabPane tabId="1" role="tabpanel">
                        <div id="profile-about">
                            <div>
                                <div className="text-bold">Gender</div>
                                <div>Male</div>
                                <div className="text-bold mt-2">Birthday</div>
                                <div>February 30th, 1974</div>
                                <div className="text-bold mt-2">Locations</div>
                                <div className="text-bold mt-2">About Me</div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            </div>
                            <br />
                            <div data-role="panel" data-title-caption="Work info" data-title-icon="<span className='mif-library'>" data-collapsible="true">
                                <div className="text-bold">Occupation</div>
                                <div>Developer</div>
                                <div className="text-bold mt-2">Skills</div>
                                <code>C#</code>, <code>PHP</code>, <code>Javascript</code>, <code>Angular</code>
                            </div>
                        </div>
                    </MDBTabPane>
                    <MDBTabPane tabId="2" role="tabpanel">
                    </MDBTabPane>
                    <MDBTabPane tabId="3" role="tabpanel">
                        </MDBTabPane>
                    <MDBTabPane tabId="5" role="tabpanel">
                        <Tabs2 />
                    </MDBTabPane>
                </MDBTabContent>
            </>
        );
    }
}

export default Tabs;
