import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      emailHash: '',
    };
    this.setEmailHash = this.setEmailHash.bind(this);
  }

  componentDidMount() {
    this.setEmailHash();
  }

  setEmailHash() {
    const { email } = this.props;
    this.setState({
      emailHash: md5(email).toString(),
    });
  }

  render() {
    const { name, score = 0 } = this.props;
    const { emailHash } = this.state;
    return (
      <header>
        <img
          data-testid="header-profile-picture"
          alt="Avatar-do-usuario"
          src={ `https://www.gravatar.com/avatar/${emailHash}` }
        />
        <p data-testid="header-player-name">{name}</p>
        <p data-testid="header-score">{score}</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.loginReducer.name,
  email: state.loginReducer.email,
  score: state.scoreReducer.total,
});

Header.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
