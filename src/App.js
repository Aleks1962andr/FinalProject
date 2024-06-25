
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { OrderProvider } from './OrderContext';
import Main from './Main'; 

function App() {
  return (
    <Router>
      <OrderProvider>
        <Main /> 
      </OrderProvider>
    </Router>
  );
}

export default App;
