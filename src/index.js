import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {posthog} from 'posthog-js'
import {PostHogProvider} from 'posthog-js/react';

posthog.init('phc_MJ81zkALUgsWwjmLMEIAExDl0PpYNEvWsV3yAbLY6vh',{api_host:'https://us.i.posthog.com'})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <PostHogProvider client={posthog}>
  <App />
  </PostHogProvider>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
