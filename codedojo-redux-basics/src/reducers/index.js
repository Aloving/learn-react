import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from '../actions';

function todoReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        title: action.title,
        completed: false,
      };
    case ADD_TODO:
      if (state.id !== action.id) {
        return todo;
      }

      return Object.assign({}, todo, {
        completed: !todo.completed,
      });
    case EDIT_TODO:
      if (state.id !== action.id) {
        return todo;
      }

      return Object.assign({}, todo, {
        title: action.title,
      });
  }
}

function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return (todos = [...state, todoReducer(undefined, action)]);
    case DELETE_TODO:
      const index = state.findIndex(todo => todo.id === action.id);
      return (todos = [
        ...state.slice(0, index),
        ...this.todos.slice(index + 1),
      ]);
    case TOGGLE_TODO:
      return (todos = state.map(todo => todoReducer(todo, action)));
    case EDIT_TODO:
      return (todos = state.map(todo => todoReducer(todo, action)));
    default:
      return state;
  }
}

export default reducer;
