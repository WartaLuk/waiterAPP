import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import initialState from "./initialState";
import thunk from "redux-thunk";
import tablesReducer from "./tablesRedux";

const reducers = combineReducers({ tables: tablesReducer });

const store = createStore(
  reducers,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
