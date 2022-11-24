import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './redux/counter.actions';
interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'redux-app';

  counter!: number;

  /**
   *
   */
  constructor(private _store: Store<AppState>) {}
  ngOnInit(): void {
    this._store.select('count').subscribe((count) => {
      // console.log(count);
      this.counter = count;
    });
  }

  increment() {
    this._store.dispatch(actions.increment());
  }

  decrement() {
    this._store.dispatch(actions.decrement());
  }
}
