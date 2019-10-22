import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      registration: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    let newRegistration = [];
    newRegistration.push(this.state.firstName);
    newRegistration.push(this.state.lastName);
    newRegistration.push(this.state.email);
    this.setState({
      registration: [...this.state.registration, newRegistration]
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
          <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
          <input type="email" name="email" placeholder="Email Address" onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {this.state.registration.map((element, index)=> {
            return <li key={index}>first name: {element[0]}, last name: {element[1]}, email: {element[2]}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
