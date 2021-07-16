import React from 'react';
import { func, node, bool, string } from 'prop-types';

import styles from './button.module.scss';

function Button({ children, handleClick, isSubmit, dataTestid, isValidated }) {
  return (
    <button
      className={ styles.button }
      data-testid={ dataTestid }
      type={ isSubmit ? 'submit' : 'button' }
      onClick={ handleClick }
      disabled={ isValidated }
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  handleClick: func.isRequired,
  isSubmit: bool.isRequired,
  isValidated: bool.isRequired,
  dataTestid: string.isRequired,
  children: node,
};

Button.defaultProps = {
  children: '',
};

export default Button;
