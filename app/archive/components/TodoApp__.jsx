import React from 'react';
import * as Redux from 'react-redux';
//var uuid = require('node-uuid');
//var moment = require('moment');

//var TodoList = require('TodoList');
import TodoList from 'TodoList'
//var AddTodo = require('AddTodo');
import AddTodo from 'AddTodo';
//var TodoSearch = require('TodoSearch');
import TodoSearch from 'TodoSearch';
// var TodoAPI = require('TodoAPI');
import * as actions from 'actions';

export var TodoApp = React.createClass({
  // getInitialState: function () {
  //   return {
  //     showCompleted: false,
  //     searchText: '',
  //     todos: TodoAPI.getTodos()
  //     //[
  //     //   {
  //     //     id: uuid(),
  //     //     text: 'Walk the dog',
  //     //     completed: false
  //     //   }, {
  //     //     id: uuid(),
  //     //     text: 'Clean the yard',
  //     //     completed: true
  //     //   }, {
  //     //     id: uuid(),
  //     //     text: 'Feed the cat',
  //     //     completed: true
  //     //   }, {
  //     //     id: uuid(),
  //     //     text: 'Wash the car',
  //     //     completed: false
  //     //   }
  //     // ]
  //   };
  // },
  // componentDidUpdate: function () {
  //   TodoAPI.setTodos(this.state.todos);
  // },
  // handleAddTodo: function (text) {
  //   this.setState({
  //     todos: [
  //       ...this.state.todos,
  //       {
  //         id: uuid(),
  //         text: text,
  //         completed: false,
  //         createdAt: moment().unix(),
  //         completedAt: undefined
  //       }
  //     ]
  //   });
  // },
  // handleToggle: function (id) {
  //   var updatedTodos =this.state.todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //       todo.completedAt = todo.completed ? moment().unix() : undefined;
  //     }
  //
  //     return todo;
  //   });
  //   this.setState({todos: updatedTodos});
  // },
  // handleSearch: function (showCompleted, searchText) {
  //     this.setState({
  //       showCompleted: showCompleted,
  //       searchText: searchText.toLowerCase()
  //     });
  //   },
  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },
    render() {
      // var {todos, showCompleted, searchText} = this.state;
      // var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      return (
        <div>
          <div className="page-actions">
            <a href="#" onClick={this.onLogout}>Logout</a>
          </div>
          <h1 className="page-title">Todo App</h1>

          <div className="row">
            <div className="column small-centered small-11 medium-6 large-5">
              <div className="container">
                <TodoSearch/>
                <TodoList/>
                <AddTodo/>
              </div>
            </div>
          </div>
        </div>
      )
    }
  });

//module.exports = TodoApp;
export default Redux.connect()(TodoApp);
