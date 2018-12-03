import {combineReducers} from "redux";
import recipes from './reducers/recipes';
import user from './reducers/user';

export default combineReducers({
  recipes,
  user
});
