import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import DataFetching from './components/DataFetching';

function App() {
  
  return (
    <div className="App">
      <header><DataFetching/></header>
    </div>
  );
}

export default App;
