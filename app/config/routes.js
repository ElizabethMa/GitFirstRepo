import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/Main';

// var Home = require("../components/Home");

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
         {JSON.stringify(this.props,1)}
        {/*<h3>{ this.props.location }</h3>*/}
      </div>
    )
  }
}

var routes = (
<Router history={ hashHistory }>
  <Route path='/' component={ Main }>
    <IndexRoute component={ Home }></IndexRoute>
    <Route path='home' component={ Home }></Route>
    <Route path='about' component={ Home }></Route>
    <Route path='service' component={ Home }></Route>
    <Route path='price' component={ Home }></Route>
    <Route path='connect' component={ Home }></Route>
    <Route path='login' component={ Home }></Route>
    <Route path='regist' component={ Home }></Route>
  </Route>
</Router>
);

module.exports = routes;