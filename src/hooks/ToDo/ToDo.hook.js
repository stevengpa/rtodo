import {useContext} from 'react';

import ToDoContext from '../../hooks/ToDo/ToDoContext.hook';

function useToDo() {
  const { toDoList, setToDoList } = useContext(ToDoContext);
  
  const addToDo = async toDoItem => {
    try {
      console.log('addToDo');
      const newToDo = { task: toDoItem, status: 'PENDING' };
      setToDoList(newToDo);
      return true;
    } catch (e) {
      console.error(e);
      return e;
    }
  };
  
  return {
    toDoList,
    addToDo
  };
}

export default useToDo;
