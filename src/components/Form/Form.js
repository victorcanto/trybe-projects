import React from 'react';
import Rating from './Rating';
import './Form.css';

const Form = () => {
  const [email, setEmail] = React.useState([]);
  const [text, setText] = React.useState([]);
  const [emailContent, sendEmailContent] = React.useState([]);
  const [textContent, sendTextContent] = React.useState([]);
  const [star, setStar] = React.useState([]);
  const [starContent, sendStarContent] = React.useState([]);

  const sendStar = () => sendStarContent([...star]);

  const sendText = () => {
    sendTextContent([...text]);
    sendStar();
  };

  const saveEmail = (e) => {
    setEmail([...email, e.target.value]);
  };

  const saveText = (e) => setText([...text, e.target.value]);
  const saveTextEmpty = () => (
    setText([...text, document.getElementById('text-area').value])
  );

  const saveStar = (id) => setStar([...star, id]);

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
    document.getElementById('email').value = '';
    textElem.value = '';
    sendText();
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

export default Form;
