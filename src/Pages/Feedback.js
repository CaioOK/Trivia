import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/feedback.css';

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
    const stateLS = JSON.parse(localStorage.getItem('state'));
    const { assertions, score } = stateLS.player;
    return (
      <div id="feedback">
        <Header />
        <div id="feedback-container">
          <h3
            data-testid="feedback-total-question"
          >
            {`Você acertou ${assertions} perguntas!`}
          </h3>
          <h3
            data-testid="feedback-total-score"
          >
            {`E obteve o total de ${score} pontos`}
          </h3>
          <span data-testid="feedback-text">{`Conclusão: ${message}`}</span>
          <Link to="/">
            <button
              type="button"
              data-testid="btn-play-again"
              onClick={ () => localStorage.clear() }
            >
              Jogar novamente
            </button>
          </Link>
          <Link to="/ranking">
            <button type="button" data-testid="btn-ranking">
              Ver Ranking
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Feedback;
