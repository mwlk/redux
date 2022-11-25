import * as actions from './../ngrx/todo.actions';
import { FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('editInput') fisicInput: ElementRef | undefined;

  checkCompleted: FormControl = new FormControl(false);
  txtInput: FormControl = new FormControl('');

  editing: boolean = false;
  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    // console.log(this.todo);
    this.checkCompleted = new FormControl(this.todo?.completed);
    this.txtInput = new FormControl(this.todo?.text, [Validators.required]);

    this.checkCompleted.valueChanges.subscribe((value: boolean) => {
      this._store.dispatch(actions.toggle({ id: this.todo?.id }));
    });
  }
  edit() {
    this.editing = true;
    this.txtInput.setValue(this.todo?.text);

    setTimeout(() => {
      this.fisicInput?.nativeElement.select();
    }, 0.01);
  }

  finishEdit() {
    this.editing = false;
    if (this.txtInput.invalid || this.txtInput.value === this.todo.text) return;

    this._store.dispatch(
      actions.edit({
        id: this.todo?.id,
        text: this.txtInput.value,
      })
    );
  }

  delete(){
    this._store.dispatch(actions.deleted({id: this.todo.id}))
  }
}
