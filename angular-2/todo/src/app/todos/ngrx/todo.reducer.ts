import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import * as actions from './todo.actions';

const initialState: Todo[] = [
  new Todo('Backup'),
  new Todo('Access Denied'),
  new Todo('Update VPN Security'),
  new Todo('Clean Firewall'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.create, (state, { text }) => [...state, new Todo(text)]),
  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),

  //! edit task
  on(actions.edit, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          //? text: text
          text,
        };
      } else {
        return todo;
      }
    });
  }),

  //! delete task
  on(actions.deleted, (state, { id }) => {
    return state.filter((todo) => todo.id !== id);
  })
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
