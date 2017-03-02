var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles').transparentBg;

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron col-sm-12 text-center" style={ transparentBg }>
              <h1>Battle</h1>
              <p className="lead">what is react?</p>
              <Link to='/playerOne'>
                <button type="button" className="btn btn-lg btn-success">
                    Start
                </button>
              </Link>
            </div>
        )
    }
});

module.exports = Home;