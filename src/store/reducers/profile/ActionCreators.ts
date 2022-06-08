import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IProfile } from '../../../models/IProfile';
import { PROFILE_URL } from '../../../const';

export const fetchProfile = createAsyncThunk(
  'profile/fetch_profile',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IProfile>(PROFILE_URL);

      if (response.status === 200) {
        return response.data;
      }

      return thunkAPI.rejectWithValue(
        'Не удалось загрузить профиль пользователя',
      );
    } catch (e) {
      return thunkAPI.rejectWithValue(
        'Не удалось загрузить профиль пользователя',
      );
    }
  },
);
