import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      firstName:'',
      lastName:'',
      age: null,
      gender: null,
      destination: '',
      dietaryRestriction: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value, type} = event.target;
    type === 'checkbox' ? this.setState({dietaryRestriction: [...this.state.dietaryRestriction, value]}) : this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name
            <input type="text" name="firstName" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Last Name
            <input type="text" name="lastName" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Age
            <input type="number" name="age" onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Gender
            <input type="radio" name="gender" value="Male" onChange={this.handleChange}/>Male
            <input type="radio" name="gender" value="Female" onChange={this.handleChange}/>Female
          </label>
          <br/>
          <label>
            Destination
            <select name="destination" onChange={this.handleChange}>
              <option value="Shenzhen">Shenzhen</option>
              <option value="Nanjing">Nanjing</option>
              <option value="Hangzhou">Hangzhou</option>
            </select>
          </label>
          <br/>
          <label>
            Dietary Restriction
            <input type="checkbox" name="dietaryRestriction" value="Vegetarian" onChange={this.handleChange}/>Vegetarian
            <input type="checkbox" name="dietaryRestriction" value="Kosher" onChange={this.handleChange}/>Kosher
            <input type="checkbox" name="dietaryRestriction" value="Lactose Free" onChange={this.handleChange}/>Lactose Free
          </label>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;
