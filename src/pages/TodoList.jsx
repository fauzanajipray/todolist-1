import React, { useState } from 'react';
import Paper from '../components/Paper/Paper'
import Header from '../components/Header/Header';
import TodoForm from '../components/TodoForm/TodoForm';
import Todos from '../components/Todos/Todos';

const TodoList = () => {

  const [todos, setTodos ] = useState([
    { text: "Belajar React", isCompleted: false},
    { text: "Belajar Props", isCompleted: false},
    { text: "Belajar State", isCompleted: false}
  ])
  const clearTodo = () => {
    !showAdd && setTodos([])  
  }
  const [showAdd, setShowAdd] = useState(false)

  const addTodo = (value) => {
    if (todos.length < 10){
      const addedtodo = [...todos, {text: value, isCompleted: false}]
      console.log(addedtodo);

      setTodos(addedtodo);
    }else {
      alert("Only 10 todos is allowed!")
    }
  }

  const completeTodo = (index) => {
    
    const addedtodo = [...todos]
    addedtodo[index].isCompleted = !addedtodo[index].isCompleted

    setTodos(addedtodo)
  }

  const showAddToggle  = () => setShowAdd(!showAdd)
  
  return (
    <Paper>
        <Header 
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodo={clearTodo} 
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} todos={todos} />
        <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  )
}

export default TodoList;
