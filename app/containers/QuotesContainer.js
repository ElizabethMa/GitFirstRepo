var React = require('react');
var Quotes = require('../components/Quotes');
var githubHelper = require('../utils/githubHelper');

var QuotesContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function () {
      
  },
  render: function () {
    return (
      <Quotes
        />
    )
  }
});

module.exports = QuotesContainer;