const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;
const IndexRoute = ReactRouter.IndexRoute;

import Main from '../main';

import Quotes from '../components/Quotes';

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
  <Route path='/' component={ Main }>
    <IndexRoute component={ Home } />
    <Route path='/repos' component={ Repos }>
      <Route path="/repos/:userName/:repoName" component={ Repo } />
    </Route>
    <Route path='/about' component={ About }></Route>
    <Route path='/quotes/:type' component={ Quotes }></Route>
    <Route path='/want' component={ About }></Route>
  </Route>
</Router>
);

module.exports = routes;