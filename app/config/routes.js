import React from 'react'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'

import MainContainer from '../containers/MainContainer';
import QuotesContainer from '../containers/QuotesContainer';


const About = React.createClass({
  render() {
    return <div>
         <h2>About</h2>
         <h4>props</h4>
         { JSON.stringify(this.props) }
         <h4>props.location</h4>
         { JSON.stringify(this.props.location) }
         <h4>props.params</h4>
         { JSON.stringify(this.props.params) }
         <h4>props.route</h4>
         { JSON.stringify(this.props.route) }
      </div>
  }
});

const routes = (
<Router history={ hashHistory }>
  <Route path='/' component={ MainContainer }>
    <IndexRoute component={ QuotesContainer } />
    <Route path='/quotes/:type' component={ QuotesContainer }></Route>
    <Route path='/details' component={ About }>
      {/*<Route path="/details/:insid" component={ About } />*/}
    </Route>
    <Route path='/trade' component={ About }></Route>
    <Route path='/community' component={ About }></Route>
  </Route>
</Router>
);

module.exports = routes;