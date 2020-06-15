import React, {useRef} from "react";
import './todo-list-item.css'
import {CHANGE_DONE_STATE, CHANGE_IMPORTANT_STATE, RMV_TODO, EDIT_TODO} from "../../store/actions";
import {connect} from "react-redux";


const TodoListItem = ({label, id, removeTodo, changeImportant, changeDone, done, important, editTodo}) => {

  const textInput = useRef(null);

  const onLabelClick = () => {
    changeDone({done: !done, id})
  }

  const onMarkImportant = () => {
    changeImportant({important: !important, id})
  }

  const onFocus = () => {
    textInput.current.disabled = false;
    textInput.current.focus();
  }

  return (
    <div className={`todo-list-item${done ? ' done' : ''}${important ? ' important' : ''}`}>
      <input type="text" disabled={true} value={label} ref={textInput} onClick={onLabelClick} onChange={(event) => editTodo({id, label: event.target.value })}
             className={`todo-list-item-label${done ? ' done' : ''}${important ? ' important' : ''}`}/>

      <button type="button"
              onClick={() => removeTodo(id)}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o"/>
      </button>

      <button type="button"
              onClick={() => onFocus()}
              className="btn btn-outline-info btn-sm float-right">
        <i className="fa fa-pencil-square-o"/>
      </button>

      <button type="button"
              onClick={onLabelClick}
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-check"/>
      </button>


      <button type="button"
              onClick={onMarkImportant}
              className="btn btn-outline-primary btn-sm float-right">
        <i className="fa fa-exclamation"/>
      </button>

    </div>
  )
}

const mapDispatch = (dispatch) => ({
  removeTodo: id => dispatch(RMV_TODO(id)),
  editTodo: data => dispatch(EDIT_TODO(data)),
  changeDone: todo => dispatch(CHANGE_DONE_STATE(todo)),
  changeImportant: todo => dispatch(CHANGE_IMPORTANT_STATE(todo))
});

export default connect(null, mapDispatch)(TodoListItem);

