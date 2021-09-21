import {ADD_TODO, REMOVE_TODO, MARK_COMPLETE} from '../action/action.types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    case MARK_COMPLETE:
      return state.map(todo => {
        if (todo.id == action.payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });

    default:
      return state;
  }
};
