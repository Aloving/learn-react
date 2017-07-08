import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from '../actions';

function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      const todo = {
        id: action.id,
        title: action.title,
        completed: false,
      };

      return (todos = [...state, todo]);
    case DELETE_TODO:
      const index = state.findIndex(todo => todo.id === action.id);
      return (todos = [
        ...state.slice(0, index),
        ...this.todos.slice(index + 1),
      ]);
    case TOGGLE_TODO:
      return (todos = state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return Object.assign({}, todo, {
          completed: !todo.completed,
        });
      }));
    case EDIT_TODO:
      return (todos = state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return Object.assign({}, todo, {
          title: action.title,
        });
      }));
    default:
      return state;
  }
}

export default reducer;
