import {createSelector} from 'reselect';

export const toDoSelector = state => state.ToDo;
export const toDoListSelector = state => state.ToDo.toDoList;

export const allToDoSelector = createSelector(toDoListSelector);

export const doneToDoSelector = createSelector(
  toDoListSelector,
  toDoList => toDoList.filter(task => task.status === 'DONE')
);

export const pendingToDoSelector = createSelector(
  toDoListSelector,
  toDoList => toDoList.filter(task => task.status === 'PENDING')
);
