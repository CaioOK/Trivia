import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestionsAC } from '../actions';

class Game extends Component {
  componentDidMount() {
    const { getQuestionsFromAPI } = this.props;
    getQuestionsFromAPI();
  }

  render() {
    return (
      <div>
        <Question />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getQuestionsFromAPI: () => dispatch(fetchQuestionsAC()),
});

Game.propTypes = {
  getQuestionsFromAPI: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Game);
