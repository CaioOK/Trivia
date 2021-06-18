import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalTime: 30,
      currentTime: 30,
    };

    this.counterCreator = this.counterCreator.bind(this);
    this.handleNewTimer = this.handleNewTimer.bind(this);
  }

  componentDidMount() {
    this.counterCreator();
  }

  componentDidUpdate() {
    this.handleNewTimer();
  }

  counterCreator() {
    const { totalTime } = this.state;
    const oneSecond = 1000;
    let currentTimeLocal = totalTime;

    const myTimer = setInterval(() => {
      const { stopTimer, disableBtns, getTime } = this.props;
      if (stopTimer || currentTimeLocal === 0) {
        disableBtns();
        clearInterval(myTimer);
        return;
      }
      currentTimeLocal -= 1;
      this.setState({ currentTime: currentTimeLocal });
      getTime(currentTimeLocal);
    }, oneSecond);
  }

  handleNewTimer() {
    const { makeOneTimerOnly, startNewTimer, enableBtns } = this.props;

    if (startNewTimer) {
      this.counterCreator();
      makeOneTimerOnly();
      enableBtns();
    }
  }

  render() {
    const { currentTime } = this.state;

    return (
      <div>
        <p>
          { currentTime }
        </p>
      </div>
    );
  }
}

Timer.propTypes = {
  startNewTimer: PropTypes.bool,
  enableBtns: PropTypes.func,
  makeOneTimerOnly: PropTypes.func,
}.isRequired;

export default Timer;
