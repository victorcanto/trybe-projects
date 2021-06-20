import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { saveQuestionsThunk, loginActionThunk } from '../Redux/actions';
import { fetchToken } from '../services/Api';
import '../styles/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async saveLocalStorage() {
    const { token } = await fetchToken();
    localStorage.setItem('token', token);
    return token;
  }

  async handleClick() {
    const { login, save } = this.props;
    const token = await this.saveLocalStorage();
    login({ ...this.state, token });
    const DEFAULT_AMOUNT = 5;
    save(DEFAULT_AMOUNT, token);
  }

  render() {
    const { name, email } = this.state;
    return (
      <form>
        <div className="login-inputs-container">
          <div className="login-inputs">
            <label htmlFor="name">
              Nome:
              <input
                type="text"
                name="name"
                id="name"
                data-testid="input-player-name"
                onChange={ this.handleChange }
                value={ name }
              />
            </label>
          </div>
          <div className="login-inputs">
            <label htmlFor="Email">
              Email:
              <input
                type="email"
                name="email"
                id="email"
                data-testid="input-gravatar-email"
                onChange={ this.handleChange }
                value={ email }
              />
            </label>
          </div>
        </div>
        <div className="login-buttons-container">
          <Link to="/game">
            <button
              type="button"
              data-testid="btn-play"
              disabled={ !(email && name) }
              onClick={ this.handleClick }
            >
              Jogar
            </button>
          </Link>
          <Link id="a-settings" to="/settings">
            <FiSettings className="btn-settings" data-testid="btn-settings" />
          </Link>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.loginReducer.token,
});

const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(loginActionThunk(state)),
  save: (amount, token) => dispatch(saveQuestionsThunk(amount, token)),
});

Login.propTypes = {
  login: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
