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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
    this.addItem = this.addItem.bind(this);
    this.delete = this.delete.bind(this);
    this.done = this.done.bind(this);
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
      <Home 
        addItem = {this.addItem}
        delete = {this.delete}
        done = {this.done}
        todos = {this.state.todos}/>
      // <div className="pageContainer">
      //   <h2 className="heading">TODOS</h2>
      //   <div className="addItem">
      //     <input type="text"/><button className="button-text" onClick={this.addItem}>Add</button>
      //   </div>
      //   <ul className="toDoContainer">
      //     <ToDoList 
      //       todos={this.state.todos} 
      //       clickDelete={this.delete} 
      //       clickDone={this.done}/>
      //   </ul>
      //   <Router>
      //     <Link to='/themes' className='themeSwitcher'>Theme Switcher</Link>
      //     <Switch exact path='/themes'><ThemeSwitcher /></Switch>
      //   </Router>
      // </div>
    );  
  }
}

function Home(props) {
  let todoText = '';
  return (
    <div className="pageContainer">
      <h2 className="heading">TODOS</h2>
      <div className="addItem">
        <input 
          type="text"
          onChange={event => todoText = event.target.value}/>
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
      <Router>
        <Link to='/themes' className='themeSwitcher'>Theme Switcher</Link>
        <Switch exact path='/themes'>
          <ThemeSwitcher 
            addItem = {props.addItem}
            delete = {props.delete}
            done = {props.done}
            todos = {props.todos}/>
        </Switch>
      </Router>
    </div>
  )
}

// let {theme} = useParams();
// const styles = StyleSheet.create({
//   if ({theme} === 'themed/superman') {

//   }
//   pageContainer: {
//       backgroundColor: 'rgb(235, 233, 233)'
//   },
  
// });



function ThemeSwitcher(props) {
  return (
    <div className="themeSwitcherPage">
      <h3 className="themeHeader">Theme Switcher</h3>
      <Router>
        <Link to='/'>Default</Link>
        <Switch> 
          <Route exact path='/'>
            <Home 
              addItem = {props.addItem}
              delete = {props.delete}
              done = {props.done}
              todos = {props.todos}/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
