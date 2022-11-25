import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from 'src/app/redux/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  counter!: number;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.select('count').subscribe((count) => {
      this.counter = count;
    });
  }

  multiply() {
    this.store.dispatch(actions.multiply({ factor: 3 }));
  }
  divide() {
    this.store.dispatch(actions.divide({ divisor: 2 }));
  }
}
