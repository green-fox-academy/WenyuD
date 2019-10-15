import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
    this.addItem = this.addItem.bind(this);
    this.delete = this.delete.bind(this);
    this.done = this.done.bind(this);
  }

  addItem() {
    let inputText = document.querySelector('input').value;
    if(inputText.length <= 3) {
      alert('The todo text is too short!');
    } else {
      this.setState({todos: [...this.state.todos, {name: inputText, done: false}]});
      document.querySelector('input').value = '';
    }
  }

  keyDown(event) {
    if (event.key === 'Enter') {
      this.addItem();
    }
  }

  delete(index) {
    let todoList = this.state.todos;
    todoList.splice(index,1);
    this.setState({todos: todoList});
  }

  done(index) {
    let todoList = this.state.todos;
    todoList[index].done = true;
    this.setState({todos: todoList});
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => this.keyDown(event));
  }

  render() {
    return (
      <div className="pageContainer">
        <h2 className="heading">TODOS</h2>
        <div className="addItem">
          <input type="text"/><button className="button-text" onClick={this.addItem}>Add</button>
        </div>
        <ul className="toDoContainer">
          <ToDoList 
            todos={this.state.todos} 
            clickDelete={this.delete} 
            clickDone={this.done}/>
        </ul>
        <Router>
          <Link to='/themes' className='themeSwitcher'>Theme Switcher</Link>
          <Switch exact path='/themes'><ThemeSwitcher /></Switch>
        </Router>
      </div>
    );  
  }
}

// let {theme} = useParams();
// const styles = StyleSheet.create({
//   if ({theme} === 'themed/superman') {

//   }
//   pageContainer: {
//       backgroundColor: 'rgb(235, 233, 233)'
//   },
  
// });



function ToDoList(props) {
  return (
    <>
      {props.todos.map((element, index) => {
        console.log(element, index);

        let checkedStyle = element.done ? {color: 'purple'} : {color: '#b8b8b8'};

        return <li key={index} className="todo-item">
          {element.name}
          <div>
            <FontAwesomeIcon icon={ faTrash } className="icon" onClick={() => {props.clickDelete(index)}}/>
            <FontAwesomeIcon icon={ faCheckCircle } className="icon check" style={checkedStyle} onClick={() => {props.clickDone(index)}}/>
          </div>
        </li>
      })}
    </>
  )
}

function ThemeSwitcher() {
  return (
    <div className="themeSwitcherPage">
      <h3 className="themeHeader">Theme Switcher</h3>
      <Router>
        <Link to='/'>Default</Link>
        <Switch exact path='/'><App /></Switch>
      </Router>
    </div>
  )
}

export default App;
