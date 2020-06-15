import React from "react";
import './todo-list.css';

import TodoListItem from "../todo-list-item";

const TodoList = ({todos, filters, searchValue}) => {

  const elements = todos?.filter(item => filters ? item[filters] : item)
    .filter(item => searchValue ? item.label.toLowerCase().includes(searchValue.toLowerCase()) : item)
    .map((item) => {
      return (
        <li className="list-group-item" key={item.id}>
          <TodoListItem
            {...item}
          />
        </li>
      );
    });

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};


export default TodoList;
