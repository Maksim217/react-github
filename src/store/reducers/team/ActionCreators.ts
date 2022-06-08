import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../../store/store';
import { teamSlice } from '../team/TeamSlice';
import { LocalStorage } from '../../../services/storage';
import { Reducer } from '../../../const';
import { IProfile } from '../../../models/IProfile';
import { USERS_URL, Storage, Sorting } from '../../../const';

const localStorage: LocalStorage = new LocalStorage(window);

export const fetchUsers = createAsyncThunk(
  'team/fetch_users',
  async (_, thunkAPI) => {
    try {
      const set = new Set<number>();
      const team: IProfile[] = JSON.parse(localStorage.get(Storage.Team)) || [];
      const { status, data } = await axios.get<IProfile[]>(USERS_URL);

      if (status !== 200) {
        return thunkAPI.rejectWithValue(
          'Не удалось загрузить список пользователей',
        );
      }

      team.forEach((user) => set.add(user.id));
      const users = data.map((user) => {
        if (set.has(user.id)) {
          user.is_member_team = true;
          return user;
        }
        user.is_member_team = false;
        return user;
      });

      return { team, users };
    } catch (e) {
      return thunkAPI.rejectWithValue(
        'Не удалось загрузить список пользователей',
      );
    }
  },
);

export const addToTeam =
  (user: IProfile) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(teamSlice.actions.add(user));
    const team = [...getState()[Reducer.Team].team];
    const teamJson = JSON.stringify(team);
    localStorage.set(Storage.Team, teamJson);
  };

export const removeFromTeam =
  (id: number) => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(teamSlice.actions.remove(id));
    const team = [...getState()[Reducer.Team].team];
    const teamJson = JSON.stringify(team);
    localStorage.set(Storage.Team, teamJson);
  };

export const sortTeam = (sortType: Sorting) => (dispatch: AppDispatch) =>
  dispatch(teamSlice.actions.sort(sortType));
