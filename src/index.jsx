require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require('./bootstrap-modified.css');
require('./cog-loading.css');

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
import {push} from 'react-router-redux';

import * as grindWheelActions from './redux/reducers/grindWheel';

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

import CogAnimation from './components/CogAnimation';
import GrindWheel from './components/GrindWheel';
import Arrows from './components/Arrows';

const styles = {
  logo: {
    position: 'fixed',
    top: '0px',
    marginTop: '-50px',
    height: '100px',
    left: '100px',

  },
};

/* create container as stateless function to indicate pure component */
export class App extends Component {
  leftArrow() {
    if (this.props.grindWheel.currentTitleIndex > 0) {
      this.props.actions.rotateGrindWheel(-20);
      this.props.actions.advanceTitle(-1);
      // routing
      this.props.dispatch(push(this.props.grindWheel.titles[this.props.grindWheel.currentTitleIndex - 1]));
    }
  }

  rightArrow() {
    console.log(this.props.grindWheel.titles.length)
    console.log(this.props.grindWheel.currentTitleIndex)
    // nb: -1 for the empty route at the beginning.
    if (this.props.grindWheel.currentTitleIndex < (this.props.grindWheel.titles.length - 1)) {
      this.props.actions.rotateGrindWheel(20);
      this.props.actions.advanceTitle(1);
      // routing
      this.props.dispatch(push(this.props.grindWheel.titles[this.props.grindWheel.currentTitleIndex + 1]));
    }
  }

  render() {
    return (
      <div>
         <LinkContainer to="/">
           <a>
             <img style={styles.logo} src="assets/grind-fade.png" alt="Grind Arts." width='auto' height='45px'/>
           </a>
         </LinkContainer>
          <div className="container">
            {this.props.routing.location.pathname === '/'
            ? <CogAnimation />
            : this.props.children}
          </div>
          <Arrows onLeft={this.leftArrow.bind(this)} onRight={this.rightArrow.bind(this)} />
          <GrindWheel {...this.props.grindWheel} />
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
  const actions = [grindWheelActions];
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
