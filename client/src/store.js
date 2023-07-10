import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userListReducer,usercreateReducer,userdetailsReducer,userupdateReducer  } from './reducer/userReducer';

const reducer = combineReducers({
    userList: userListReducer,
    userCreate:usercreateReducer, 
    userDetails:userdetailsReducer,
    userUpdate:userupdateReducer,
});
const initialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;