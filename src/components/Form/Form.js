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

  const saveStar = (id) => setStar([...star, id]);

  const sendEmail = () => {
    sendEmailContent([...email]);
    document.getElementById('email').value = '';
    document.getElementById('text-area').value = '';
    sendText();
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
        <textarea onBlur={ saveText } id="text-area" />
        <button
          type="button"
          onClick={ sendEmail }
        >
          Avaliar
        </button>
      </form>
      <div className="content-container">
        {starContent.map((elem) => (
          <p key={ elem }>
            (
            {elem}
            )
            {elem === '1' ? 'estrela' : 'estrelas' }
          </p>
        ))}
        {emailContent.map((elem) => (
          <div key={ elem }>
            <p>{elem}</p>
          </div>
        ))}
        {textContent.map((elem2) => (
          <p key={ elem2 }>{elem2}</p>
        ))}
      </div>
    </>
  );
};

export default Form;
