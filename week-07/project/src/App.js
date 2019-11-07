import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import NewPost from './Component/NewPost';

function App() {
  return (
    <div className="App">
      <header></header>
      <Router>
        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/newpost' exact><NewPost /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
