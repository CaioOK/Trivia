import React, { Component } from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 30,
    };
    // this.handleTime = this.handleTime.bind(this);
  }

  //   componentDidUpdate() {
  //     const SEG = 1000;
  //     setTimeout(() => {
  //       this.handleTime();
  //     }, SEG);
  //   }

  //   handleTime() {

  //   }
  componentDidMount() {
    const num = 1000;
    while (this.state.time > 0) {
      setInterval(() => {
        this.setState((previousState) => ({
          time: previousState.time - 1,
        }));
      }, num);
    }
  }

  render() {
    const { time } = this.state;
    console.log(time);
    return (
      <div>
        00:
        {time}
      </div>
    );
  }
}

export default Timer;
