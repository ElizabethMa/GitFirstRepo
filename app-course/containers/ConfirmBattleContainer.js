var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelper = require('../utils/githubHelper');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        console.log('getInitialState');
        return {
            isLoading: true,
            playersInfo: [],
        }
    },
    handleInitiateBattle: function() {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        })
    },
    componentWillMount: function() {
        console.log('componentWillMount');
    },
    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps');
    },
    componentDidUpdate: function() {
        console.log('componentDidUpdate')
    },
    componentWillUpdate: function() {
        console.log('Most of your "side effects" will go inside of  componentWillUpdate')
    },
    componentDidMount: function() {
        console.log('componentDidMount ');

        var query = this.props.location.query;
        // console.log('Query : ', query);
        // console.log('Router : ', this.context.router);
        // console.log('props : ', this.props);
        // Fetch info from github then update state

        githubHelper.getPlayersInfo([query.playerOne, query.playerTwo]).then(function(players) {
            this.setState({
                isLoading: false,
                playersInfo: [players[0], players[1]]
            })
        }.bind(this));
    },
    render: function() {
        console.log('render');
        return (
            <ConfirmBattle isLoading={ this.state.isLoading } playersInfo={ this.state.playersInfo } onInitiateBattle={ this.handleInitiateBattle } />
        )
    }
});

module.exports = ConfirmBattleContainer;