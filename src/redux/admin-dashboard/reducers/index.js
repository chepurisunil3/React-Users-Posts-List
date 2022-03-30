import { combineReducers } from "redux";
import { UsersList as user } from "./users-list";
import { PostsList as posts } from "./posts-list";
const rootReducer = (state = {}, action) => {
  return appReducer(state,action); 
}

const appReducer = combineReducers({
  user,
  posts
})
export default rootReducer;