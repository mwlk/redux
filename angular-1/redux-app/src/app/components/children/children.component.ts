import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent implements OnInit {
  @Input() counter!: number;
  @Output() changeCounter = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  resetChildren() {
    this.counter = 0;
    this.changeCounter.emit(this.counter)
  }
}
