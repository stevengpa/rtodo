import {uniqueId} from 'lodash-es';
import {useDispatch, useSelector} from 'react-redux';

import * as selectors from '../../store/selectors/ToDo/ToDo.selectors';
import * as actions from '../../store/actions/ToDo/toDo.actions';

function useToDo() {
  const pendingToDoList = useSelector(selectors.pendingToDoSelector);
  
  const dispatch = useDispatch();

  const addToDo = async toDoItem => {
    try {
      const newToDo = { task: toDoItem, status: 'PENDING', id: uniqueId() };
      dispatch(actions.storeTask(newToDo));
      return true;
    } catch (e) {
      console.error(e);
      return e;
    }
  };
  
  return {
    pendingToDoList,
    addToDo
  };
}

export default useToDo;
