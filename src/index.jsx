require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Map} from 'immutable';

/* ROUTER */
import { Router, Route, DefaultRoute, browserHistory } from 'react-router';

/* REDUX */
import {Provider} from 'react-redux';
import {configureStore} from './redux/store';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as serverActions from './redux/reducers/server';

//components
import ParallaxApp from './components/ParallaxApp';
import Home from './components/Home';
import Title from './components/Title';
import About from './components/About';

import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Parallax from 'react-parallax';

/* create container as stateless function to indicate pure component */
export class App extends Component {
  render() {
    return (
      <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <LinkContainer to="/home">
                  <a href='#'>TO:</a>
                </LinkContainer>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav bsStyle="tabs">
              <LinkContainer to="title">
                <NavItem href="#">Title</NavItem>
              </LinkContainer>
              <LinkContainer to="about">
                <NavItem href="#">About</NavItem>
              </LinkContainer>
              <LinkContainer to="/parallax">
                <NavItem href="#">Parallax</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar>
          {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      ...state,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = [serverActions];
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer}>
        <Route path='home' component={Home} />
        <Route path='title' component={Title} />
        <Route path='about' component={About} />
        <Route path='parallax' component={ParallaxApp}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector("#app")
);
