import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] Create Task',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle Task',
  props<{ id: number }>()
);

export const edit = createAction(
  '[TODO] Edit Task',
  props<{ id: number; text: string }>()
);

export const deleted = createAction(
  '[TODO] Delete Task',
  props<{ id: number }>()
);
