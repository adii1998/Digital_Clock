import React, { Component } from 'react';

class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div className="date-time">{this.state.time}</div>;
  }
}

export default DigitalClock;
