// import { RootState } from './store';
import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { authReducer } from "./auth/auth.reducer";

const combinedReducer = combineReducers({
  [authReducer.name]: authReducer.reducer,
});

const rootReducer: (
  state: any,
  action: any
) => ReturnType<typeof combinedReducer> = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export type RootState = ReturnType<typeof combineReducers>;

export default rootReducer;
