import './App.css';
import React from 'react';
import Misdemeanour from './Components/Misdemeanour';
import Confession from './Components/Confession';
import Home from './Components/Home';

function App() {

  return (
    <>
    <div className="App">
      <Home />
      <Misdemeanour />
      <Confession />
    </div>
    </>
  );
}

export default App;
