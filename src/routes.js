import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Layout from './layout';
import Entry from './containers/Entry';
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

import GivingContainer from './containers/Giving';
import HeroContainer from './containers/Hero';

const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={Entry} />
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

    <Route path='giving' component={GivingContainer} />
    <Route path='hero' component={HeroContainer} />
  </Route>
);

export default routes;