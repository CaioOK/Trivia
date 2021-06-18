import React, { Component } from 'react';
import Header from '../components/Header';

class Feedback extends Component {
  constructor() {
    super();

    this.handleFeedbackMessage = this.handleFeedbackMessage.bind(this);
  }

  handleFeedbackMessage() {
    const stateLS = JSON.parse(localStorage.getItem('state'));
    const { assertions } = stateLS.player;
    const tres = 3;
    let message = '';
    message = (assertions < tres) ? 'Podia ser melhor...' : 'Mandou bem!';

    return message;
  }

  render() {
    const message = this.handleFeedbackMessage();
    return (
      <>
        <Header />
        <div data-testid="feedback-text">
          {message}
        </div>
      </>
    );
  }
}

export default Feedback;
