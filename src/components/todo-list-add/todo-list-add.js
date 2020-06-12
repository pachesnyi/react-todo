import React, {useState} from "react";
import './todo-list-add.css'
import {ADD_TODO} from "../../store/actions";
import {connect} from "react-redux";


const TodoListAdd = ({addTodo}) => {

  const [formText, setFormText] = useState('')

  const onFormSubmit = (event)=> {
    event.preventDefault();
    addTodo({
      label: formText,
      important: false
    })
  }

  const onInputChange = (event) => {
    setFormText(event.target.value);
  }

  return (
    <form onSubmit={(event)=> onFormSubmit(event)} className="form-inline form-adding">
      <input className="form-control" placeholder="Todo text here..." value={formText} onChange={(event)=>onInputChange(event)} type="text"/>
      <input className="btn btn-success" type="submit" value="Add"/>
    </form>
  )
}

const mapToDispatch = dispatch => ({
  addTodo: todo => dispatch(ADD_TODO(todo))
})

export default connect(null, mapToDispatch)(TodoListAdd);
