import React from 'react';
import ReactDOM from 'react-dom';
import { UserStorage } from './UserContext';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <UserStorage> 
      <App />
    </UserStorage> 
  </React.StrictMode>,
  document.getElementById('root')
);

