import React, {useRef} from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import { toDoInputStyle } from './ToDoInput.style';
import useToDo from '../../../hooks/ToDo/ToDo.hook';

export function ToDoInput() {
  const {toDoList, addToDo} = useToDo();
  const toDoInputRef = useRef(null);
  const classes = toDoInputStyle();
  
  const onAddToDo = (event) => {
    if (event.keyCode === 13) {
      const toDo = toDoInputRef.current.value;
      addToDo(toDo).then(() => {
        console.log(toDoInputRef.current);
        toDoInputRef.current.value = null;
      });
    }
  };

  return (
    <Grid container>
      <Grid item xs={1} sm={2} md={3} lg={4} />
      <Grid item xs={10} sm={8} md={6} lg={4} className={classes.inputContainer}>
        <h1>a: {JSON.stringify(toDoList)}</h1>
        <TextField
          id="standard-basic"
          label="Add task"
          onKeyUp={onAddToDo}
          inputRef={toDoInputRef}
          className={classes.inputText}
          inputProps={{
          maxLength: 50,
        }}  />
      </Grid>
      <Grid item xs={1} sm={2} md={3} lg={4} />
    </Grid>
    
  );
}
