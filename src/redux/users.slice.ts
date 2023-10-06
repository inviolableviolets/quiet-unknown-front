import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../models/user";
import { UserRepository } from "../services/user.repository";
import { ApiLoginResponse } from "../types/api.response";

export type UsersState = {
  users: User[];
  currentUser: User["userName"];
  userSubmissions: User["submissions"];
  token?: string;
  loginError: boolean | null;
};

const initialState: UsersState = {
  users: [] as User[],
  currentUser: "",
  userSubmissions: [],
  token: localStorage.getItem("userToken") as string | undefined,
  loginError: null,
};

export const registerUserAsync = createAsyncThunk<
  User,
  { repo: UserRepository; user: Partial<User> }
>("users/register", async ({ repo, user }) => {
  return await repo.register(user);
});

export const loginUserAsync = createAsyncThunk<
  ApiLoginResponse,
  { repo: UserRepository; user: Partial<User> }
>("users/login", async ({ repo, user }) => {
  const result = await repo.login(user);
  localStorage.setItem("userToken", result.token as string);
  return result;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logoutUser: (state) => ({
      ...state,
      token: undefined,
      loginError: null,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(registerUserAsync.fulfilled, (state, { payload }) => ({
      ...state,
      users: [...state.users, payload],
    }));

    builder.addCase(loginUserAsync.fulfilled, (state, { payload }) => ({
      ...state,
      currentUser: payload.user.userName,
      userSubmissions: payload.user.submissions,
      token: payload.token,
      loginError: false,
    }));

    builder.addCase(loginUserAsync.pending, (state) => ({
      ...state,
      loginError: null,
    }));

    builder.addCase(loginUserAsync.rejected, (state) => ({
      ...state,
      loginError: true,
    }));
  },
});

export default usersSlice.reducer;
export const ac = usersSlice.actions;
