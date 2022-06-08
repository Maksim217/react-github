import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import profileReducer from './reducers/profile/ProfileSlice';
import reposReducer from './reducers/repos/ReposSlice';
import followingReducer from './reducers/following/FollowingSlice';
import teamReducer from './reducers/team/TeamSlice';
import { Reducer } from '../const';

export const store = configureStore({
  reducer: {
    [Reducer.Profile]: profileReducer,
    [Reducer.Repos]: reposReducer,
    [Reducer.Following]: followingReducer,
    [Reducer.Team]: teamReducer,
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
