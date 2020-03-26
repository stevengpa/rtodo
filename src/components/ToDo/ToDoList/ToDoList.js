import React from 'react';
import MaterialTable from 'material-table';
import {Grid} from "@material-ui/core";

import useToDo from '../../../hooks/ToDo/ToDo.hook';

export function ToDoList() {
  const {toDoList} = useToDo();
  const columns = [{ title: 'Task', field: 'task', searchable: false }, { title: 'Actions', searchable: false }];
  
  return (
    <Grid container>
      <Grid item xs={1} sm={2} md={3} lg={4} />
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <h1>toDoList: {JSON.stringify(toDoList)}</h1>
        <MaterialTable
          columns={columns}
          data={toDoList}
          title={null}
          search
        />
      </Grid>
      <Grid item xs={1} sm={2} md={3} lg={4} />
    </Grid>
  );
}
