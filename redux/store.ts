import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = ReturnType<AppStore["dispatch"]>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
