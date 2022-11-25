interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export class Todo implements ITodo {
  id: number;
  text: string;
  completed: boolean;

  /**
   *
   */
  constructor(description: string) {
    this.text = description;
    this.id = Math.random();
    this.completed = false;
  }
}
