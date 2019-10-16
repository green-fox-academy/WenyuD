import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: []
    };
    this.recordUnmountTime = this.recordUnmountTime.bind(this);
  }

  recordUnmountTime(startTime, unmountTime, component) {
    this.setState({action:[...this.state.action, {startTime: startTime, unmountTime: unmountTime, justUnmount: component}]});
  }

  render() {
    return (
      <>
        <Router>
          <Table 
            action = {this.state.action}
          />
          <Switch>
            <Route exact path="/componentone">
              <ComponentOne
                recordUnmountTime = {this.recordUnmountTime}
              />
            </Route>
            <Route exact path="/componenttwo">
              <ComponentTwo
                recordUnmountTime = {this.recordUnmountTime}
              />
            </Route>
          </Switch>
          <Link to="/componentone">componentone<br/></Link>
          <Link to="/componenttwo">componenttwo</Link>
        </Router>
      </>
    );
  }
}

function Table(props) {
  console.log(props);
  return (
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {props.action.map((element, index) => {
          return <tr key={index}><td>{element.justUnmount}</td><td>{((element.unmountTime-element.startTime)/1000).toFixed(0) + 's'}</td></tr>
        })}
      </tbody>
    </table>
  )
}

class ComponentOne extends React.Component {
  constructor(props) {
    super(props);
    this.startTime = 0;
  }
  componentDidMount() {
    this.startTime = Date.now();
  }
  componentWillUnmount() {
    this.props.recordUnmountTime(this.startTime, Date.now(), 'Component 1');
  }
  render() {
    return (
      <>
        <p>This is the content of Component 1</p>
      </>
    )
  }
}

class ComponentTwo extends React.Component {
  constructor(props) {
    super(props);
    this.startTime = 0;
  }
  componentDidMount() {
    this.startTime = Date.now();
  }
  componentWillUnmount() {
    this.props.recordUnmountTime(this.startTime, Date.now(), 'Component 2');
  }
  render() {
    return (
      <>
        <p>This is the content of Component 2</p>
      </>
    )
  }
}

export default App;
