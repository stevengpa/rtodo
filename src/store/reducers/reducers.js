import {combineReducers} from "redux";
import ToDo from '../reducers/ToDo/ToDo.reducer';

export const rootReducer = combineReducers({ ToDo });
