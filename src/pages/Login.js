import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import userAction from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validate(email, password) {
    // source regex: https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    const re = /\S+@\S+\.\S+/;
    const minimumCharacters = 6;
    const emailTest = re.test(email);
    const passwordTest = password.length >= minimumCharacters;

    return !(emailTest && passwordTest);
  }

  render() {
    const { email, password } = this.state;
    const disabled = this.validate(email, password);
    const { userActionProp } = this.props;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input
            data-testid="email-input"
            type="email"
            name="email"
            id="user_email"
            placeholder="Digite seu e-mail"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            id="user_password"
            placeholder="Digite sua senha"
            value={ password }
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ disabled }
              onClick={ () => userActionProp(email) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userActionProp: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  userActionProp: PropTypes.func.isRequired,
};
