export const ADD_TODO = todo => dispatch => {
    dispatch({
        type: "ADD_TODO",
        todo: todo
    })
};

export const RMV_TODO = id => dispatch => {
    dispatch({
        type: "RMV_TODO",
        id
    })
};

export const CHANGE_DONE_STATE = todo => dispatch => {
  dispatch({
    type: 'CHANGE_DONE_STATE',
    id: todo.id,
    done: todo.done
  })
}

export const CHANGE_IMPORTANT_STATE = todo => dispatch => {
  dispatch({
    type: 'CHANGE_IMPORTANT_STATE',
    id: todo.id,
    important: todo.important
  })
}

export const EDIT_TODO = todo => dispatch => {
  const {id, ...otherData} = todo;

  dispatch({
    type: "EDIT_TODO",
    id: todo.id,
    dataToChange: otherData
  })
}
