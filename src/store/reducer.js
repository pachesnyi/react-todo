const initialState = {
  todos: [
    {
      label: 'Drink Coffee',
      done: false,
      important: false,
      id: 1
    },
    {
      label: 'Make Awesome App',
      done: false,
      important: true,
      id: 2
    },
    {
      label: 'Have a lunch',
      done: false,
      important: false,
      id: 3
    }
  ]
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const maxId = state.todos.reduce((acc, item) => acc > item.id ? acc : item.id, 0)
      return {
        ...state,
        todos: [...state.todos, action.todo = {...action.todo, id: maxId + 1}]
      }

    case "RMV_TODO":
      return {
        ...state,
        todos: [...state.todos.filter(item => item.id !== action.id)]
      }

    case "CHANGE_DONE_STATE":
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.id ? {...todo, done: action.done} : todo)
      }

    case "CHANGE_IMPORTANT_STATE":
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.id ? {...todo, important: action.important} : todo)
      }

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.reduce((acc, item) => {
          if (item.id === action.id)
            item.label = action.label
          acc.push(item)
          return acc
        }, [])
      };

    default:
      return state;
  }
};

export default reducers;
