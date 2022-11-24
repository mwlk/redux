import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @Input() counter!: number;
  @Output() changeCounter = new EventEmitter<number>();
  constructor() {}

  multiply() {
    this.counter *= 2;
    this.changeCounter.emit(this.counter);
  }
  divide() {
    this.counter /= 2;
    this.changeCounter.emit(this.counter);
  }
  resetChildren(newCounter: number) {
    this.counter = newCounter;
    this.changeCounter.emit(this.counter);
  }
}
