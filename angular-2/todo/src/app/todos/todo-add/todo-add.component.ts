import * as actions from './../ngrx/todo.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  todoInput: FormControl;
  constructor(private _store: Store<AppState>) {
    this.todoInput = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {}

  add() {
    if (this.todoInput.invalid) return;

    this._store.dispatch(actions.create({ text: this.todoInput.value }));

    this.todoInput.reset()
  }
}
