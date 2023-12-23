import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  refreshToken: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});
