const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;
const IndexRoute = ReactRouter.IndexRoute;

import Main from '../main';

import MainContainer from '../components/MainContainer';
import QuotesContainer from '../components/QuotesContainer';

const Repos = React.createClass({
  render() {
    return <div>
             <h2>Repos</h2>
             <ul>
               <li>
                 <Link to="/repos/reactjs/react-router">React Router</Link>
               </li>
               <li>
                 <Link to="/repos/facebook/react">React</Link>
               </li>
             </ul>
             { this.props.children }
           </div>
  }
})

const Repo = React.createClass({
  render() {
    return <div>
             <h3>Repo</h3>
             { this.props.params.userName } :
             { this.props.params.repoName }
           </div>
  }
})

const About = React.createClass({
  render() {
    return <div>About</div>
  }
})

const Home = React.createClass({
  render() {
    return <div>Home</div>
  }
})

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