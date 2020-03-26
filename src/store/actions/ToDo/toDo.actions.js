import * as actionTypes from '../../actionTypes/ToDo/toDo.actionTypes';

// Actions
export function storeTaskInit() {
  return {
    type: actionTypes.STORE_TASK,
  }
}

export function storeTaskSuccess(task) {
  return {
    type: actionTypes.STORE_TASK_SUCCESS,
    payload: task
  }
}

export function storeTaskFailed(err) {
  return {
    type: actionTypes.STORE_TASK_FAILED,
    payload: err
  }
}

// Action Creators
export function storeTask(task) {
  return (dispatch, getState) => {
    dispatch(storeTaskInit());
    // TODO: Add Axios
    dispatch(storeTaskSuccess(task));
  };
}
