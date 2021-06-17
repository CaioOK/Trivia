import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Timer from './Timer';
import { addAnswer } from '../actions/index';

const correctAnswerString = 'correct-answer';

class Question extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.stylesMultiple = this.stylesMultiple.bind(this);
    this.stylesTrueFalse = this.stylesTrueFalse.bind(this);
    this.handleQuestions = this.handleQuestions.bind(this);

    this.state = {
      colorRed: { border: '3px solid rgb(255, 0, 0)' },
      colorGreen: { border: '3px solid rgb(6, 240, 15)' },
      styleCorrect: {},
      styleIncorrect: {},
      currentAnswers: [],
      correctId: '',
      trueBoolean: {},
      falseBoolean: {},
    };
  }

  componentDidMount() {
    const time = 900;
    setTimeout(() => this.handleQuestions(), time);
  }

  handleQuestions() {
    const { currentQuestion } = this.props;
    const { correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers } = currentQuestion;
    const answers = [correctAnswer, ...incorrectAnswers];
    const meio = 0.5;
    const currentAnswers = answers.sort(() => Math.random() - meio);
    const correctId = currentAnswers.indexOf(correctAnswer);
    this.setState({
      currentAnswers,
      correctId,
    });
  }

  stylesMultiple() {
    this.setState((previousState) => ({
      styleCorrect: previousState.colorGreen,
      styleIncorrect: previousState.colorRed,
    }));
  }

  stylesTrueFalse() {
    const answerArray = document.querySelectorAll('input');
    const getAnswer = answerArray[0].getAttribute('data-testid');
    if (getAnswer === correctAnswerString) {
      this.setState((previousState) => ({
        trueBoolean: previousState.colorGreen,
        falseBoolean: previousState.colorRed,
      }));
    } else {
      this.setState((previousState) => ({
        falseBoolean: previousState.colorRed,
        trueBoolean: previousState.colorGreen,
      }));
    }
  }

  trueOfFalse(parametro) {
    const { falseBoolean, trueBoolean } = this.state;
    let testId1 = `wrong-answer-${0}`;
    let testId2 = `wrong-answer-${0}`;
    if (parametro === 'True') {
      testId1 = correctAnswerString;
    } else testId2 = correctAnswerString;
    return (
      <>
        <input
          id="verdadeiro"
          type="button"
          name="question"
          value="True"
          onClick={ this.stylesTrueFalse }
          data-testid={ testId1 }
          style={ trueBoolean }
        />
        <input
          id="falso"
          type="button"
          name="question"
          value="False"
          onClick={ this.stylesTrueFalse }
          data-testid={ testId2 }
          style={ falseBoolean }
        />
      </>
    );
  }

  multiple(answers, correctId) {
    let wrongID = 0;
    const { styleCorrect, styleIncorrect } = this.state;
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
                onClick={ this.stylesMultiple }
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
              onClick={ this.stylesMultiple }
              key={ index }
              style={ styleIncorrect }
              data-testid={ `wrong-answer-${wrongID - 1}` }
            />
          );
        })}
      </>

    );
  }

  handleClick(flag, event) {
    const { assertions, currentQuestion: { correct_answer: correctAnswer } } = this.props;
    // const { parentElement: { innerText: value } } = event.target;
    if (flag === undefined) {
      if (correctAnswer === event.target.value) {
        assertions(1);
      }
    } else {
      console.log('errou');
      const btns = document.querySelectorAll('input');
      btns.forEach((btn) => { btn.disabled = true; });
    }
  }

  render() {
    const { currentQuestion } = this.props;
    if (!currentQuestion) return <div>Carregando...</div>;
    const { category, question, type } = currentQuestion;
    const { currentAnswers, correctId } = this.state;

    return (
      <section style={ { display: 'flex', flexDirection: 'column' } }>
        <h3 data-testid="question-category">{category}</h3>
        <p data-testid="question-text">{question}</p>
        <div style={ { display: 'flex', flexDirection: 'column' } }>
          {type === 'boolean'
            ? this.trueOfFalse('True') : this.multiple(currentAnswers, correctId)}
        </div>
        <Timer answerQuestion={ this.handleClick } />
      </section>
    );
  }
}

Question.propTypes = {
  currentQuestion: PropTypes.objectOf(PropTypes.string, PropTypes.array),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  assertions: (answer) => dispatch(addAnswer(answer)),
});
export default connect(null, mapDispatchToProps)(Question);
