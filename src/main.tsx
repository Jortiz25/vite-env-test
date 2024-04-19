import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log({
  env1: import.meta.env.VITE_BASE_URL_API,
  env2: import.meta.env.BASE_URL_IMAGE,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
