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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addItem(inputText) {
    if(inputText.length > 3) {
      this.setState({todos: [...this.state.todos, {name: inputText, done: false}]});
    } else {
      alert('This input text is too short!')
    }
  }

  keyDown(event) {
    if (event.key === 'Enter') {
      this.addItem();
    }
  }

  handleSubmit(event) {
    event.target.value = '';
    event.preventDefault();
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
      <>
        <Router>
        <Switch> 
          <Route exact path='/'> 
            <Home 
              addItem = {this.addItem}
              delete = {this.delete}
              done = {this.done}
              todos = {this.state.todos}
              handleSubmit = {this.handleSubmit}/>
          </Route>
          <Route exact path='/themed/:themes'>
          <Home 
              addItem = {this.addItem}
              delete = {this.delete}
              done = {this.done}
              todos = {this.state.todos}
              handleSubmit = {this.handleSubmit}
              />
          </Route>
          <Route exact path='/themed'>
            <ThemeSwitcher />
          </Route>
        </Switch>
        </Router>
      </>
    );  
  }
}



function Home(props) {
  let todoText = '';
  let { themes } = useParams();
  
  const styles = StyleSheet.create({
    pageContainer: {
      backgroundColor: 'rgb(235, 233, 233)'
    },
  
    pageContainerSuperman: {
      backgroundColor: 'blue'
    },

    pageContainerBatman: {
      backgroundColor: 'yellow'
    }
  });
  
  const pageContainer = css(
    (themes === undefined) ? styles.pageContainer : ((themes === 'superman') ? styles.pageContainerSuperman : styles.pageContainerBatman)  
  )
  
  return (
    <div className={pageContainer}>
      <h2 className="heading">TODOS</h2>
      <div className="addItem">
        <input 
          type="text"
          onChange={event => todoText = event.target.value}
          onSubmit={props.handleSubmit}/>          
        <button className="button-text" onClick={() => props.addItem(todoText)}>Add</button>
      </div>
      <ul className="toDoContainer">
        {props.todos.map((element, index) => {
          console.log(element);
          
          let checkedStyle = element.done ? {color: 'purple'} : {color: '#b8b8b8'};
          
          return <li key={index} className="todo-item">
            {element.name}
            <div>
              <FontAwesomeIcon icon={ faTrash } className="icon" onClick={() => {props.delete(index)}}/>
              <FontAwesomeIcon icon={ faCheckCircle } className="icon check" style={checkedStyle} onClick={() => {props.done(index)}}/>
            </div>
          </li>
        })}
      </ul>
      <Link to='/themed' className='themeSwitcher'>Theme Switcher</Link>
    </div>
  )
}




function ThemeSwitcher(props) {
  return (
    <div className="themeSwitcherPage">
      <h3 className="themeHeader">Theme Switcher</h3>
        <Link to='/'>Default</Link>
        <Link to='/themed/superman'>Superman</Link>
        <Link to='/themed/batman'>Batman</Link>
    </div>
  )
}

export default App;
