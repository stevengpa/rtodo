import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {isEmpty} from 'lodash-es';

import { toDoInputStyle } from './ToDoInput.style';

export function ToDoInput(props) {
  const [inputValue, setInputValue] = useState('');
  const classes = toDoInputStyle();
  
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  
  const onKeyUpHandler = (event) => {
    if (event.keyCode === 13 && !isEmpty(inputValue)) {
      props.addToDo(inputValue).then(() => setInputValue(''));
    }
  };

  return (
    <Grid container>
      <Grid item xs={1} sm={2} md={3} lg={4} />
      <Grid item xs={10} sm={8} md={6} lg={4} className={classes.inputContainer}>
        <TextField
          id="standard-basic"
          label="Add task"
          onChange={onChangeHandler}
          onKeyUp={onKeyUpHandler}
          className={classes.inputText}
          value={inputValue}
          inputProps={{
          maxLength: 50,
        }}  />
      </Grid>
      <Grid item xs={1} sm={2} md={3} lg={4} />
    </Grid>
    
  );
}
