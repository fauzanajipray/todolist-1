import React, { useState } from 'react';
import Paper from '../components/Paper'
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

const TodoList = () => {
  const [todos, setTodos ] = useState([
    { text: "Belajar React", isCompleted: false},
    { text: "Belajar Props", isCompleted: false},
    { text: "Belajar State", isCompleted: false}
  ])
  const [showAdd, setShowAdd] = useState(false)

  const addTodo = (value) => {
    const addedtodo = [...todos, {text: value, isCompleted: false}]
    console.log(addedtodo);

    setTodos(addedtodo);
  }

  const completeTodo = (index) => {
    const addedtodo = [...todos]
    addedtodo[index].isCompleted = !addedtodo[index].isCompleted

    setTodos(addedtodo)
  }

  const showAddToggle  = () => setShowAdd(!showAdd)

  return (
    <Paper>
        <Header showAddToggle={showAddToggle} showAdd={showAdd}/>
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  )
}

export default TodoList;
