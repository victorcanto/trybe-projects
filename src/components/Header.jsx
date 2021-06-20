import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { setPicturePath } from '../Redux/actions';
import '../styles/header.css';

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
    const { email, setPicture } = this.props;
    this.setState({
      emailHash: md5(email).toString(),
    }, () => {
      const { emailHash } = this.state;
      setPicture(`https://www.gravatar.com/avatar/${emailHash}`);
    });
  }

  render() {
    const { name, score = 0 } = this.props;
    const { emailHash } = this.state;
    return (
      <header>
        <div className="left-container">
          <img
            data-testid="header-profile-picture"
            alt="Avatar-do-usuario"
            src={ `https://www.gravatar.com/avatar/${emailHash}` }
          />
        </div>
        <div className="center-container">
          <p><b>TRIVIA GAME</b></p>
        </div>
        <div className="right-container">
          <p data-testid="header-player-name">{name}</p>
          <p data-testid="header-score">{score}</p>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPicture: (url) => dispatch(setPicturePath(url)),
});

const mapStateToProps = (state) => ({
  name: state.loginReducer.name,
  email: state.loginReducer.email,
  score: state.scoreReducer.total,
});

Header.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
