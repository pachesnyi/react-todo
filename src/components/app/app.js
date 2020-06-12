import React, {useState} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import {connect} from "react-redux";
import TodoListAdd from "../todo-list-add";

const App = ({todoData}) => {

  const [filters, setFilters] = useState(null);

  const [searchValue, setSearch] = useState('');

  return (
    <div className="todo-app">
      <AppHeader todos={todoData}/>
      <div className="top-panel d-flex">
        <SearchPanel
          setSearch = {setSearch}
        />
        <ItemStatusFilter
          filters={filters}
          setFilters={setFilters}
        />
      </div>
      <TodoList
        filters={filters}
        searchValue={searchValue}
        todos={todoData}
      />
      <TodoListAdd/>
    </div>
  )
}

const mapToState = state => ({
  todoData: state.todos
})

export default connect(
  mapToState,
)(App);
