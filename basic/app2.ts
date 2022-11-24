import {
  incrementorAction,
  multAction,
  restAction,
  divAction,
  resetAction,
} from "./contador/counter.actions";
import { Action } from "./ngrx-fake/ngrx";

export function Reducer(state = 10, action: Action) {
  switch (action.type) {
    case "ADD":
      return (state += 1);

    case "REST":
      return (state -= 1);
    case "MUL":
      return state * action.payload;
    case "DIV":
      return state / action.payload;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
}

console.log(Reducer(10, resetAction));
console.log(Reducer(10, incrementorAction));
console.log(Reducer(10, multAction));
console.log(Reducer(10, restAction));
console.log(Reducer(10, divAction));
