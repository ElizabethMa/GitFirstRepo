import React from 'react';
import { Link } from 'react-router';

class Navigate extends React.Component {

  render() {
    return (
      <div>
        <h3 className="masthead-brand">Feng</h3>
        <ul className="nav masthead-nav">
          <li className="active">
            <Link to='/home'>Home </Link>
          </li>
          <li>
            <Link to='/about'>关于</Link>
          </li>
          <li>
            <Link to='/service'>服务</Link>
          </li>
          <li>
            <Link to='/price'>价格</Link>
          </li>
          <li>
            <Link to='/connect'>联系我们</Link>
          </li>
        </ul>
      </div>
    )
  }
}

module.exports = Navigate;

