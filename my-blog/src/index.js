import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA52M7BQF9F_6WRy2EQn3hJd3heeN6sFZA",
  authDomain: "my-react-blog-b79c5.firebaseapp.com",
  projectId: "my-react-blog-b79c5",
  storageBucket: "my-react-blog-b79c5.appspot.com",
  messagingSenderId: "352185123050",
  appId: "1:352185123050:web:3ccf9c3a0ff32d58cb9793"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
