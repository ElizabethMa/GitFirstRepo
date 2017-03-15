// 'ws://api.shinnytech.com/t/sim/front/mobile'

import React from 'react'
import ReactDOM from 'react-dom';
// import { render, unmountComponentAtNode } from 'react-dom'


class Websocket extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        ws: new WebSocket(this.props.url, this.props.protocol),
        attempts: 1
      };
    }

    logging(logline) {
      if (this.props.debug === true) {
          console.log(logline);
      }
    }

    generateInterval (k) {
      return Math.min(30, (Math.pow(2, k) - 1)) * 1000;
    }

    setupWebsocket() {
      let websocket = this.state.ws;
      
      websocket.onopen = () => {
        this.logging('Websocket connected');
      };

      websocket.onmessage = (evt) => {
        this.props.onMessage(evt.data);
      };

      this.shouldReconnect = this.props.reconnect;
      websocket.onclose = () => {
        this.logging('Websocket disconnected');
        if (this.shouldReconnect) {
          let time = this.generateInterval(this.state.attempts);
          setTimeout(() => {
            this.setState({attempts: this.state.attempts+1});
            this.setState({ws: new WebSocket(this.props.url, this.props.protocol)});
            this.setupWebsocket();
          }, time);
        }
      }
    }

    componentDidMount() {
      this.setupWebsocket();
    }

    componentWillUnmount() {
      this.shouldReconnect = false;
      let websocket = this.state.ws;
      websocket.close();
    }

    render() {
      return (
        <div></div>
      );
    }
}

Websocket.defaultProps = {
    debug: false,
    reconnect: true
};

Websocket.propTypes = {
    url: React.PropTypes.string.isRequired,
    onMessage: React.PropTypes.func.isRequired,
    debug: React.PropTypes.bool,
    reconnect: React.PropTypes.bool,
    protocol: React.PropTypes.string
};


export default class WebSocket {
    constructor(component){
        this.dom = null;
        this.component = component;
        this.instance = null;
        this.ws = new WebSocket(this.props.url, this.props.protocol)
    }

    send(data) {

    }

    show(option) {
        if(!this.dom) {
            this.dom = document.createElement('div');
            document.body.appendChild(this.dom);
        }
        this.instance = render(<this.component {...option}/>, this.dom);
        this.instance.setState({
            show: true
        });
    }

    hide() {
        if (this.instance) {
            this.instance.setState({
                show: false
            }, () => {
                setTimeout(() => {
                    unmountComponentAtNode(this.dom);
                }, 100);
            });
        }
    }
}