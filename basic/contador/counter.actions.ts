import { Action } from "../ngrx-fake/ngrx";

export const restAction: Action = {
  type: "REST",
};
export const incrementorAction: Action = {
  type: "ADD",
};

export const multAction: Action = {
  type: "MUL",
  payload: 2,
};
export const divAction: Action = {
  type: "DIV",
  payload: 2,
};

export const resetAction: Action = {
  type: "RESET",
};
