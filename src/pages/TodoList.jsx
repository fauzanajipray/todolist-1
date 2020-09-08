import React, { useState } from 'react';
import Paper from '../components/Paper'
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

const TodoList = () => {
  const [todos, setTodos ] = useState([
    { text: "Belajar React"},
    { text: "Belajar Props"},
    { text: "Belajar State"},
    { text: "Belajar Hooks"},
    { text: "Belajar Next.js"}
  ])

  const addTodo = (value) => {
    const addedtodo = [...todos, {text: value}]
    console.log(addedtodo);

    setTodos(addedtodo);
  }

  return (
    <Paper>
        <Header />
        <TodoForm addTodo={addTodo}/>
        <Todos todos={todos}/>
    </Paper>
  )
}

export default TodoList;
