import React from 'react';
import { Redirect } from 'react-router-dom';
import getToken from '../Services/fetchApi';

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
    // const { name, email } = this.state;
    getToken();
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    const { name, gravatarEmail, loggedIn } = this.state;
    const isDisabled = !this.validateFields(name, gravatarEmail);
    return (
      <div>
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
        <label htmlFor="gravatarEmail">
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
      </div>
    );
  }
}

export default Login;
