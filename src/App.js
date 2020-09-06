import React, { Component } from 'react';
import './App.css';
import './style.css';

class App extends Component {
  render () {
    return (
      <div className="container">
        <div className="frame">
          <section className="header">
            <button className="header-btn main-black-color">Add</button>
            <h1 className="header-title">todo list</h1>
            <button className="header-btn main-red-color">Clear</button> 
          </section>
          <section className="add">
            <form action="" className="add-form">
              <input type="text" className="add-input" />
              <button className="add-btn main-black-color">Add</button>
            </form>
          </section>
          <section class="todos">
            <div class="todo">
                <span class="todo-text">Learning React</span>
            </div>
            <div class="todo">
                <span class="todo-text">Learning React</span>
            </div>
            <div class="todo">
                <span class="todo-text">Learning React</span>
            </div>
            <div class="todo">
                <span class="todo-text">Learning React</span>
            </div>
            <div class="todo">
                <span class="todo-text">Learning React</span>
            </div>
            <div class="todo">
                <span class="todo-text">Learning React</span>
            </div>
            <div class="todo">
                <span class="todo-text">Learning React</span>
            </div>
            <div class="todo">
                <span class="todo-text">Learning React</span>
            </div>
            <div class="todo">
                <span class="todo-text">Learning React</span>
            </div>
            <div class="todo">
                <span class="todo-text">Learning React</span>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App;
