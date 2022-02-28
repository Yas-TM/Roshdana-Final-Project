import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'react-bootstrap';
import {AuthProvider} from './context/authContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider dir='rtl'>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
