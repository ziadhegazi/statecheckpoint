import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App 
      fullname={"Ziad Hegazi"} 
      bio={"I am fluent in English and an easy going person with great communication skills. I also am great with computers and technology and fixing problems. I self-teach myself some new skills frequently like new programming languages, and skills to use. Well motivated and self-disciplined driven by the motive of always improving myself constantly. "} 
      profession={"Full Stack Developer"}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
