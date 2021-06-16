import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Timer from './Timer';
import { addAnswer } from '../actions/index';

class Question extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  trueOfFalse(parametro) {
    let testId1 = `wrong-answer-${0}`;
    let testId2 = `wrong-answer-${0}`;
    if (parametro === 'True') {
      testId1 = 'correct-anwser';
    } else testId2 = 'correct-anwser';
    return (
      <>
        <label htmlFor="verdadeiro">
          <input
            id="verdadeiro"
            type="radio"
            name="question"
            value="verdadeiro"
            data-testid={ testId1 }
          />
          Verdadeiro
        </label>
        <label htmlFor="falso">
          <input
            id="falso"
            type="radio"
            name="question"
            value="falso"
            data-testid={ testId2 }
          />
          Falso
        </label>
      </>
    );
  }

  multiple(answers, correctId) {
    let wrongID = 0;
    return (
      <>
        {answers.map((answer, index) => {
          if (index === correctId) {
            return (

              <label
                htmlFor={ `question${index}` }
                key={ index }
              >
                <input
                  id={ `question${index}` }
                  type="radio"
                  name="multiple"
                  value={ answer }
                  data-testid="correct-answer"
                  onChange={ this.handleClick }
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
            >
              <input
                id={ `question${index}` }
                type="radio"
                name="multiple"
                value={ answer }
                data-testid={ `wrong-answer-${wrongID - 1}` }
                onChange={ this.handleClick }
                // disabled={  }
              />
              {answer}
            </label>
          );
        })}
      </>

    );
  }

  handleClick(flag, event) {
    const { assertions, currentQuestion: { correct_answer: correctAnswer } } = this.props;
    if (flag === undefined) {
      if (correctAnswer === event.target.value) {
        assertions(1);
      }
    } else {
      console.log('errou');
    }
  }

  render() {
    const { currentQuestion } = this.props;
    if (!currentQuestion) return <div>Carregando...</div>;
    const { category, question, type, correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers } = currentQuestion;
    const answers = [correctAnswer, ...incorrectAnswers];
    const meio = 0.5;
    const currentAnswer = answers.sort(() => Math.random() - meio);
    const correctId = currentAnswer.indexOf(correctAnswer);

    return (
      <section style={ { display: 'flex', flexDirection: 'column' } }>
        <h3 data-testid="question-category">{category}</h3>
        <p data-testid="question-text">{question}</p>
        <div style={ { display: 'flex', flexDirection: 'column' } }>
          {type === 'boolean'
            ? this.trueOfFalse(correctAnswer) : this.multiple(currentAnswer, correctId)}
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
