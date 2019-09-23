'use strict';
import Printable from './Printable';

class ToDo implements Printable{
    task: string;
    constructor(task: string) {
        this.task = task;
    }

    printAllFields() {
        console.log(`${this.task}`)
    }
}

function initializeTaskList() {
    const taskList = [];
    taskList.push(new ToDo('Eat lunch.'));
    taskList.push(new ToDo('Watch a movie.'));
    taskList.push(new ToDo('Read a book.'));
    return taskList;
}

const todos = initializeTaskList();

for (let todo of todos) {
    todo.printAllFields();
}