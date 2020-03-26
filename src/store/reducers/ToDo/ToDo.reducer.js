import { cloneDeep } from 'lodash-es';

import * as actionTypes from '../../actionTypes/ToDo/toDo.actionTypes';

export const INITIAL_STATE = {
  toDoList: [],
  isLoading: false,
  err: null
};

export default function ToDo(state = cloneDeep(INITIAL_STATE), action) {
  switch (action.type) {
    case actionTypes.STORE_TASK:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.STORE_TASK_SUCCESS:
      const newToDoList = [action.payload, ...state.toDoList];

      return {
        ...state,
        toDoList: newToDoList,
        isLoading: false,
        err: null
      };
    case actionTypes.STORE_TASK_FAILED:
      return {
        ...state,
        isLoading: false,
        err: action.err
      };
    default:
      return state;
  }
}
