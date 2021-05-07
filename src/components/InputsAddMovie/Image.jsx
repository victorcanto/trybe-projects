import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="image_input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          id="image_input"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string,
  handleChange: PropTypes.func,
};

Image.defaultProps = {
  imagePath: '',
  handleChange: PropTypes.func,
};

export default Image;
