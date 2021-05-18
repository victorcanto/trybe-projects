import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import './Form.css';

const Form = (props) => {
  const [email, setEmail] = React.useState([]);
  const [text, setText] = React.useState([]);
  const { itemId } = props;
  const [emailContent, sendEmailContent] = React
    .useState(
      !localStorage[`${itemId}-email`] ? [] : localStorage.getItem(`${itemId}-email`)
        .split(','),
    );
  const [textContent, sendTextContent] = React
    .useState(
      !localStorage[`${itemId}-text`] ? [] : localStorage.getItem(`${itemId}-text`)
        .split(','),
    );
  const [star, setStar] = React.useState([]);
  const [starContent, sendStarContent] = React.useState([]);

  const sendStar = () => {
    sendStarContent([...star]);
  };

  const sendText = () => {
    sendTextContent([...text]);
    sendStar();
    localStorage
      .setItem(
        `${itemId}-text`, [...textContent, document.getElementById('text-area').value],
      );
  };

  const saveEmail = (e) => {
    setEmail([...email, e.target.value]);
  };

  const saveText = (e) => setText([...text, e.target.value]);
  const saveTextEmpty = () => (
    setText([...text, document.getElementById('text-area').value])
  );

  const saveStar = (id) => {
    setStar([...star, id]);
  };

  const checkTextElem = () => {
    const textElem = document.getElementById('text-area');
    if (textElem.value === '') {
      saveTextEmpty();
    }
  };

  const sendEmail = () => {
    const textElem = document.getElementById('text-area');
    sendEmailContent([...email]);
    checkTextElem();
    sendText();
    localStorage
      .setItem(
        `${itemId}-email`, [...emailContent, document.getElementById('email').value],
      );
    textElem.value = '';
    document.getElementById('email').value = '';
  };

  const starsComment = (stars) => {
    const array = [];
    for (let index = 1; index <= stars; index += 1) {
      array.push('★');
    }
    return <span className="stars">{array}</span>;
  };

  return (
    <>
      <form>
        <div className="email-rating">
          <label htmlFor="email" className="email">
            <input
              id="email"
              name="email"
              placeholder="digite seu email"
              required
              onBlur={ saveEmail }
            />
          </label>
          <Rating setStarCount={ saveStar } />
        </div>
        <textarea
          onBlur={ saveText }
          className="text-area"
          id="text-area"
          data-testid="product-detail-evaluation"
        />
        <button
          type="button"
          onClick={ sendEmail }
        >
          Avaliar
        </button>
      </form>
      <div className="content-container">
        <p>Avaliações: </p>
        {emailContent.map((elem, index) => (
          <div key={ elem } className="comment">
            <p>{elem}</p>
            <p>
              {starsComment(starContent[index])}
            </p>
            <p className="text-area">{textContent[index]}</p>
          </div>
        ))}
      </div>
    </>
  );
};

Form.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default Form;
