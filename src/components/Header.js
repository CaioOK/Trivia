import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as api from '../Services/fetchApi';
import '../styles/header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: '',
    };
  }

  componentDidMount() {
    const { email, name } = this.props;
    const state = { player: {
      name,
      assertions: 0,
      score: 10,
      gravatarEmail: email,
    } };

    if (!localStorage.getItem('state')) {
      localStorage.setItem('state', JSON.stringify(state));
    }

    api.fetchGravatar(email).then((imgUrl) => this.setState({ imgUrl }));
  }

  render() {
    const stateLS = JSON.parse(localStorage.getItem('state'));

    if (!stateLS) return <div>Carregando...</div>;

    const { imgUrl } = this.state;
    const { name } = this.props;
    const { score } = stateLS.player;

    return (
      <header id="header-container">
        <div id="score-container">
          <h4>Score:</h4>
          <p data-testid="header-score" id="score">{score}</p>
        </div>
        <div id="profile">
          <img src={ imgUrl } alt="foto-perfil" data-testid="header-profile-picture" />
          <span data-testid="header-player-name">{ name }</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.loginReducer.email,
  name: state.loginReducer.name,
  scoreRedux: state.answerReducer.answer,
});

Header.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,

}.isRequired;

export default connect(mapStateToProps, null)(Header);
