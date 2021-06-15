import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveQuestionsThunk, loginActionThunk } from '../Redux/actions';
import { fetchToken } from '../services/Api';

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
  }

  handleClick() {
    const { login, save } = this.props;
    this.saveLocalStorage();
    login(this.state);
    const DEFAULT_AMOUNT = 5;
    const { token } = this.props;
    save(DEFAULT_AMOUNT, token);
  }

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <form>
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
        </form>
        <Link to="/settings">
          <button type="button" data-testid="btn-settings">
            Settings
          </button>
        </Link>
      </div>
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
