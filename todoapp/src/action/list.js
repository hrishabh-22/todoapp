import {ADD_TODO, REMOVE_TODO, MARK_COMPLETE} from './action.types';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id,
});

export const markComplete = id => ({
  type: MARK_COMPLETE,
  payload: id,
});
