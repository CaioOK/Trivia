import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestionsAC } from '../actions';
import Header from '../components/Header';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { getQuestionsFromAPI } = this.props;
    const time = 1500;
    setTimeout(() => {
      getQuestionsFromAPI()
        .then(() => {
          this.setState({
            loading: false,
          });
        });
    }, time);
  }

  render() {
    const { questionsFromStore } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <Header />
        {loading
          ? 'Carregando...'
          : <Question currentQuestion={ questionsFromStore[0] } />}
      </div>
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
