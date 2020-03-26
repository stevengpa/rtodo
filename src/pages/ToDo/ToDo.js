import React, {Fragment} from 'react';
import {ToDoInput} from "../../components/ToDo/ToDoInput/ToDoInput";
import { ToDoList } from '../../components/ToDo/ToDoList/ToDoList';
import useToDo from '../../hooks/ToDo/ToDo.hook';

export function ToDo() {
  const {pendingToDoList, addToDo} = useToDo();
  return (
    <Fragment>
      <ToDoInput addToDo={addToDo} />
      <ToDoList toDoList={pendingToDoList} />
  </Fragment>
  );
}
