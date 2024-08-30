import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './styles/globalStyle';
import { GlobalProvider } from './context/globalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GlobalStyle/>
  <GlobalProvider> 
  {/* Global Providing context to all components in App */}
    <App />
  </GlobalProvider>
  </React.StrictMode>
);

