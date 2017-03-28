import React from 'react';
import Link from 'react-router';

class Header extends React.Component {

    render() {
        return (
        <div className="masthead clearfix">
            <div className="inner">
              <h3 className="masthead-brand">Cover</h3>
              <nav>
                <ul className="nav masthead-nav">
                  <li className="active"><a href="#">Home</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </div>

                {/*<Link to='/home'>首页</Link>
                <Link to='/about'>关于</Link>
                <Link to='/service'>服务</Link>
                <Link to='/price'>价格</Link>
                <Link to='/connect'>联系我们</Link>*/}
          
          </div>
        )
    }
}

module.exports = Header;

