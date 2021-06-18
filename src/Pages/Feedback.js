import React, { Component } from 'react';
import Header from '../components/Header';

class Feedback extends Component {
  // constructor() {
  //   super();
  // }
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
