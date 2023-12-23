import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IUser = {
  about: null | string;
  accessToken: string;
  createdAt: Date;
  email: string;
  firstName: null | string;
  id: number;
  isBanned: number;
  isVerified: number;
  lastName: null | string;
  profile: null | string;
  refreshToken: string;
  reputation: null | string;
  role_id: number;
  updatedAt: Date;
  username: string;
};

type IInitialState = {
  user: null | IUser;
  token: null | string;
  refreshToken: null | string;
};

const initialState: IInitialState = {
  user: null,
  token: null,
  refreshToken: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { setUser } = authReducer.actions;
