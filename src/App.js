import React, { Component } from 'react';
import './App.css';
import './style.css';
import Paper from './components/Paper'
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

class App extends Component {
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

export default App;
