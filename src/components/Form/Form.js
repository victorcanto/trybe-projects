import React from 'react';

const Form = () => (
  <>
    <form>
      <div className="email-rating">
        <label htmlFor="email">
          <input id="email" name="email" placeholder="digite seu email" />
        </label>
        <div className="rating">
          <label htmlFor="star1">
            <input type="radio" name="star1" id="star1" />
          </label>
          <label htmlFor="star2">
            <input type="radio" name="star2" id="star2" />
          </label>
          <label htmlFor="star3">
            <input type="radio" name="star3" id="star3" />
          </label>
          <label htmlFor="star4">
            <input type="radio" name="star4" id="star4" />
          </label>
          <label htmlFor="star5">
            <input type="radio" name="star5" id="star5" />
          </label>
        </div>
      </div>
      <textarea ></textarea>
    </form>
    <div className="content-container">

    </div>
  </>
);

export default Form;
