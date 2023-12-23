// import { RootState } from './store';
import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({});

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
    // @ts-ignore
    return combinedReducer(state, action);
  }
};

export type RootState = ReturnType<typeof combineReducers>;

export default rootReducer;
