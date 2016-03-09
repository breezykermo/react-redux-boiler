require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require('./bootstrap-modified.css');
require('./cog-loading.css');

import React, {Component} from 'react';
import {Map} from 'immutable';

/* ROUTER */
import { Router, Route, DefaultRoute, browserHistory } from 'react-router';

/* REDUX */
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import {push} from 'react-router-redux';

import * as grindWheelActions from './redux/reducers/grindWheel';

import Brand from './components/Brand';
import GiveMoney from './components/GiveMoney';
import CogAnimation from './components/CogAnimation';
import GrindWheel from './components/GrindWheel';
import Arrows from './components/Arrows';

const styles = {
  content: {
    marginTop: '-30px',
  },
}

/* create container as stateless function to indicate pure component */
export class App extends Component {
  leftArrow() {
    if (this.props.grindWheel.currentTitleIndex > 0) {
      this.props.actions.rotateGrindWheel(-50);
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
      this.props.actions.rotateGrindWheel(50);
      this.props.actions.advanceTitle(1);
      // routing
      this.props.dispatch(push(this.props.grindWheel.titles[this.props.grindWheel.currentTitleIndex + 1]));
    }
  }

  render() {
    return (
      <div>
          <Brand />
          <GiveMoney />
          <div className="container">
            <div style={styles.content}>{this.props.children} </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
