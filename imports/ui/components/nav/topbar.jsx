import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import {
  MDBNavbar, MDBDropdown, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBCol
} from 'mbd';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countrey: '', collapse: false, uname: Meteor.user(), search: '' };

    this.onClick = this.onClick.bind(this);
    this.userAccount = this.userAccount.bind(this);
    this.logOut = this.logOut.bind(this);
    this.searchterm = this.searchterm.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  searchterm() {
    const target = event.target, value = target.value;
    this.setState({ search: value });
  }

  searchProducts(e) {
    e.preventDefault();
    if (this.state.search) document.getElementById('search').click();
  }

  componentDidMount() {
    this.setState({ uname: Meteor.user() })
    fetch('https://extreme-ip-lookup.com/json/')
      .then(res => res.json()).then(response => {
        this.setState({ countrey: `3x2/${response.countryCode}.svg` });
      });
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  logOut() {
    Meteor.logout((error) => {
      if (!error) { this.setState({ uname: '' }); }
      else alert(error);
    });
  }

  userAccount() {

    return (
      <MDBDropdown>
        <MDBDropdownToggle nav caret>
          <span className="mr-2">{this.state.uname ? <img src="images/basel.jpg" width="40px" /> : <MDBIcon icon="user-tie" />}</span>
        </MDBDropdownToggle>
        {this.state.uname ?
          <MDBDropdownMenu>
            <Link to="/profile">my account</Link>
            <Link to="/test">test</Link>
            <Link to="/search">search</Link>
            <MDBDropdownItem onClick={this.logOut}>logout</MDBDropdownItem>
          </MDBDropdownMenu> :
          <MDBDropdownMenu>
            <Link to="/login">login</Link>
            <Link to="/register">register</Link>
          </MDBDropdownMenu>}
      </MDBDropdown>
    )
  }

  render() {

    return (
      <>
        <header>
          <MDBNavbar color="blue-gradient" dark expand="md" className="align-items-baseline">
            <Link to="/">
              <img className="img-fluid w-75" src="images/180-60.png" />
            </Link>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse className="pr-12" isOpen={this.state.collapse} navbar>
              <MDBNavbarNav >
                <MDBNavItem className="w-50" >
                  <MDBCol>
                    <form className="form-inline mr-auto" onSubmit={this.searchProducts} onChange={this.searchterm}>
                      <div className="md-form my-0">
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                        <i className="fas fa-search text-white ml-3" aria-hidden="true"></i>
                      </div>
                    </form>
                  </MDBCol>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to=""> <img title="countrey name" width="30px" src={this.state.countrey} /></Link>
                </MDBNavItem>
                <MDBNavItem>
                  {this.userAccount()}
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
        <Link to={`/search?txt=${this.state.search}`}className="hide" />
        <Link  id="search" to={{pathname:'/search',state: {
          search: this.state.search

        }}} />
      </>
    );
  }
}

export default TopBar;