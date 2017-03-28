import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from '../components/Main';

var Home = require("../components/Home");
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');
var ResultsContainer = require('../containers/ResultsContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='home' component={Home}></Route>
        <Route path='about' component={Home}></Route>
        <Route path='service' component={Home}></Route>
        <Route path='price' component={Home}></Route>
        <Route path='connect' component={Home}></Route>
        <Route path='login' component={Home}></Route>
        <Route path='regist' component={Home}></Route>
    </Route>
  </Router>
);

module.exports = routes;