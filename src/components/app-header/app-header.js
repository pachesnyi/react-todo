import React from "react";
import './app-header.css'

const AppHeader = ({todos}) => {

  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{todos.filter(todo=> todo.important).length} important, {todos.filter(todo=> todo.done).length} done</h2>
    </div>
  )
}


export default AppHeader;
