import React from 'react';


class Footer extends React.Component {
     render() {
        return (
            <div className="mastfoot">
                <div className="inner">
                <p>Cover template for <a href="http://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
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

module.exports = Footer;