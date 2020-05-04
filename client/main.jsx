import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import fontawesome from '@fortawesome/fontawesome';
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'
import "bootstrap-css-only/css/bootstrap.min.css";
import "mbd/dist/css/mdb.css";

import Login from '../imports/ui/pages/login';
import Register from '../imports/ui/pages/register';

import TopBar from '../imports/ui/components/nav/topbar';
import Page1 from '../imports/ui/pages/page1';
import Profile from '../imports/ui/components/profile/profile';
import Test from '../imports/ui/components/test';
import Searchp from '../imports/ui/pages/search';
import Viewimages from '../imports/ui/components/products/view';
import Temp from '../imports/ui/components/temp'


const routes = (
  <Router>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />

      <Route path='/'>
          <TopBar />
          <Switch>
            <Route exact path='/' component={Page1} />
            <Route path='/profile' component={Profile} />
            <Route path='/test' component={Test} />
            <Route path='/temp' component={Temp} />
            <Route path='/search' component={Searchp} />
            <Route path='/:pgeId' component={Page1} />
          </Switch>
      </Route>
    </Switch>
  </Router>
)

Meteor.startup(() => {
  render(routes, document.querySelector('#app'));
});