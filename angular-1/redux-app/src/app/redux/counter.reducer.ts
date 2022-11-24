import { Action, createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  multiply,
  divide,
} from './counter.actions';

export const initialState = 20;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(multiply, (state, { factor }) => state * factor),
  on(divide, (state, { divisor }) => state / divisor),
  on(reset, (state) => initialState)
);

export function counterReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}
