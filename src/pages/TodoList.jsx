import React, { Component } from 'react';
import Paper from '../components/Paper'
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

class TodoList extends Component {
  render () {
    return (
      <Paper>
          <Header />
          <TodoForm />
          <Todos />
      </Paper>
    )
  }
}

export default TodoList;
