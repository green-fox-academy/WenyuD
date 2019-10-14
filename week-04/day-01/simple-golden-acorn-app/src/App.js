import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handleBuy = this.handleBuy.bind(this);
    this.handleEat = this.handleEat.bind(this);
  }

  handleBuy() {
    this.setState({count: this.state.count + 1});
  }

  handleEat() {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1});
    }
  }

  keyUp = (event) => {
    switch (event.key) {
        case 'ArrowUp':
            this.handleBuy();
            break;
        
        case 'ArrowDown':
            this.handleEat();
            break;

        default:
            break;
    }
  }

  render() {
    return (
      <div className="App">
        <button id="buy" onClick={this.handleBuy}>Buy one</button>
        <p id="acornNumber">{this.state.count}</p>
        <button id="eat" onClick={this.handleEat}>Eat one</button>
        {document.addEventListener('keydown', this.keyUp)}
      </div>
    );
  }
}

export default App;
