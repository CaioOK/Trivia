import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Question from '../components/Question';
import { fetchQuestionsAC } from '../actions';
import { getToken } from '../Services/fetchApi';
import Header from '../components/Header';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      questionIndex: 0,
      startNewTimer: false,
      buttonDisabled: true,
      btnTestId: '',
    };

    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.makeOneTimerOnly = this.makeOneTimerOnly.bind(this);
    this.handeEnableButton = this.handeEnableButton.bind(this);
  }

  componentDidMount() {
    const { getQuestionsFromAPI } = this.props;
    getToken().then(() => getQuestionsFromAPI());
  }

  handeEnableButton() {
    this.setState({
      buttonDisabled: false,
      btnTestId: 'btn-next',
    });
  }

  handleNextQuestion() {
    this.setState((previousState) => ({
      questionIndex: previousState.questionIndex + 1,
      startNewTimer: true,
      buttonDisabled: true,
    }));
  }

  makeOneTimerOnly() {
    this.setState({
      startNewTimer: false,
    });
  }

  render() {
    const { questionsFromStore } = this.props;
    if (!questionsFromStore) return <div>Carregando...</div>;
    const { questionIndex, startNewTimer, buttonDisabled, btnTestId } = this.state;
    const maxQuestions = 5;

    return (
      (questionIndex === maxQuestions) ? <Redirect to="/feedback" />
        : (
          <div>
            <Header />
            <Question
              currentQuestion={ questionsFromStore[questionIndex] }
              startNewTimer={ startNewTimer }
              makeOneTimerOnly={ this.makeOneTimerOnly }
              handeEnableButton={ this.handeEnableButton }
            />
            <button
              type="button"
              onClick={ this.handleNextQuestion }
              disabled={ buttonDisabled }
              data-testid={ btnTestId }
            >
              Próxima
            </button>
          </div>
        )
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQuestionsFromAPI: () => dispatch(fetchQuestionsAC()),
});

const mapStateToProps = (state) => ({
  questionsFromStore: state.questionsReducer.questions.results,
});

Game.propTypes = {
  getQuestionsFromAPI: PropTypes.func,
  questionsFromStore: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Game);
