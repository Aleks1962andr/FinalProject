import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Main from './Main'; 

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Main /> 
      </Provider>
    </Router>
  );
}

export default App;

