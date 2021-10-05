import React from 'react';
import PropTypes from 'prop-types';

export default function TableBtn({ id, onClick, dataTestid, className, children }) {
  return (
    <button
      className={ className }
      type="button"
      data-testid={ dataTestid }
      onClick={ onClick(id) }
    >
      {children}
    </button>
  );
}

TableBtn.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
