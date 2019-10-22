import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      emailAddress: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  validate() {
    if(this.state.username==='' || !this.state.emailAddress.includes('@') || this.state.password.length<8) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    let isValid = this.validate();
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
          <input type="email" name="emailAddress" placeholder="email address" onChange={this.handleChange}/>
          <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
          <button type="submit" disabled={!isValid}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
