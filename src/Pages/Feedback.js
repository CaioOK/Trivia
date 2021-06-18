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
    switch (assertions) {
    case assertions < tres:
      return 'Podia ser melhor...';
    default:
      return 'Mandou bem!';
    }
  }

  render() {
    return (
      <>
        <Header />
        <div data-testid="feedback-text">
          Tela de Feedback
        </div>
      </>
    );
  }
}

export default Feedback;
