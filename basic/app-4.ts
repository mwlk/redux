import { incrementorAction, multAction } from './contador/counter.actions';
import { createStore, Store } from "redux";
import { counterReducer } from "./contador/contador.reducer";

const store: Store = createStore(counterReducer);

store.subscribe(() =>{
    console.log(`sub ${store.getState()}`);
})

store.dispatch(incrementorAction)
store.dispatch(multAction)
