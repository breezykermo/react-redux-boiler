require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require('./bootstrap-modified.css');

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

//components
import MissionContainer from './containers/Mission';
import IntroContainer from './containers/Intro';
import ReviewContainer from './containers/Review';
import NextstepContainer from './containers/Nextstep';
import InitiativesContainer from './containers/Initiatives';
import ThoughtmapContainer from './containers/Thoughtmap';
import NecessitiesContainer from './containers/Necessities';
import PastContainer from './containers/Past';
import FutureContainer from './containers/Future';
import MembersContainer from './containers/Members';

import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

/* create container as stateless function to indicate pure component */
export class App extends Component {
  render() {
    return (
      <div>
          <Navbar style={{fontFamily: 'monospace'}}>
            <Navbar.Header>
              <Navbar.Brand>
                <LinkContainer to="/home">
                  <a href='#'>
                    <img src="assets/brand.png" alt="Grind Arts." width='25px' height='25px'/>
                  </a>
                </LinkContainer>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav bsStyle="tabs">
              <LinkContainer to="mission">
                <NavItem href="#">Mission</NavItem>
              </LinkContainer>
              <LinkContainer to="intro">
                <NavItem href="#">Intro</NavItem>
              </LinkContainer>
              <LinkContainer to="review">
                <NavItem href="#">Review</NavItem>
              </LinkContainer>
              <LinkContainer to="nextstep">
                <NavItem href="#">Next steps</NavItem>
              </LinkContainer>
              <LinkContainer to="initiatives">
                <NavItem href="#">Initiatives</NavItem>
              </LinkContainer>
              <LinkContainer to="thoughtmap">
                <NavItem href="#">Thoughtmap</NavItem>
              </LinkContainer>
              <LinkContainer to="necessities">
                <NavItem href="#">Necessities</NavItem>
              </LinkContainer>
              <LinkContainer to="past">
                <NavItem href="#">Past Productions</NavItem>
              </LinkContainer>
              <LinkContainer to="future">
                <NavItem href="#">Future Projects</NavItem>
              </LinkContainer>
              <LinkContainer to="members">
                <NavItem href="#">Founding Members</NavItem>
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
  const actions = [];
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
        <Route path='mission' component={MissionContainer} />
        <Route path='intro' component={IntroContainer} />
        <Route path='review' component={ReviewContainer} />
        <Route path='nextstep' component={NextstepContainer}/>
        <Route path='initiatives' component={InitiativesContainer}/>
        <Route path='thoughtmap' component={ThoughtmapContainer} />
        <Route path='necessities' component={NecessitiesContainer}/>
        <Route path='past' component={PastContainer}/>
        <Route path='future' component={FutureContainer}/>
        <Route path='members' component={MembersContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector("#app")
);
