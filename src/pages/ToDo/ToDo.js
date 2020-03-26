import React, {Fragment} from 'react';
import {ToDoInput} from "../../components/ToDo/ToDoInput/ToDoInput";
import { ToDoList } from '../../components/ToDo/ToDoList/ToDoList';

export function ToDo() {
  return (
    <Fragment>
      <ToDoInput />
      <ToDoList />
  </Fragment>
  );
}
