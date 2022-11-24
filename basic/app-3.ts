import { counterReducer } from "./contador/contador.reducer";
import { incrementorAction, multAction } from "./contador/counter.actions";
import { Action, Reducer } from "./ngrx-fake/ngrx";
class Store<T> {
  //   private state: T;

  /**
   *
   */
  constructor(private reducer: Reducer<T>, private state: T) {
    // this.state = state;
  }

  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(counterReducer, 10);

store.dispatch(incrementorAction);
console.log(store.getState());

store.dispatch(multAction);
console.log(store.getState());
