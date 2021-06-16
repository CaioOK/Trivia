import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  constructor() {
    super();

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
    setTimeout(()=> this.handleQuestions(), time);
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
    if (getAnswer === 'correct-answer') {
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
      testId1 = 'correct-anwser';
    } else testId2 = 'correct-anwser';
    return (
      <>
        <label htmlFor="verdadeiro" style={ trueBoolean } data-testid={ testId1 }>
          <input
            id="verdadeiro"
            type="button"
            name="question"
            value="0"
            onClick={ this.stylesTrueFalse }
            data-testid={ testId1 }
          />
          Verdadeiro
        </label>
        <label htmlFor="falso" style={ falseBoolean } data-testid={ testId2 }>
          <input
            id="falso"
            type="button"
            name="question"
            value="1"
            onClick={ this.stylesTrueFalse }
            data-testid={ testId2 }
          />
          Falso
        </label>
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
              <label
                htmlFor={ `question${index}` }
                key={ index }
                style={ styleCorrect }
                data-testid="correct-answer"
              >
                <input
                  id={ `question${index}` }
                  type="button"
                  name="multiple"
                  value={ index }
                  onClick={ this.stylesMultiple }
                  style={ styleCorrect }
                />
                {answer}
              </label>
            );
          }
          wrongID += 1;
          return (
            <label
              htmlFor={ `question${index}` }
              key={ index }
              style={ styleIncorrect }
              data-testid={ `wrong-answer-${wrongID - 1}` }
            >
              <input
                id={ `question${index}` }
                type="button"
                name="multiple"
                value={ index }
                onClick={ this.stylesMultiple }
                style={ styleIncorrect }
              />
              {answer}
            </label>
          );
        })}
      </>

    );
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
      </section>
    );
  }
}

Question.propTypes = {
  currentQuestion: PropTypes.objectOf(PropTypes.string, PropTypes.array),
}.isRequired;

export default Question;
