import React from 'react'
import Todo from './Todo'


const Todos = () => {
    const todos = [
        {
            text: "Belajar React"
        },
        {
            text: "Belajar Props"
        },
        {
            text: "Belajar State"
        },
        {
            text: "Belajar Hooks"
        },
        {
            text: "Belajar Next.js"
        },
        {
            text: "Belajar React"
        },
        {
            text: "Belajar Props"
        },
        {
            text: "Belajar State"
        },
        {
            text: "Belajar Hooks"
        },
        {
            text: "Belajar Next.js"
        }
    ]
    return (
        <section class="todos">
            {todos.map(todo => (
                <Todo text={todo.text}/>
            ))}
        </section>
    )
}

export default Todos