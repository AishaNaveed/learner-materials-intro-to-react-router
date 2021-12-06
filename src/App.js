import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './Components/Router';

function App() {

  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
