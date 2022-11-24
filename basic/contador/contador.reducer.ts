import { Action } from "../ngrx-fake/ngrx";

export function counterReducer(state = 10, action: Action) {
  switch (action.type) {
    case "ADD":
      return (state += 1);

    case "REST":
      return (state -= 1);
    case "MUL":
      return state * action.payload;
    case "DIV":
      return state / action.payload;
    default:
      return state;
  }
}
