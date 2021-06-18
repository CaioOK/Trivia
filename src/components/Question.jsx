import React from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer';

const correctAnswerString = 'correct-answer';
class Question extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.stylesMultiple = this.stylesMultiple.bind(this);
    this.stylesTrueFalse = this.stylesTrueFalse.bind(this);
    this.handleQuestions = this.handleQuestions.bind(this);
    this.handleDifficulty = this.handleDifficulty.bind(this);
    this.handleGetCurrentTime = this.handleGetCurrentTime.bind(this);
    this.handleDisableAnswersButtons = this.handleDisableAnswersButtons.bind(this);
    this.state = {
      colorRed: { border: '3px solid rgb(255, 0, 0)' },
      colorGreen: { border: '3px solid rgb(6, 240, 15)' },
      styleCorrect: {},
      styleIncorrect: {},
      currentAnswers: [],
      correctId: '',
      trueBoolean: {},
      falseBoolean: {},
      stopTimer: false,
      currentTime: 0,
    };
  }

  componentDidMount() {
    this.handleQuestions();
  }

  componentDidUpdate() {
    const { startNewTimer: newQuestion } = this.props;
    if (newQuestion) this.handleQuestions();
  }

  handleQuestions() {
    const { currentQuestion } = this.props;
    const { correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers } = currentQuestion;
    const answers = [correctAnswer, ...incorrectAnswers];
    const meio = 0.5;
    const currentAnswers = answers.sort(() => Math.random() - meio);
    const correctId = currentAnswers.indexOf(correctAnswer);
    this.setState({ currentAnswers,
      correctId,
      stopTimer: false,
      styleCorrect: {},
      styleIncorrect: {},
      trueBoolean: {},
      falseBoolean: {},
    });
  }

  stylesMultiple() {
    const { handeEnableButton } = this.props;
    handeEnableButton();
    this.setState((previousState) => ({
      styleCorrect: previousState.colorGreen,
      styleIncorrect: previousState.colorRed,
      stopTimer: true,
    }));
  }

  stylesTrueFalse() {
    const { handeEnableButton } = this.props;
    handeEnableButton();
    const answerArray = document.querySelectorAll('input');
    const getAnswer = answerArray[0].getAttribute('data-testid');
    if (getAnswer === correctAnswerString) {
      this.setState((previousState) => ({
        trueBoolean: previousState.colorGreen,
        falseBoolean: previousState.colorRed,
        stopTimer: true,
      }));
    } else {
      this.setState((previousState) => ({
        falseBoolean: previousState.colorRed,
        trueBoolean: previousState.colorGreen,
        stopTimer: true,
      }));
    }
  }

  trueOfFalse(parametro) {
    const { falseBoolean, trueBoolean } = this.state;
    let testId1 = `wrong-answer-${0}`; let testId2 = `wrong-answer-${0}`;
    if (parametro === 'True') testId1 = correctAnswerString;
    else testId2 = correctAnswerString;
    return (
      <>
        <input
          id="verdadeiro"
          type="button"
          name="question"
          value="True"
          onClick={ (event) => {
            this.stylesTrueFalse(); this.handleClick(undefined, event);
          } }
          data-testid={ testId1 }
          style={ trueBoolean }
        />
        <input
          id="falso"
          type="button"
          name="question"
          value="False"
          onClick={ (event) => {
            this.stylesTrueFalse(); this.handleClick(undefined, event);
          } }
          data-testid={ testId2 }
          style={ falseBoolean }
        />
      </>
    );
  }

  multiple(answers, correctId) {
    let wrongID = 0; const { styleCorrect, styleIncorrect } = this.state;
    return (
      <>
        {answers.map((answer, index) => {
          if (index === correctId) {
            return (
              <input
                id={ `question${index}` }
                type="button"
                name="multiple"
                value={ answer }
                onClick={ (event) => {
                  this.stylesMultiple();
                  this.handleClick(undefined, event);
                } }
                style={ styleCorrect }
                key={ index }
                data-testid="correct-answer"
              />
            );
          }
          wrongID += 1;
          return (
            <input
              id={ `question${index}` }
              type="button"
              name="multiple"
              value={ answer }
              onClick={ (event) => {
                this.stylesMultiple(); this.handleClick(undefined, event);
              } }
              key={ index }
              style={ styleIncorrect }
              data-testid={ `wrong-answer-${wrongID - 1}` }
            />
          );
        })}
      </>
    );
  }

  handleDifficulty(difficulty) {
    switch (difficulty) {
    case 'easy':
      return 1;
    case 'medium':
      return 2;
    case 'hard':
      return 2 + 1;
    default:
      return 0;
    }
  }

  handleClick(flag, event) {
    const ten = 10;
    const { currentTime } = this.state;
    const { currentQuestion: { correct_answer: correctAnswer, difficulty },
    } = this.props;
    if (flag === undefined) {
      if (correctAnswer === event.target.value) {
        const score = ten + (currentTime * this.handleDifficulty(difficulty));
        const localStorageState = JSON.parse(localStorage.getItem('state'));
        localStorageState.player.score += score;
        localStorageState.player.assertions += 1;
        localStorage.setItem('state', JSON.stringify(localStorageState));
      }
    } else {
      const btns = document.querySelectorAll('input');
      btns.forEach((btn) => { btn.disabled = true; });
    }
  }

  handleDisableAnswersButtons() {
    const answersBtns = document.querySelectorAll('input');
    answersBtns.forEach((btn) => { btn.disabled = true; });
    const { handeEnableButton } = this.props;
    handeEnableButton();
  }

  handleEnableAnswersButtons() {
    const answersBtns = document.querySelectorAll('input');
    answersBtns.forEach((btn) => { btn.disabled = false; });
  }

  handleGetCurrentTime(time) {
    this.setState({
      currentTime: time,
    });
  }

  render() {
    const { currentQuestion, makeOneTimerOnly, startNewTimer } = this.props;
    if (!currentQuestion) return <div>Carregando...</div>;
    const { category, question, type } = currentQuestion;
    const { currentAnswers, correctId, stopTimer } = this.state;

    return (
      <section style={ { display: 'flex', flexDirection: 'column' } }>
        <Timer
          answerQuestion={ this.handleClick }
          stopTimer={ stopTimer }
          startNewTimer={ startNewTimer }
          makeOneTimerOnly={ makeOneTimerOnly }
          disableBtns={ this.handleDisableAnswersButtons }
          enableBtns={ this.handleEnableAnswersButtons }
          getTime={ this.handleGetCurrentTime }
        />
        <h3 data-testid="question-category">{category}</h3>
        <p data-testid="question-text">{question}</p>
        <div style={ { display: 'flex', flexDirection: 'column' } }>
          {type === 'boolean'
            ? this.trueOfFalse('True') : this.multiple(currentAnswers, correctId)}
        </div>
      </section>
    );
  }
}

Question.propTypes = {
  currentQuestion: PropTypes.objectOf(PropTypes.string, PropTypes.array),
}.isRequired;

export default Question;
