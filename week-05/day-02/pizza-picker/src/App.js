import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      base: '',
      topping: [],
      cut: false,
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value, type} = event.target;
    type === 'checkbox' ? 
      this.setState({topping: [...this.state.topping, value]}) : 
      (type === 'radio' ? 
        this.setState({cut: value}) : 
        this.setState({[name]: value})
      );
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
            Base<br />
            <select name="base" onChange={this.handleChange}>
              <option value="base1">base 1</option>
              <option value="base2">base 2</option>
              <option value="base3">base 3</option>
            </select>
          </label>
          <br/>
          <br/>
          <label>
            Topping<br />
            <input type="checkbox" value="topping1" onChange={this.handleChange}/>topping1
            <input type="checkbox" value="topping2" onChange={this.handleChange}/>topping2
            <input type="checkbox" value="topping3" onChange={this.handleChange}/>topping3
          </label>
          <br/>
          <br/>
          <label>
            Cut or Not<br />
            <input type="radio" name="cut" value="cut" onChange={this.handleChange}/>cut
            <input type="radio" name="cut" value="no" onChange={this.handleChange}/>don't cut
          </label>
          <br/>
          <br/>
          <label>
            Additional Comment<br />
            <textarea name="comment" cols="30" rows="10" onChange={this.handleChange}></textarea>
          </label>
          <br/>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
