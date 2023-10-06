import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import usersSlice from "../redux/users.slice";
import sightingsSlice from "../redux/sightings.slice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    sightings: sightingsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
