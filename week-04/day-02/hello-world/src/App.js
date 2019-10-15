import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/'><Home /></Route>
        <Route exact path = '/error'><Error /></Route>
        <Route exact path = '/error/:errorcode'><ErrorCode /></Route>
        <Route path = '/:whatever'><NotImplemented /></Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  )
}

function Error() {
  return (
    <div>
      <p>Something bad happened.</p>
    </div>
  )
}

function ErrorCode() {
  let {errorcode} = useParams();
  return (
    <div>
      <p>Error: {errorcode}</p>
    </div>
  )
}

function NotImplemented() {
  return (
    <div>
      <p>This page is not implemented yet</p>
    </div>
  )
}

export default App;
