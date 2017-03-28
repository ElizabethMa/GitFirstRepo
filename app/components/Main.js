import React from 'react';
import Header from './Header'
import Footer from './Footer'
import MainContainer from './MainContainer'
import '../main.css'

// var ReactCssTransitionGroup = require('react-addons-css-transition-group');

class Main extends React.Component {

    render() {
        return (
            <div className='site-warpper'>
                <div className="site-warpper-inner">
                    <div className="cover-container">
                        <Header></Header>
                        <MainContainer></MainContainer>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        )
    }
}

/*var Main = React.createClass({
    render: function() {
        return (
            <div className='main-container'>
              <ReactCssTransitionGroup
                transitionName= "appear"
                transitionEnterTimeout= {2000}
                transitionLeaveTimeout= {2000}>
                {React.cloneElement(this.props.children, {key:this.props.location.pathname})}
              </ReactCssTransitionGroup>
            </div>
        )
    }
});*/

module.exports = Main;