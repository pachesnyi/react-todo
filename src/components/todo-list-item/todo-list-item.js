import React from "react";
import './todo-list-item.css'
import {CHANGE_DONE_STATE, CHANGE_IMPORTANT_STATE, RMV_TODO} from "../../store/actions";
import {connect} from "react-redux";


const TodoListItem = ({label, id, removeTodo, changeImportant, changeDone, done, important}) => {

  const onLabelClick = ()=> {
    changeDone({ done: !done, id})
  }

  const onMarkImportant = ()=> {
    changeImportant({ important: !important, id})
  }

  return (
    <span className={`todo-list-item${done ? ' done' : ''}${important ? ' important' : ''}`}>
        <span
          className="todo-list-item-label"
          onClick={onLabelClick}
        >
          {label}
        </span>

        <button type="button"
                onClick={onMarkImportant}
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation"/>
        </button>

        <button type="button"
                onClick={() => removeTodo(id)}
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o"/>
        </button>
    </span>
  )
}

const mapDispatch = (dispatch) => ({
  removeTodo: id => dispatch(RMV_TODO(id)),
  changeDone: todo => dispatch(CHANGE_DONE_STATE(todo)),
  changeImportant: todo => dispatch(CHANGE_IMPORTANT_STATE(todo))
});

export default connect(null, mapDispatch)(TodoListItem);

