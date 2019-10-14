import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          text: 'Feed the monkey',
          prio: 2
        },
        {
          text: 'Buy milk',
          prio: 1
        }
      ],
      doneTodo: [
        {
          text: 'Sleep 8 hours',
          prio: 2
        },
        {
          text: 'Mentoring others',
          prio: 1
        }
      ],
    }
    this.done = this.done.bind(this);
    this.delete = this.delete.bind(this);
  }

  done(index) {
    this.state.doneTodo.push(this.state.todo.splice(index, 1)[0]);
    this.setState(this.state);
  }

  delete(index) {
    this.state.doneTodo.splice(index, 1);
    this.setState(this.state);
  }

  generateTodos() {
    return (
      <>
        {this.state.todo.sort((a, b) => a.prio - b.prio).map((item, index) => {
          return <li key={index}>{item.text} <button onClick={this.done}>done</button></li>
        })}
      </>
    );
  }

  generateDoneToDo() {
    return (
      <>
        {this.state.doneTodo.sort((a, b) => a.prio - b.prio).map((item, index) => {
          return <li key={index}>{item.text} <button onClick={this.delete}>done</button></li>
        })}
      </>
    );
  }

  render() {
    return (
      <>
        <p>TODOS:</p>
        <ul>
          {this.generateTodos()}
        </ul>
        <p>DONE TODOS:</p>
        <ul>
          {this.generateDoneToDo()}
        </ul>
      </>
    );
  }
}

export default App;
