import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from 'src/app/redux/counter.actions';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent implements OnInit {
  counter!: number;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('count').subscribe((count) => {
      this.counter = count;
    });
  }

  reset() {
    this.store.dispatch(actions.reset());
  }
}
