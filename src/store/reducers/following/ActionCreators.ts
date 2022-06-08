import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProfile } from '../../../models/IProfile';

export const fetchFollowing = createAsyncThunk(
  'following/fetch_following',
  async (following: string, thunkAPI) => {
    try {
      const response = await axios.get<IProfile[]>(following);

      if (response.status === 200) {
        return response.data;
      }

      return thunkAPI.rejectWithValue(
        'Не удалось загрузить список подписок пользователя',
      );
    } catch (e) {
      return thunkAPI.rejectWithValue(
        'Не удалось загрузить список подписок пользователя',
      );
    }
  },
);
