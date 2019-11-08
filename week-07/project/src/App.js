import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import NewPost from './Component/NewPost';
import fetchPosts from './actions/fetchPosts';

function App(props) {
  useEffect(() => props.fetchPosts(), []);

  return (
    <div className="App">
      <header>
        <span className="title">SPACE</span>
      </header>
      <Router>
        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/newpost' exact><NewPost /></Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchPosts: () => dispatch(fetchPosts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
