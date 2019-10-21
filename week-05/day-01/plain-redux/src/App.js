import React, { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { createStore } from 'redux';
import Reducer from './Reducer';

import Increaser from './components/increaser';
import Decreaser from './components/decreaser';
import Resetter from './components/resetter';

function App() {
  return (
    <div className="App">
      <Increaser />
      <Decreaser />
      <Resetter />
    </div>
  );
}

export default App;