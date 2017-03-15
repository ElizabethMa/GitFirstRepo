import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main'

import Websocket from 'react-websocket';
 
  class ProductDetail extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {
        count: 90
      };
    }
 
    handleData(data) {
      let result = JSON.parse(data);
      this.setState({count: this.state.count + result.movement});
    }
 
    render() {
      return (
        <div>
          Count: <strong>{this.state.count}</strong>
 
          <Websocket url='ws://localhost:8888/live/product/12345/' 
              onMessage={this.handleData.bind(this)}/>
        </div>
      );
    }
  }
 
  export default ProductDetail;

class MainContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        datas: {}
      };
    }

    handleData(data) {
      let result = JSON.parse(data);
      this.setState({datas: result});
    }

    render() {
        return (
            <Main>
                <Websocket url='ws://api.shinnytech.com/t/sim/front/mobile'
                debug={true}
                onMessage = {this.handleData.bind(this)}/>
                {this.props.children}
            </Main>
        )
    }
}

module.exports = MainContainer;