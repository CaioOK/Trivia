import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addInfo } from '../actions';
import { getToken } from '../Services/fetchApi';
import '../styles/login.css';

class Login extends React.Component {
  constructor(_props) {
    super(_props);

    this.handleChange = this.handleChange.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      name: '',
      gravatarEmail: '',
      loggedIn: false,
    };
  }

  handleChange(event) {
    const { id: name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  validateFields(name, email) {
    const regex = /[^@]+@[^.]+\..+/g;

    const emailTest = regex.test(String(email).toLocaleLowerCase());
    const nameTest = name.length > 0;

    return (emailTest && nameTest);
  }

  handleClick() {
    const { name, gravatarEmail } = this.state;
    const { clickLogin } = this.props;
    clickLogin({ gravatarEmail, name });
    getToken();
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    const { name, gravatarEmail, loggedIn } = this.state;
    const isDisabled = !this.validateFields(name, gravatarEmail);

    return (
      <div id="login-container">
        <div id="form-contaner">
          <label htmlFor="name">
            Nome:
            <input
              id="name"
              data-testid="input-player-name"
              type="text"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="gravatarEmail" id="email-label">
            Email:
            <input
              id="gravatarEmail"
              value={ gravatarEmail }
              data-testid="input-gravatar-email"
              type="email"
              onChange={ this.handleChange }
            />
          </label>
          {loggedIn ? <Redirect to="/info-games" /> : (
            <button
              type="submit"
              data-testid="btn-play"
              onClick={ this.handleClick }
              disabled={ isDisabled }
            >
              Jogar
            </button>
          )}
          <Link to="/settings">
            <button type="button" data-testid="btn-settings">Menu</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clickLogin: (info) => dispatch(addInfo(info)),
});

Login.propTypes = {
  clickLogin: PropTypes.func,

}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
