import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './contexts/userContext';

ReactDOM.render(
  <BrowserRouter>
   <React.StrictMode>
   <UserContextProvider>
      <GlobalStyle/>
      <App />
   </UserContextProvider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
