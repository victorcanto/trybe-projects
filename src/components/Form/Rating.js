import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import './Form.css';

const Rating = (props) => {
  const checkStart = (e) => props.setStarCount(e.target.id[4]);

  return (
    <div className="rating">
      <label htmlFor="star1">
        <input
          type="radio"
          name="star"
          id="star1"
          onClick={ (e) => checkStart(e) }
          className="star-input"
        />
        <AiTwotoneStar className="star-font" />
      </label>
      <label
        htmlFor="star2"
      >
        <input
          type="radio"
          name="star"
          id="star2"
          onClick={ (e) => checkStart(e) }
          className="star-input"
        />
        <AiTwotoneStar className="star-font" />
      </label>
      <label htmlFor="star3">
        <input
          type="radio"
          name="star"
          id="star3"
          onClick={ (e) => checkStart(e) }
          className="star-input"
        />
        <AiTwotoneStar className="star-font" />
      </label>
      <label htmlFor="star4">
        <input
          type="radio"
          name="star"
          id="star4"
          onClick={ (e) => checkStart(e) }
          className="star-input"
        />
        <AiTwotoneStar className="star-font" />
      </label>
      <label htmlFor="star5">
        <input
          type="radio"
          name="star"
          id="star5"
          onClick={ (e) => checkStart(e) }
          className="star-input"
        />
        <AiTwotoneStar className="star-font" htmlFor="star5" />
      </label>
    </div>
  );
};

Rating.propTypes = {
  setStarCount: PropTypes.func.isRequired,
};

export default Rating;
