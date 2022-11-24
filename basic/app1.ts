//actions

import { divAction } from "./contador/counter.actions";
import { Action } from "./ngrx-fake/ngrx";


function Reducer(state = 10, action: Action) {
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


// use reducer
console.log(Reducer(10, divAction));
